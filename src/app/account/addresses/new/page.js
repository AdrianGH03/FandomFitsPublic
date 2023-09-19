"use client";
import { useState, useEffect } from 'react';
import { auth, db } from '@/config/firebase-config';
import { doc, updateDoc, collection, addDoc, getDocs } from 'firebase/firestore';
import CountryDropdown from '@/app/components/utility-components/CountryDropdown';
import { useUserData } from '@/app/components/user-components/useUserData';
import { useRouter } from 'next/navigation';
const NewAddressForm = () => {

  const router = useRouter();
  const userData = useUserData();
  const [isUSA, setIsUSA] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [formValues, setFormValues] = useState({
    road: '',
    city: '',
    state: '',
    zip: '',
    country: '',
    phone: '',
    firstName: '',
    lastName: ''
  });

  //Error States
  const [phoneError, setPhoneError] = useState(false);
  const [emptyError, setEmptyError] = useState(false);
  const [zipError, setZipError] = useState(false);
  const [countryError, setCountryError] = useState(false);

  //Success State
  const [success, setSuccess] = useState(false);

  //Set current user
  useEffect(() => {
    setCurrentUser(auth.currentUser);
  }, [auth.currentUser]);
  


  //Show state field if country is USA
  useEffect(() => {
    if(formValues.country === 'United States') {
      setIsUSA(true);
    } else {
      setIsUSA(false);
    }
  }, [formValues.country])

  //Error handling
  useEffect(() => {
    if(phoneError || emptyError || zipError || countryError) {
      setTimeout(() => {
        setPhoneError(false);
        setEmptyError(false);
        setZipError(false);
        setCountryError(false);
      }, 3000);
    }
  }, [phoneError, emptyError])

  //Check if user has 3 addresses already
  useEffect(() => {
    const userDocRef = doc(db, 'users', auth.currentUser.uid);
    const subcollectionRef = collection(userDocRef, 'addresses');

    const checkAddresses = async () => {
      const addressesSnapshot = await getDocs(subcollectionRef);
      if (addressesSnapshot.size >= 3) {
        
        router.push('/account/addresses');
        return;
      }
    }
      
    checkAddresses();
      
  }, [auth.currentUser])


  //Handle Country Dropdown change
  const handleCountryChange = (event) => {
    setFormValues({ ...formValues, country: event.target.value });
  };


  //Handle form submission, validation, and error handling
  const handleClick = async () => {
    setEmptyError(false);
    setPhoneError(false);
    setZipError(false);
    setCountryError(false);


    try {
      const userDocRef = doc(db, 'users', auth.currentUser.uid);
      const updatedFormValues = { ...formValues };

      if((formValues.country === 'United States' && formValues.state === '') || formValues.city === '' || formValues.road === '' || formValues.country === '') {
        setEmptyError(true);
        return;
      }
  
      if (formValues.firstName === '') {
        updatedFormValues.firstName = userData.firstName;
      }
      if (formValues.lastName === '') {
        updatedFormValues.lastName = userData.lastName;
      }
      if (formValues.phone === '') {
        updatedFormValues.phone = Number(userData.phoneNumber);
      }
      if (formValues.zip === '') {
        updatedFormValues.zip = userData.zipCode;
      } else {
        const zipRegex = /^[0-9]{5}$/;
        if (!zipRegex.test(updatedFormValues.zip)) {
          setZipError(true);
          return;
        }
      }
      if (formValues.country === '') {
        setCountryError(true);
        return;
      } else {
        updatedFormValues.country = formValues.country;
      }



      
      if (formValues.phone === '') {
        updatedFormValues.phone = userData.phoneNumber;
      } else {
        const phoneNumberRegex = /^[0-9]{10}$/;
        if (!phoneNumberRegex.test(updatedFormValues.phone)) {
          setPhoneError(true);
          return;
        }
      }
     
  
      
      const addressData = {
        road: updatedFormValues.road,
        city: updatedFormValues.city,
        state: updatedFormValues.state,
        zip: updatedFormValues.zip,
        country: updatedFormValues.country,
        phone: updatedFormValues.phone,
        firstName: updatedFormValues.firstName,
        lastName: updatedFormValues.lastName
      };

      
      const filteredAddressData = Object.fromEntries(
        Object.entries(addressData).filter(([_, value]) => value !== '')
      );

      const subcollectionRef = collection(userDocRef, 'addresses');
      await addDoc(subcollectionRef, filteredAddressData);
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
        router.push('/account/addresses');
      }, 3000);


    } catch (error) {
      console.log(error);
    }
  };

  

  
  
