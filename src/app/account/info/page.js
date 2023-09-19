"use client";
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { auth, db } from '@/config/firebase-config';

import { doc, updateDoc, collection, getDocs, query, where } from 'firebase/firestore';
import { updatePassword, updateEmail, signOut } from "firebase/auth"
import { useUserData } from '@/app/components/user-components/useUserData';
import { parse } from 'postcss';


const AccountInformation = () => {

  const router = useRouter();
  
  const [currentUser, setCurrentUser] = useState(null);
  const userData = useUserData();
  const [formValues, setFormValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    birthDate: ['', '', ''],
    newPassword: '',
    confirmNewPassword: ''
  });


  const [userAuthenticated, setUserAuthenticated] = useState(true);

  const [emailError, setEmailError] = useState(false);
  const [passwordMatchError, setPasswordMatchError] = useState(false);
  const [passwordWeakError, setPasswordWeakError] = useState(false);
  const [phoneNumberError, setPhoneNumberError] = useState(false);
  const [birthDateError, setBirthDateError] = useState(false);
  const [updateSuccess, setUpdateSuccess] = useState(false);
  const [emptyError, setEmptyError] = useState(false);

  var date = new Date();
  


  
  useEffect(() => {
    if (userData != null) {
      setFormValues({
        firstName: userData.firstName || '',
        lastName: userData.lastName || '',
        email: userData.email || '',
        phoneNumber: userData.phoneNumber || '',
        birthDate: [
          userData.birthMonth || '',
          userData.birthDay || '',
          userData.birthYear || ''
        ],
        newPassword: '',
        confirmNewPassword: ''
      });
      setUserAuthenticated(true);
      
    }
  }, [userData]);

  useEffect(() => {
    setCurrentUser(auth.currentUser);
  }, [auth.currentUser]);
          
  
  useEffect(() => {
    if(emailError || passwordMatchError || passwordWeakError || phoneNumberError || birthDateError || updateSuccess || emptyError) {
      setTimeout(() => {
        setEmailError(false);
        setPasswordMatchError(false);
        setPasswordWeakError(false);
        setPhoneNumberError(false);
        setBirthDateError(false);
        setUpdateSuccess(false);
        setEmptyError(false);
      }, 3000);
    }

  }, [emailError, passwordMatchError, passwordWeakError, phoneNumberError, birthDateError, updateSuccess, emptyError]);

  // Check if user is google user to show password section
  const shouldShowPasswordSection = userData != null && !userData.email.endsWith('@gmail.com');

  // Logout
  const logout = async () => {
    try {
        setCurrentUser(null);
        await signOut(auth);
        localStorage.removeItem("userAuthenticated");
    } catch (error) {
        console.log(error);
    }
  };

  // Check if email already exists
  const isEmailAlreadyExists = async (email) => {
    const usersRef = collection(db, 'users');
    const querySnapshot = await getDocs(query(usersRef, where('email', '==', email)));
    return !querySnapshot.empty; 
  };
  
  
  // Form validation and update
  const handleUpdate = async () => {
    setEmailError(false);
    setPasswordMatchError(false);
    setPasswordWeakError(false);
    setPhoneNumberError(false);
    setBirthDateError(false);
    setUpdateSuccess(false);
    setEmptyError(false);


    

    try {
      const updatedData = {};
      if(formValues.firstName == userData.firstName && formValues.lastName == userData.lastName && formValues.email == userData.email && formValues.phoneNumber == userData.phoneNumber && formValues.birthDate[0] == userData.birthMonth && formValues.birthDate[1] == userData.birthDay && formValues.birthDate[2] == userData.birthYear && formValues.newPassword == '' && formValues.confirmNewPassword == '') {
        return;
      } else if(formValues.firstName == '' || formValues.lastName == '' || formValues.email == '' || formValues.phoneNumber == '' || formValues.birthDate[0] == '' || formValues.birthDate[1] == '' || formValues.birthDate[2] == '') {
        setEmptyError(true);
        setTimeout(() => {
          setEmptyError(false);
        }, 3000);
        return;
      }

      if (formValues.firstName !== userData.firstName) {
        updatedData.firstName = formValues.firstName;
      }
      if (formValues.lastName !== userData.lastName) {
        updatedData.lastName = formValues.lastName;
      }

      // Email verification
      if (
        formValues.email !== userData.email &&
        (formValues.email.endsWith('.com') && formValues.email.includes('@'))
      ) {
        const emailAlreadyExists = await isEmailAlreadyExists(formValues.email);

        if (emailAlreadyExists) {
          setEmailError(true);
          return;
        } else {
          updatedData.email = formValues.email;
        }
      } else {
        console.error('Invalid email format');
      }
      if (formValues.email !== userData.email) {
        if (
          formValues.email.endsWith('.com') &&
          formValues.email.includes('@')
        ) {
          updatedData.email = formValues.email;
          
          
        } else {
          setEmailError(true);
          return;
        }
      }

      // Phone number verification
      const phoneNumberPattern = /^\d{10}$/;

      if (
        formValues.phoneNumber !== userData.phoneNumber &&
        phoneNumberPattern.test(formValues.phoneNumber)
      ) {
        updatedData.phoneNumber = formValues.phoneNumber;
      } else if (
        formValues.phoneNumber !== userData.phoneNumber || 
        !phoneNumberPattern.test(formValues.phoneNumber)
      ) {
        setPhoneNumberError(true);
        return;
      }

      // Birth date verification
      const [birthMonth, birthDay, birthYear] = formValues.birthDate;
      if (
        isNaN(parseInt(birthMonth)) ||
        isNaN(parseInt(birthDay)) ||
        isNaN(parseInt(birthYear)) ||
        birthMonth.length > 2 ||
        birthDay.length > 2 ||
        birthYear.length !== 4 ||
        birthMonth < 1 ||
        birthMonth > 12 ||
        birthDay < 1 ||
        birthDay > 31 ||
        birthYear < 1900 ||
        birthYear > date.getFullYear() ||
        (birthMonth > date.getMonth() + 1 &&
          birthYear == date.getFullYear()) ||
        (birthMonth == date.getMonth() + 1 &&
          birthDay > date.getDate() &&
          birthYear == date.getFullYear())
      ) {
        setBirthDateError(true);
        return;
      } else {
        updatedData.birthMonth = birthMonth;
        updatedData.birthDay = birthDay;
        updatedData.birthYear = birthYear;
      }

      // Password verification
      if (
        formValues.newPassword !== '' &&
        formValues.newPassword === formValues.confirmNewPassword
      ) {
        updatedData.newPassword = formValues.newPassword;
        
      } else if (
        formValues.newPassword !== formValues.confirmNewPassword
      ) {
        setPasswordMatchError(true);
        return;
      }

      if (Object.keys(updatedData).length > 0) {
        const userDocRef = doc(db, 'users', auth.currentUser.uid);
        await updateDoc(userDocRef, updatedData);
        if(formValues.email !== userData.email) {
          await updateEmail(currentUser, updatedData.email);
        }
        if(formValues.newPassword !== '' && formValues.newPassword === formValues.confirmNewPassword) {
          await updatePassword(currentUser, updatedData.newPassword);
        }
        setUpdateSuccess(true);

        setTimeout(() => {
          setUpdateSuccess(false);
          router.push('/account')
        }, 3000);
      }
  
      
      
      

    } catch (error) {

      if(error.code === 'auth/requires-recent-login') {
        setUserAuthenticated(false);
          logout();
          router.push('/account/login');
        
      } else if(error.code === 'auth/weak-password') {
        setPasswordWeakError(true);
      } else {
        console.error(error);
      }
    }
  };
  
  return (
    <>
    <div className='account-info-container'>
      
      <h4>Account Information</h4>

      <div className='account-user-info'>
        <div className='account-info-group'>
            <div>
              <label>First Name</label>
              <input
                type="text"
                placeholder={userData != null && formValues.firstName != '' ? `${userData.firstName}` : 'First Name...'}
                value={formValues.firstName}
                onChange={(e) => setFormValues({ ...formValues, firstName: e.target.value })}
                style={{border: emptyError && formValues.firstName == '' ? '2px solid red' : '2px solid white'}}
              />
            </div>
            <div>
              <label>Last Name</label>
              <input
                type="text"
                placeholder={userData != null && formValues.lastName != '' ? `${userData.lastName}`: 'Last Name...'}
                value={formValues.lastName}
                onChange={(e) => setFormValues({ ...formValues, lastName: e.target.value })}
                style={{border: emptyError && formValues.lastName == '' ? '2px solid red' : '2px solid white'}}
              />
            </div>
        </div>
        <div className='account-info-group'>
            <div>
              <label>Email address</label>
              <input 
                type="text"
                placeholder={userData != null && formValues.email != '' ?  `${userData.email}`: 'Email...'}
                value={formValues.email}
                onChange={(e) => setFormValues({ ...formValues, email: e.target.value })}
                style={{border: (emailError || (emptyError && formValues.email == '')) ? '2px solid red' : '2px solid white'}}
                
              />
            </div>
        </div>
        <div className='account-info-group'>
          <div>
              <label>Phone Number</label>
              <input
                type="text"
                placeholder={userData != null && formValues.phoneNumber != '' ? `${userData.phoneNumber}`: 'Phone Number...'}
                value={formValues.phoneNumber}
                onChange={(e) => setFormValues({ ...formValues, phoneNumber: e.target.value })}
                style={{border: (phoneNumberError || (emptyError && formValues.phoneNumber == '')) ? '2px solid red' : '2px solid white'}}

              />
          </div>
          <div>
              <label>Date of Birth</label>
              <div className='account-user-dob'>
                <input
                  type="text"
                  placeholder={userData != null && formValues.birthDate[0] != '' ? `${userData.birthMonth}`: 'MM'}
                  value={formValues.birthDate[0]}
                  onChange={(e) => setFormValues({ ...formValues, birthDate: [e.target.value, formValues.birthDate[1], formValues.birthDate[2]] })}
                  style={{border: (birthDateError || (emptyError && formValues.birthDate[0] == '')) ? '2px solid red' : '2px solid white'}}
                />
                <input
                  type="text"
                  placeholder={userData != null && formValues.birthDate[1] != '' ? `${userData.birthDay}`: 'DD'}
                  value={formValues.birthDate[1]}
                  onChange={(e) => setFormValues({ ...formValues, birthDate: [formValues.birthDate[0], e.target.value, formValues.birthDate[2]] })}
                  style={{border: (birthDateError || (emptyError && formValues.birthDate[1] == '')) ? '2px solid red' : '2px solid white'}}
                />
                <input
                  type="text"
                  placeholder={userData != null  && formValues.birthDate[2] != '' ? `${userData.birthYear}`: 'YYYY'}
                  value={formValues.birthDate[2]}
                  onChange={(e) => setFormValues({ ...formValues, birthDate: [formValues.birthDate[0], formValues.birthDate[1], e.target.value] })}
                  style={{border: (birthDateError || (emptyError && formValues.birthDate[2] == '')) ? '2px solid red' : '2px solid white'}}
                />
              </div>
          </div>
        </div>
      </div>


      {shouldShowPasswordSection && (
          <div className='account-user-password'>
            <h4>Change Password</h4>
            <div>
              
              <div>
                <label>New Password</label>
                <input
                  type="password"
                  placeholder="New Password"
                  value={formValues.newPassword}
                  onChange={(e) => setFormValues({ ...formValues, newPassword: e.target.value })}
                  style={passwordMatchError || passwordWeakError ? {border: '2px solid red'} : {border: '2px solid white'}}
                />
              </div>
              <div>
                <label>Confirm New Password</label>
                <input
                  type="password"
                  placeholder="Confirm New Password"
                  value={formValues.confirmNewPassword}
                  onChange={(e) => setFormValues({ ...formValues, confirmNewPassword: e.target.value })}
                  style={passwordMatchError || passwordWeakError ? {border: '2px solid red'} : {border: '2px solid white'}}
                />
              </div>
            </div>
          </div>
        )}

      {!userAuthenticated && <h4 className='error'>You must re-authenticate to change your password or email</h4>}
      {emailError && <h4 className='error'>Email already exists or is invalid</h4>}
      {passwordMatchError && <h4 className='error'>Passwords do not match</h4>}
      {passwordWeakError && <h4 className='error'>Password must be at least 6 characters</h4>}
      {phoneNumberError && <h4 className='error'>Phone number must be 10 digits</h4>}
      {birthDateError && <h4 className='error'>Invalid birth date</h4>}
      {updateSuccess && <h4 className='success'>Update successful. Redirecting...</h4>}
      {emptyError && <h4 className='error'>Please fill out all fields</h4>}

      <button onClick={handleUpdate}>UPDATE</button>
    </div>
    </>
  )
}

export default AccountInformation