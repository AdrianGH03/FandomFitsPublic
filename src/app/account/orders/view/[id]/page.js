
"use client";
import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { useParams } from 'next/navigation'
import { useUserData } from "@/app/components/user-components/useUserData";
import { collection, getDoc, doc, getDocs } from "firebase/firestore";
import { db } from "@/config/firebase-config";
import { auth } from "@/config/firebase-config";

const ViewOrder = () => {
  const params = useParams();
  const id = params.id;
  const userData = useUserData()
  const [userOrder, setUserOrder] = useState({});
  const [userOrderItems, setUserOrderItems] = useState([]);

  useEffect(() => {
    const fetchUserOrder = async () => {
      try {
        if (auth.currentUser) {
          const orderRef = doc(
            db,
            "users",
            auth.currentUser.uid,
            "orders",
            id
          );
          const orderDoc = await getDoc(orderRef);

          if (orderDoc.exists()) {
            setUserOrder({ id: orderDoc.id, ...orderDoc.data() });
            
            
            const orderItemsRef = collection(orderRef, "orderItems");
            const orderItemsSnapshot = await getDocs(orderItemsRef);
            const orderItemsData = orderItemsSnapshot.docs.map((itemDoc) => ({
              id: itemDoc.id,
              ...itemDoc.data(),
            }));
            setUserOrderItems(orderItemsData);
          } else {
            console.error("Order not found.");
          }
        }
      } catch (error) {
        console.error("Error fetching user order:", error);
      }
    };

    fetchUserOrder();
  }, []);
  function formatDate(seconds) {
    const milliseconds = seconds * 1000;
    const date = new Date(milliseconds);
    if (!isNaN(date.getTime())) {
      return date.toLocaleDateString('en-US', {
        month: '2-digit',
        day: '2-digit',
        year: '2-digit',
      });
    } else {
      return 'Invalid Date';
    }
  }
    
  return (
    <>
        {userOrder ? <div className="order-view-container">
            <div className="order-crumbs">
                <Link href="/account/orders">&#60; Order #{userOrder ? userOrder.orderNumber : ''}</Link>
            </div>
            <div className="order-details">
                <div className="order-details-row">
                    <h5>Order Date</h5>
                    <div>
                        <span>{userOrder.date ? formatDate(userOrder.date.seconds) : ''}</span>
                    </div>
                </div>
                <div className="order-details-row">
                    <h5>Status</h5>
                    <div>
                        <span>Complete</span>
                    </div>
                </div>
                <div className="order-details-row">
                    <h5>Payment Method</h5>
                    <div>
                        <span>Credit Card</span>
                    </div>
                </div>
                <div className="order-details-row">
                    <h5>Shipping Address</h5>
                    <div>
                        <span>{userOrder ? `${userOrder.firstName} ${userOrder.lastName}` : ''}</span>
                        <span>{userOrder ? userOrder.road : ''}</span>
                        <span>{userOrder ? userOrder.city : ''}{userOrder.state ? `, ${userOrder.state}` : ''}, {userOrder ? userOrder.zip : ''}</span>
                        <span>{userOrder ? userOrder.country : ''}</span>
                        <span>T: {userOrder.phone ? userOrder.phone.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3') : ''}</span>
                    </div>
                </div>
                <div className="order-details-row">
                    <h5>Shipping method</h5>
                    <div>
                        <span>Free Shipping</span>
                    </div>
                </div>
                <div className="order-details-row">
                    <h5>Order Total</h5>
                    <div>
                        <span>${userOrder ? userOrder.total : ''}</span>
                    </div>
                </div>
            </div>



            <div className="order-items">
                <div className="order-items-row">
                    <h5>Items ordered</h5>
                    <span>{userOrderItems.length}</span>
                </div>
                <div>
                {userOrderItems.map((item) => (
                    <div className="order-items-row">
                        <Image src={item.img} width={150} height={175} 
                            style={{ objectFit: 'contain' }}
                        />
                        <div>
                            <span>{item.name.length > 25 ? item.name.substring(0, 25) + '...' : item.name}</span>
                            <span>${item.total}</span>
                            <span>Item #: {item.id}</span>
                            <span>{item.color}{item.size ? `, ${item.size}` : ''}</span>
                            <span>Quantity: {item.quantity}</span>
                        </div>
                    </div>
                ))}
                </div>

            </div>
        </div> : <h6>Loading...</h6>}
    </>
  )
}

export default ViewOrder
