
"use client";
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc, collection, addDoc } from 'firebase/firestore';
import { auth, db } from '@/config/firebase-config';
import { useEffect, useState } from 'react';
import CountryDropdown from '@/app/components/utility-components/CountryDropdown';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faClock, faGift, faUser } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link';
import { useRouter } from 'next/navigation'

const Signup = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [country, setCountry] = useState('');
  const [birthMonth, setBirthMonth] = useState('');
  const [birthDay, setBirthDay] = useState('');
  const [birthYear, setBirthYear] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const database = db;
  const router = useRouter();

  const [birthDateError, setBirthDateError] = useState(false);
  const [phoneNumberError, setPhoneNumberError] = useState(false);
  const [zipCodeError, setZipCodeError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [userExistsError, setUserExistsError] = useState(false);
  const [countryError, setCountryError] = useState(false);
  const [passwordMatchError, setPasswordMatchError] = useState(false);
  const [passwordWeakError, setPasswordWeakError] = useState(false);
  const [formIsEmpty, setFormIsEmpty] = useState(false);
  const [userCreated, setUserCreated] = useState(false);
    
  var date = new Date();
  //Handle country change
  const handleCountryChange = (event) => {
    setCountry(event.target.value);
  };

  useEffect(() => {
    if(birthDateError || phoneNumberError || zipCodeError || emailError || userExistsError || countryError || passwordMatchError || passwordWeakError || formIsEmpty) {
        setTimeout(() => {
            setBirthDateError(false);
            setPhoneNumberError(false);
            setZipCodeError(false);
            setEmailError(false);
            setUserExistsError(false);
            setCountryError(false);
            setPasswordMatchError(false);
            setPasswordWeakError(false);
            setFormIsEmpty(false);
        }, 3000);
    }

  }, [birthDateError, phoneNumberError, zipCodeError, emailError, userExistsError, countryError, passwordMatchError, passwordWeakError, formIsEmpty])
  
  //Handle signup
  const handleSignup = async (e) => {
    e.preventDefault();
    setBirthDateError(false);
    setPhoneNumberError(false);
    setZipCodeError(false);
    setEmailError(false);
    setUserExistsError(false);
    setPasswordMatchError(false);
    setPasswordWeakError(false);
    setCountryError(false);
    setFormIsEmpty(false);

    if(phoneNumber == '' || zipCode == '' || birthMonth == '' || birthDay == '' || birthYear == '' || password == '' || confirmPassword == '' || country == '' || firstName == '' || lastName == '' || email == '') {
        setFormIsEmpty(true);
        
        return;
    }
    
    if (isNaN(phoneNumber)) {
        setPhoneNumberError(true);
        return; 
      } else if(phoneNumber.length !== 10) {
        setPhoneNumberError(true);
        return;
      } else if(isNaN(zipCode)) {
          setZipCodeError(true);
          return;
      } else if(zipCode.length !== 5) {
          setZipCodeError(true);
          return;
      } else if(isNaN(birthMonth) || isNaN(birthDay) || isNaN(birthYear)) {
          setBirthDateError(true);
          return;
      } else if(birthMonth.length > 2 || birthDay.length > 2 || birthYear.length !== 4 
            || birthMonth < 1 || birthMonth > 12 || birthDay < 1 || birthDay > 31 || birthYear < 1900 || birthYear > date.getFullYear()
            || (birthMonth > date.getMonth()+1 && birthYear == date.getFullYear()) || (birthMonth == date.getMonth()+1 && birthDay > date.getDate() && birthYear == date.getFullYear())
        ) {
          setBirthDateError(true);
          return;
      } else if (password !== confirmPassword) {
          setPasswordMatchError(true);  
          return;
      } else if(country === '') {
            setCountryError(true);
            return;
      }

    


    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      const usersRef = collection(db, 'users');

      const userObject = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        phoneNumber: phoneNumber,
        zipCode: zipCode,
        country: country,
        birthMonth: birthMonth,
        birthDay: birthDay,
        birthYear: birthYear,

      };

      const userDocRef = doc(usersRef, userCredential.user.uid);

      
      await setDoc(userDocRef, userObject);

      setUserCreated(true)
      router.push('/user-authentication/login');
      
    } catch (error) {
       if (error.code === 'auth/invalid-email' || error.code === 'auth/email-already-in-use') {
        setEmailError(true);
         
       } else if (error.code === 'auth/weak-password') {
            setPasswordWeakError(true);
       } else if(error.code === 'auth/missing-email' || error.code === 'auth/missing-password') {
            setFormIsEmpty(true);
       } else {
        console.error('Error signing up:', error.message);
       }
    }
  };

  return (
    <>
        <div className='signup-page'>
            
            <form onSubmit={handleSignup} className='signup-content'>
                <h1>Sign Up</h1>
                <div>
                    <label htmlFor="name">Name</label>
                    <div>
                        <input type="text" placeholder="First Name" onChange={(e) => setFirstName(e.target.value)} 
                            style={formIsEmpty && firstName == '' ? {border: '2px solid red'} : {border: '2px solid white'}}
                        />
                        <input type="text" placeholder="Last Name" onChange={(e) => setLastName(e.target.value)} style={formIsEmpty && firstName == '' ? {border: '2px solid red'} : {border: '2px solid white'}}/>
                    </div>
                </div>

                
                <div>
                    <label htmlFor="email">Email</label>
                    <div>
                        <input type="email" placeholder="Email" className='emailInput' onChange={(e) => setEmail(e.target.value)} 
                            style={(emailError || (formIsEmpty && email == '')) ? {border: '2px solid red'} : {border: '2px solid white'}}
                        />
                    </div>
                </div>

                
                <div>
                    <label htmlFor="phoneNumber">Phone # and Zip Code</label>
                    <div>
                        <input type="tel" placeholder="Phone Number" onChange={(e) => setPhoneNumber(e.target.value)} 
                            style={(phoneNumberError || (formIsEmpty && phoneNumber == '')) ? {border: '2px solid red'} : {border: '2px solid white'}}
                        />
                        <input type="text" placeholder="Zip Code" onChange={(e) => setZipCode(e.target.value)} 
                            style={(zipCodeError || (formIsEmpty && zipCode == '')) ? {border: '2px solid red'} : {border: '2px solid white'}}
                        />
                    </div>
                </div>


                <div className='countries-dropdown'>
                    <CountryDropdown onCountryChange={handleCountryChange} countryError={countryError}
                        isEmpty={formIsEmpty && country == ''}
                    />
                </div>

                
                <div className='birth-date'>
                    <label htmlFor="birthDate">Date of Birth</label>
                    <div>
                        <input type="text" placeholder="MM" onChange={(e) => setBirthMonth(e.target.value)} 
                            style={(birthDateError || (formIsEmpty && birthMonth == '')) ? {border: '2px solid red'} : {border: '2px solid white'}}
                        />
                        <input type="text" placeholder="DD" onChange={(e) => setBirthDay(e.target.value)} 
                            style={(birthDateError || (formIsEmpty && birthDay == '')) ? {border: '2px solid red'} : {border: '2px solid white'}}
                        />
                        <input type="text" placeholder="YYYY" onChange={(e) => setBirthYear(e.target.value)} 
                            style={(birthDateError || (formIsEmpty && birthYear == '')) ? {border: '2px solid red'} : {border: '2px solid white'}}
                        />
                    </div>
                </div>

                
                <div>
                    <label htmlFor="password">Password</label>
                    <div>
                        <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} 
                            style={(passwordMatchError || passwordWeakError) || (formIsEmpty && password == '') ? {border: '2px solid red'} : {border: '2px solid white'}}
                        />
                        <input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} 
                            style={(passwordMatchError || passwordWeakError) || (formIsEmpty && confirmPassword == '') ? {border: '2px solid red'} : {border: '2px solid white'}}
                        />
                    </div>
                </div>

                

                <div>
                    {birthDateError && <p className='error'>Please enter a valid birth date.</p>}
                    {phoneNumberError && <p className='error'>Please enter a valid phone number.</p>}
                    {zipCodeError && <p className='error'>Please enter a valid zip code.</p>}
                    {emailError && <p className='error'>Email is invalid or user already exists.</p>}
                    {userExistsError && <p className='error'>A user with this email already exists.</p>}
                    {passwordMatchError && <p className='error'>Passwords do not match.</p>}
                    {countryError && <p className='error'>Please select a country.</p>}
                    {passwordWeakError && <p className='error'>Password must be at least 6 characters.</p>}
                    {formIsEmpty && <p className='error'>Please fill out all fields.</p>}
                    

                    <button type="submit" onClick={handleSignup} >{!userCreated ? 'SIGN UP' : 'Created account...' }</button>
                </div>
                
            </form>

            <div className='signup-reasons-list'>
                <h1>Why Sign Up?</h1>
                <div className='signup-reason'>
                    <FontAwesomeIcon icon={faClock} style={{color: "#ffffff", fontSize: '3rem', marginRight: "1rem"}} />
                    <div>
                        <h2>Save Time</h2>
                        <p>Order Tracking and a faster checkout.</p>
                    </div>
                </div>
                <div className='signup-reason'>
                    <FontAwesomeIcon icon={faStar} style={{color: "#ffffff", fontSize: '3rem', marginRight: "1rem", marginLeft: '-0.5rem'}} />
                    <div>
                        <h2>Save Favorites</h2>
                        <p>Get all the things you truly want.</p>
                    </div>
                </div>
                <div className='signup-reason'>
                    <FontAwesomeIcon icon={faUser} style={{color: "#ffffff", fontSize: '3rem', marginRight: "1rem"}} />
                    <div>
                        <h2>Customize your experience</h2>
                        <p>Manage your preferences.</p>
                    </div>
                </div>
                <div className='signup-reason'>
                    <FontAwesomeIcon icon={faGift} style={{color: "#ffffff", fontSize: '3rem', marginRight: "1rem"}} />
                    <div>
                        <h2>Get Rewards</h2>
                        <p>Special access to items available to Fandom Fits users.</p>
                    </div>
                </div>
            </div>
        </div>


        <div className='have-account'>
            <h1>Already have an account?</h1>
            <Link href='/user-authentication/login'>LOGIN</Link>
        </div>
        
        
    </>
  );
};

export default Signup;

