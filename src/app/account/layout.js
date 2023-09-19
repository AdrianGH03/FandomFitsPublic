"use client";
import Link from "next/link";
import { auth } from '@/config/firebase-config';
import { doc, getDoc } from 'firebase/firestore';
import { getUserDocument } from '@/config/userUtils';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Dropdowns from '@/app/components/utility-components/Dropdowns'
import { signOut } from 'firebase/auth';

export default function DashboardLayout({ children }) {
    const [currentUser, setCurrentUser] = useState(null);
    const [userData, setUserData] = useState(null);
    const router = useRouter();

    useEffect(() => {
      const unsubscribe = auth.onAuthStateChanged(user => {
        setCurrentUser(user);
        if (user) {
          const fetchData = async () => {
            const userData = await getUserDocument(user);
            setUserData(userData);
          };
          fetchData();

          localStorage.setItem('userAuthenticated', 'true');
        }
      });
  
      return () => unsubscribe();
    }, [auth.currentUser]);
  
    useEffect(() => {
      const checkUser = () => {
        
        const isAuthenticated = localStorage.getItem('userAuthenticated') === 'true';
        
        if (!isAuthenticated) {
          router.push('/user-authentication/login');
        }
      };
  
      checkUser();
    }, [auth.currentUser]);

    const logout = async () => {
      try {
          setCurrentUser(null);
          await signOut(auth);
          localStorage.removeItem("userAuthenticated");
      } catch (error) {
          console.log(error);
      }
    };


    
    
    return (
      <>
        <div className="dropDowns hideForDesktopp dd-user">
          <ul>
            <li>
              <label htmlFor="dropdown9" className="dropdownLabel">
                ACCOUNT
                <input type="checkbox" className="hidden" id="dropdown9" />
                <span className="arrow"></span>
              </label>
              <ul className="dropdown-menu">
                <li><Link href="/account">Account Dashboard</Link></li>
                <li><Link href="/account/info">Account Information</Link></li>
                <li><Link href="/account/addresses">Addresses</Link></li>
                <li><Link href="/account/favorites">Favorites</Link></li>
                <li><Link href="/account/orders">Orders</Link></li>
                <li><button onClick={logout}><Link href='/user-authentication/login'>Log Out</Link></button></li>
              </ul>
            </li>
            
          </ul>
        </div>
        
        <div className="dashboard-container">
          <div className="dashboard-sidebar hideForMobile">
            <h1>{userData != null ? `${userData.firstName} ${userData.lastName}`: ''}</h1>
            <Link href="/account">Account Dashboard</Link>
            <Link href="/account/info">Account Information</Link>
            <Link href="/account/addresses">Addresses</Link>
            <Link href="/account/favorites">Favorites</Link>
            <Link href="/account/orders">Orders</Link>
            
          </div>
          <main>{children}</main>
        </div>
        <Dropdowns />
      </>
    );
  }