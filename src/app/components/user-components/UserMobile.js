"use client";
import Image from 'next/image'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faBagShopping } from '@fortawesome/free-solid-svg-icons'

import { auth } from '@/config/firebase-config';

import { useRouter } from 'next/navigation'
import { useState, useEffect } from 'react'
import { getUserDocument } from '@/config/userUtils';
import { useUserData } from '@/app/components/user-components/useUserData';

const UserMobile = ({ handleButtonClick, handleCheckboxChange }) => {
  const router = useRouter();
  const [toggleProfileDropdown, setToggleProfileDropdown] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  const userData = useUserData();
  useEffect(() => {
    setCurrentUser(auth.currentUser);
  }, [auth.currentUser]);


  const loginUser = () => {
    if(userData == null){
      router.push('/user-authentication/login')
    } else {
      handleCheckboxChange();
      router.push('/account')
    }
  }

  const toCart = () => {
    
    router.push('/checkout/cart')
    handleCheckboxChange();
  }


  return (
    <div className='user-navigation-mobile'>
      <div className="search-container">
            <Link href='/search' onClick={handleButtonClick}>
              <FontAwesomeIcon icon={faMagnifyingGlass}  />
            </Link>
      </div>
      <FontAwesomeIcon icon={faBagShopping} style={{color: "#ffffff"}} onClick={toCart} />
      {currentUser !== null ? (
        <div onClick={loginUser}>
          <Image
            className='rounded-full'
            src={
              currentUser.photoURL !== null
                ? currentUser.photoURL
                : '/Images/baseuserpfp.jpg'
            }
            alt='profilepic'
            width={32}
            height={32}
          />
        </div>
      ) : (
        <Link href='/user-authentication/login' onClick={handleCheckboxChange}>LOGIN</Link>
      )}
    </div>
  )
}

export default UserMobile