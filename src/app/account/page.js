"use client";
import { auth, db } from '@/config/firebase-config';
import { doc, collection, getDocs } from 'firebase/firestore';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useUserData } from '@/app/components/user-components/useUserData';



const UserDashboard = () => {
  const [currentUser, setCurrentUser] = useState(auth.currentUser);
  const router = useRouter();

  const userData = useUserData();

  const [addresses, setAddresses] = useState([]);

  const [userOrders, setUserOrders] = useState([]);
  const mostRecentOrder = userOrders[0];
  
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

  useEffect(() => {
    const fetchUserOrders = async () => {
      try {
        if (userData) {
          const userOrdersRef = collection(db, "users", auth.currentUser.uid, "orders");
          const querySnapshot = await getDocs(userOrdersRef);
          const ordersData = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          setUserOrders(ordersData);
        }
      } catch (error) {
        console.error("Error fetching user orders:", error);
      }
    };

    fetchUserOrders();
  }, [userData]);

  

  function formatDate(seconds) {
    const milliseconds = seconds * 1000; 
    const date = new Date(milliseconds);
    if (!isNaN(date.getTime())) {
      return date.toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: '2-digit' });
    } else {
      return 'Invalid Date';
    }
  }

  const truncatedFirstName = mostRecentOrder?.firstName?.length > 10 ? mostRecentOrder?.firstName?.substring(0, 10) : mostRecentOrder?.firstName;
  const lastInitial = mostRecentOrder?.lastName?.charAt(0);

  const truncatedFirstNameAcc = userData?.firstName.length > 15
    ? userData.firstName.substring(0, 15) + "..."
    : userData?.firstName;
  const lastInitialAcc = userData?.lastName.charAt(0);

  return (
    <div className='user-dashboard'>
        <div className='user-dashboard-info'>
            <h1>Account Dashboard</h1>
            <p>
            View a snapshot of your recent account 
            activity and update your account information. 
            </p>
            <div className='user-dashboard-info-content'>
                <div className='user-dashboard-info-rorders'>
                    <h4>{userOrders.length != 0 ? 'Recent Orders' : 'No Recent Orders'}</h4>
                    {userOrders.length != 0 ? <div className='user-dashboard-info-rorders-orderex'>
                        <div>
                            <span>Order #</span>
                            <span>Date</span>
                            <span>Ship To</span>
                            <span>Order Total</span>
                            <span>Order Status</span>
                        </div>
                        <div>
                            <span>{mostRecentOrder ? mostRecentOrder.orderNumber : ''}</span>
                            <span>{mostRecentOrder && mostRecentOrder.date ? formatDate(mostRecentOrder.date.seconds) : ''}</span>
                            <span>{mostRecentOrder ? `${truncatedFirstName} ${lastInitial}.`: ''}</span>
                            <span>${mostRecentOrder ? mostRecentOrder.total : ''}</span>
                            <span>Complete</span>
                        </div>
                        <div>
                            <Link href={mostRecentOrder ? `/account/orders/view/${mostRecentOrder.id}` : ''}>View Order</Link>
                            <Link href='/'>Track Order</Link>
                        </div>
                    </div> : '' }
                </div>
                <div className='user-dashboard-info-acc'>
                    <h4>Account Information</h4>
                    <div className='user-dashboard-info-acc-content'>
                        <div>
                            <span>{userData != null ? `${truncatedFirstNameAcc} ${lastInitialAcc}.`: ''}</span>
                            <span>{userData != null ? (userData.email.length > 10 ? `${userData.email.slice(0, 15)}...` : userData.email) : ''}</span>
                        </div>
                        
                        <div>
                            <Link href='/account/info'>Edit</Link>
                            <Link href='/account/info'>Change Password</Link>
                        </div>
                    </div>
                </div>
                <div className='user-dashboard-info-address'>
                    <h4>Address Book</h4>
                    {addresses.length != 0 ? addresses.map((address, index) => (
                        <div className='user-dashboard-info-address-content' key={addresses && address.id}>
                            <div>
                                <h4>Address {index + 1}</h4>
                                <Link href={`/account/addresses/edit/${address.id}`}>Edit address</Link>
                            </div>
                            <span>{address.firstName} {address.lastName}</span>
                            <span>{address.road}</span>
                            <span>{address.city}, {address.state} {address.zip}</span>
                            <span>{address.country}</span>
                            <span>T: {address.phone}</span>
                        </div>
                        )) : <h4>No Addresses</h4>
                    }
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default UserDashboard
