"use client";
import { useState, useEffect } from 'react';
import { auth, db } from '@/config/firebase-config';
import { doc, updateDoc, getDoc, deleteDoc } from 'firebase/firestore';
import CountryDropdown from '@/app/components/utility-components/CountryDropdown';

import { useRouter, useParams } from 'next/navigation';

const EditAddress = () => {
  const params = useParams();
  const id = params.id;
  

  const router = useRouter();
  
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
  const [dataForm, setDataForm] = useState(null)

  //Error States
  const [phoneError, setPhoneError] = useState(false);
  const [emptyError, setEmptyError] = useState(false);
  const [zipError, setZipError] = useState(false);
  const [countryError, setCountryError] = useState(false);
  const [formUnchanged, setFormUnchanged] = useState(false);

  //Success State
  const [success, setSuccess] = useState(false);
  const [deletedDoc, setDeletedDoc] = useState(false);

  //Error handling
  useEffect(() => {
    if(phoneError || emptyError || zipError || countryError || formUnchanged) {
      setTimeout(() => {
        setPhoneError(false);
        setEmptyError(false);
        setZipError(false);
        setCountryError(false);
        setFormUnchanged(false);
        
      }, 3000);
    }
  }, [phoneError, emptyError, zipError, countryError, formUnchanged])
  
  //Get address data from database
  useEffect(() => {
    const fetchAddressData = async () => {
      try {
        if(auth.currentUser != null){
          const addressDocRef = doc(db, 'users', auth.currentUser.uid, 'addresses', id);
          const addressDocSnapshot = await getDoc(addressDocRef);
          if (addressDocSnapshot.exists()) {
            const addressData = addressDocSnapshot.data();
            setDataForm(addressData);
            setFormValues(addressData);
          } else {
            console.log('Address document not found');
          }
        }
        
      } catch (error) {
        console.error('Error fetching address:', error);
      }
    };

    fetchAddressData();
  }, [auth.currentUser, id]);
  

  //Set current user
  useEffect(() => {
    setCurrentUser(auth.currentUser);
  }, [auth.currentUser]);
  
  const handleCountryChange = (event) => {
    setFormValues({ ...formValues, country: event.target.value });
  };

  //Handle form submission, validation, and error handling
  const handleClick = async () => {
    setEmptyError(false);
    setPhoneError(false);
    setZipError(false);
    setCountryError(false);
    setFormUnchanged(false);
  
    try {
      if (
        formValues.city === '' ||
        formValues.road === '' ||
        formValues.country === '' ||
        formValues.firstName === '' ||
        formValues.lastName === '' ||
        formValues.phone === '' || 
        formValues.zip === ''
      ) {
        setEmptyError(true);
        return;
      }
  
      if (formValues.zip !== '') {
        const zipRegex = /^[0-9]{5}$/;
        if (!zipRegex.test(formValues.zip)) {
          setZipError(true);
          return;
        } else if(formValues.zip == '') {
          setZipError(true);
          return;
        }
      }
  
      if (formValues.country === '') {
        setCountryError(true);
        return;
      }
  
      if (formValues.phone !== '') {
        const phoneNumberRegex = /^[0-9]{10}$/;
        if (!phoneNumberRegex.test(formValues.phone)) {
          setPhoneError(true);
          return;
        } else if(formValues.phone == ''){
          setPhoneError(true);
          return;
        }
      }

      
  
      const addressData = {
        road: formValues.road,
        city: formValues.city,
        state: formValues.state,
        zip: formValues.zip,
        country: formValues.country,
        phone: formValues.phone,
        firstName: formValues.firstName,
        lastName: formValues.lastName
      };
      const isFormUnchanged = Object.keys(dataForm).every(key => formValues[key] === addressData[key]);
      if (isFormUnchanged) {
        setFormUnchanged(true);
        return;
      }
      const addressDocRef = doc(
        db,
        'users',
        auth.currentUser.uid,
        'addresses',
        id
      );
  
      await updateDoc(addressDocRef, addressData); 
  
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
        router.push('/account/addresses');
      }, 3000);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async () => {
    setDeletedDoc(true)
    try {
      const addressDocRef = doc(db, 'users', auth.currentUser.uid, 'addresses', id);
      await deleteDoc(addressDocRef);

      
      setTimeout(() => {
        setDeletedDoc(false);
        router.push('/account/addresses');
      }, 3000);
    } catch (error) {
      console.error('Error deleting address:', error);
    }
  };
  

  
  
return (
    <>
     <div className='address-new-container'>
        <h4>Edit Address</h4>
        <div className='address-new-form'>
          <div className='address-new-form-group divider'>
            <div>
              <label htmlFor='firstNameA'>First Name</label>
              <input 
                type='text' 
                placeholder={formValues.firstName != '' ? formValues.firstName : 'First Name...' }
                id='firstNameA' 
                value={formValues.firstName}
                onChange={(e) => setFormValues({ ...formValues, firstName: e.target.value })} 
                style={{border: emptyError && formValues.firstName === '' ? '2px solid red' : '2px solid white'}}
              />
            </div>
            <div>
              <label htmlFor='lastNameA'>Last Name</label>
              <input 
                type='text' 
                placeholder={formValues.lastName != '' ? formValues.lastName : 'Last Name...' }
                id='lastNameA' 
                value={formValues.lastName}
                onChange={(e) => setFormValues({ ...formValues, lastName: e.target.value })} 
                style={{border: emptyError && formValues.lastName === '' ? '2px solid red' : '2px solid white'}}
              />
            </div>
          </div>

          <div className='address-new-form-group solo'>
            
              <label htmlFor='phoneA'>Phone</label>
              <input 
                type='text' 
                id='phoneA' 
                placeholder={formValues.phone != '' ? formValues.phone : 'Phone...' }
                value={formValues.phone}
                onChange={(e) => setFormValues({ ...formValues, phone: e.target.value })} 
                style={{border: (phoneError || (emptyError && formValues.phone === '')) ? '2px solid red' : '2px solid white'}}
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
                placeholder={formValues.zip != '' ? formValues.zip : 'Zip Code...'}
                value={formValues.zip}
                onChange={(e) => setFormValues({ ...formValues, zip: e.target.value })}
                style={{border: (zipError || (emptyError && formValues.zip === '')) ? '2px solid red' : '2px solid white'}} 
              />
            </div>
            <div>
              <CountryDropdown  initialValue={formValues.country} onCountryChange={handleCountryChange} />
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
        {success && <p className='success s-address'>Address updated successfully.  Redirecting...</p>}
        {zipError && <p className='error e-address'>Please enter a valid zip code</p>}
        {countryError && <p className='error e-address'>Please select a country</p>}
        {deletedDoc && <p className='success s-address'>Address deleted successfully. Redirecting...</p>}
        {formUnchanged && <p className='error e-address'>No changes made to address</p>}


        <button onClick={handleClick}>Update Address</button>
        <button onClick={handleDelete} className="delete-button">Delete Address</button>

     </div>
    </>
  )
}

export default EditAddress