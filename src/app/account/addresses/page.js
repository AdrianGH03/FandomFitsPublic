"use client";
import { useState, useEffect } from 'react';
import { auth, db } from '@/config/firebase-config';
import { doc, updateDoc, collection, addDoc, getDocs } from 'firebase/firestore';
import Link from 'next/link';

const AddressBook = () => {
  const [addresses, setAddresses] = useState([]);
  
  // Get addresses from database
  useEffect(() => {
    const fetchData = async () => {
      try {
        const userDocRef = doc(db, 'users', auth.currentUser.uid);
        const addressesCollectionRef = collection(userDocRef, 'addresses');
        const addressesSnapshot = await getDocs(addressesCollectionRef);

        const addressesData = [];
        addressesSnapshot.forEach((doc) => {
          addressesData.push({ id: doc.id, ...doc.data() });
        });

        setAddresses(addressesData);
      } catch (error) {
        console.error('Error fetching addresses:', error);
      }
    };

    fetchData();
  }, [auth.currentUser]);
  
  
  return (
    <>
      <div className='address-book-container'>
        <h4>Address Book</h4>
        <div className='user-address-container'>
          <div className='user-addresses'>
            {addresses.length != 0 ? addresses.map((address, index) => (
              <div className='user-address' key={addresses && address.id}>
                <div className='user-address-header'>
                  
                  <h4>Address {index + 1}</h4>
                  <Link href={`/account/addresses/edit/${address.id}`}>Edit address</Link>
                </div>
                <div className='user-address-body'>
                  <span>{address.firstName} {address.lastName}</span>
                  <span>{address.road}</span>
                  <span>{address.city}, {address.state} {address.zip}</span>
                  <span>{address.country}</span>
                  <span>T: {address.phone}</span>
                </div>
              </div>
            )) : <h4>No Addresses</h4>}
          </div>
        </div>
        {addresses.length < 3 && <Link href="/account/addresses/new">Add Address</Link>}
        {addresses.length == 3 && <p className='success maxaddr'>Maximum of 3 addresses reached</p>}
      </div>
      
    </>
  )
}

export default AddressBook