return (
    <>
     <div className='address-new-container'>
        <h4>Add Address</h4>
        <div className='address-new-form'>
          <div className='address-new-form-group divider'>
            <div>
              <label htmlFor='firstNameA'>First Name</label>
              <input 
                type='text' 
                placeholder={userData != null ? userData.firstName : ''} 
                id='firstNameA' 
                value={formValues.firstName}
                onChange={(e) => setFormValues({ ...formValues, firstName: e.target.value })}
                style={{border: emptyError && userData.firstName == '' ? '2px solid red' : '2px solid white'}} 
              />
            </div>
            <div>
              <label htmlFor='lastNameA'>Last Name</label>
              <input 
                type='text' 
                placeholder={userData != null ? userData.lastName : ''} 
                id='lastNameA' 
                value={formValues.lastName}
                onChange={(e) => setFormValues({ ...formValues, lastName: e.target.value })} 
                style={{border: emptyError && userData.lastName == '' ? '2px solid red' : '2px solid white'}}
              />
            </div>
          </div>

          <div className='address-new-form-group solo'>
            
              <label htmlFor='phoneA'>Phone</label>
              <input 
                type='text' 
                id='phoneA' 
                placeholder={userData != null ? userData.phoneNumber : ''} 
                value={formValues.phone}
                onChange={(e) => setFormValues({ ...formValues, phone: e.target.value })} 
                style={{border: phoneError ? '2px solid red' : '2px solid white'}}
              />
            
          </div>

          <div className='address-new-form-group solo'>
            
              <label htmlFor='roadA'>Address</label>
              <input 
                type='text' 
                id='roadA' 
                placeholder='Street Address...' 
                value={formValues.road} 
                onChange={(e) => setFormValues({ ...formValues, road: e.target.value })}
                style={{border: emptyError && formValues.road === '' ? '2px solid red' : '2px solid white'}} 
              />
            
          </div>

          <div className='address-new-form-group solo'>
            
              <label htmlFor='cityA'>City</label>
              <input 
                type='text' 
                id='cityA' 
                placeholder='City...' 
                value={formValues.city} 
                onChange={(e) => setFormValues({ ...formValues, city: e.target.value })} 
                style={{border: emptyError && formValues.city === '' ? '2px solid red' : '2px solid white'}}
              />
            
          </div>

          <div className='address-new-form-group divider zipCountry'>
            <div>
              <label htmlFor='zipA'>Zip Code</label>
              <input 
                type='text' 
                id='zipA' 
                placeholder={userData != null ? userData.zipCode : ''} 
                value={formValues.zip}
                onChange={(e) => setFormValues({ ...formValues, zip: e.target.value })} 
                style={{border: zipError ? '2px solid red' : '2px solid white'}} 
              />
            </div>
            <div>
              <CountryDropdown onCountryChange={handleCountryChange} isEmpty={emptyError} />
            </div>
          </div>

          {isUSA && 
            <div className='address-new-form-group solo'>
              <label htmlFor='stateA'>State</label>
              <input 
                type='text' 
                id='stateA' 
                placeholder='State...' 
                value={formValues.state} 
                onChange={(e) => setFormValues({ ...formValues, state: e.target.value })} 
                style={{border: emptyError && (isUSA && formValues.state === '') ? '2px solid red' : '2px solid white'}}
              />
            </div>
          }




        </div>

        {emptyError && <p className='error e-address'>Please fill out all fields</p>}
        {phoneError && <p className='error e-address'>Please enter a valid phone number</p>}
        {success && <p className='success s-address'>Address added successfully.  Redirecting...</p>}
        {zipError && <p className='error e-address'>Please enter a valid zip code</p>}
        {countryError && <p className='error e-address'>Please select a country</p>}
        

        <button onClick={handleClick}>Add Address</button>

     </div>
    </>
  )
}
    
export default NewAddressForm