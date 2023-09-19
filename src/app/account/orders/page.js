"use client";
import { useEffect, useState } from 'react';
import { useUserData } from "@/app/components/user-components/useUserData";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/config/firebase-config";
import Link from "next/link";
import { auth } from "@/config/firebase-config";

const Orders = () => {
  const userData = useUserData()

  

  
  
  const [userOrders, setUserOrders] = useState([]);

  const truncatedFirstName = userOrders?.firstName?.length > 10 ? userOrders?.firstName?.substring(0, 10) : userOrders?.firstName;
  const lastInitial = userOrders?.lastName?.charAt(0);
 
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

  return (
    <>
    
    <div className='orders-page'>
      <div className='user-dashboard-info-rorders'>
          <h4>{userOrders.length == 0 ? 'No Recent Orders' : 'Recent Orders'}</h4>
          

          {userOrders.length != 0 && userOrders.map((order) => (
            <div className='user-dashboard-info-rorders-orderex' key={order.orderNumber}>
                <div>
                    <span>Order #</span>
                    <span>Date</span>
                    <span>Ship To</span>
                    <span>Order Total</span>
                    <span>Order Status</span>
                </div>
                <div>
                    <span>{order.orderNumber}</span>
                    <span>{formatDate(order.date.seconds)}</span>
                    <span>
                        {order.firstName.length > 10 ? order.firstName.substring(0, 10) : order.firstName} {order.lastName.charAt(0)}.
                    </span>
                    <span>${order.total}</span>
                    <span>Complete</span>
                </div>
                <div>
                    <Link href={`/account/orders/view/${order.id}`}>View Order</Link>
                    <Link href='/account/orders/view'>Track Order</Link>
                </div>
            </div>
          ))  }


          
      </div>
    </div>
    </>
  )
}

export default Orders