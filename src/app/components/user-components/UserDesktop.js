"use client";
import Image from 'next/image'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faBagShopping } from '@fortawesome/free-solid-svg-icons'

import { auth } from '@/config/firebase-config';
import { signOut } from 'firebase/auth';

import { useRouter } from 'next/navigation'
import { useState, useEffect } from 'react'


import { useUserData } from '@/app/components/user-components/useUserData';



const UserDesktop = ({ handleSearchDropdown }) => {

  
  const router = useRouter();
  const [toggleProfileDropdown, setToggleProfileDropdown] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  const userData = useUserData();
  useEffect(() => {
    setCurrentUser(auth.currentUser);
  }, [auth.currentUser]);

  const loginUser = () => {
    if(currentUser == null){
      router.push('/user-authentication/login')
    } else {
      setToggleProfileDropdown(prev => !prev);
    }
  }

  const logout = async () => {
    try {
        setCurrentUser(null);
        setToggleProfileDropdown(false);
        await signOut(auth);
        localStorage.removeItem("userAuthenticated");
    } catch (error) {
        console.log(error);
    }
  };


  const closeDropdown = () => {
    setToggleProfileDropdown(false);
  };

  const toCart = () => {
    router.push('/checkout/cart')
  }
  

  return (
    <div className='user-navigation hideForMobile'>
      <div className="search-container">
          <button type="submit" onClick={handleSearchDropdown}>
            <FontAwesomeIcon icon={faMagnifyingGlass}  />
          </button>
      </div>
      <FontAwesomeIcon icon={faBagShopping} style={{color: "#ffffff"}} onClick={toCart} />
      
      {currentUser !== null && userData !== null ? (
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
        <Link href='/user-authentication/login'>LOGIN</Link>
      )}
      {toggleProfileDropdown && (
        <div className='profile-dropdown'>
          <Link href='/account/info' onClick={closeDropdown}>Account Info</Link>
          <Link href='/account' onClick={closeDropdown}>Dashboard</Link>
          <Link href='/account/orders' onClick={closeDropdown}>Orders</Link>
          
          <Link href='/account/addresses' onClick={closeDropdown}>Addresses</Link>
          <Link href='/account/favorites' onClick={closeDropdown}>Favorites</Link>
          

          <button onClick={logout}>Logout</button>
        </div>
      )}
      
    </div>
  )
}

export default UserDesktop