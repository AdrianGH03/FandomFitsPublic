"use client";
import { useState, useEffect } from 'react';
import { useUserData } from '@/app/components/user-components/useUserData';
import { auth, db } from '@/config/firebase-config';
import { getDocs, doc, collection, addDoc, deleteDoc } from "firebase/firestore";
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

const CartPaymentPage = () => {
  const router = useRouter();
  const userData = useUserData();
  
  
  const currentDate = new Date();
  const [status, setStatus] = useState()
    useEffect(() => {
        setStatus(localStorage.getItem('hasAccessToPaymentPage'))
    }, [])

  const [selectedAddressIndex, setSelectedAddressIndex] = useState(null);
  const [addresses, setAddresses] = useState([]);
  const [orderSuccess, setOrderSuccess] = useState(false);
  const [addressError, setAddressError] = useState(false);
  
  
  const [shoppingCart, setShoppingCart] = useState([]);
  const subtotal = shoppingCart.reduce((acc, item) => acc + item.total, 0).toFixed(2);
  const tax = (subtotal * 0.07).toFixed(2);
  const total = (Number(subtotal) + Number(tax)).toFixed(2);

  
  useEffect(() => {
    const handleBeforeUnload = (e) => {
      localStorage.setItem('hasAccessToPaymentPage', 'false');
    };

    const handleVisibilityChange = () => {
      if (document.visibilityState === 'hidden') {
        localStorage.setItem('hasAccessToPaymentPage', 'false');
        router.push('/');
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    document.addEventListener('visibilitychange', handleVisibilityChange);
    localStorage.setItem('hasAccessToPaymentPage', 'false');

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      localStorage.setItem('hasAccessToPaymentPage', 'false');
    };
  }, [status]);

  useEffect(() => {
    if (status === 'false') {
      router.push('/');
    }
  }, [status]);
  
  useEffect(() => {
    
    if (auth.currentUser) {
      const userAddressesRef = collection(db, "users", auth.currentUser.uid, "addresses");

      getDocs(userAddressesRef)
        .then((querySnapshot) => {
          const userAddresses = querySnapshot.docs.map((doc) => doc.data());
          setAddresses(userAddresses);
        })
        .catch((error) => {
          console.error("Error fetching user addresses:", error);
        });
    }

    const fetchShoppingCart = async () => {
      try {
        const shoppingCartRef = collection(db, "users", auth.currentUser.uid, "shoppingCart");
        const querySnapshot = await getDocs(shoppingCartRef);
        const cartData = querySnapshot.docs.map((doc) => doc.data());
        setShoppingCart(cartData);
      } catch (error) {
        console.error("Error fetching shopping cart:", error);
      }
    };

    if (auth.currentUser) {
      fetchShoppingCart(); 
    }
  }, []);

  const removeItemFromCart = async (itemId, itemSize) => {
    try {
      const userDocRef = doc(db, 'users', auth.currentUser.uid);
      const shoppingCartCollectionRef = collection(userDocRef, 'shoppingCart');
  
      const querySnapshot = await getDocs(shoppingCartCollectionRef);
      let itemDocId = null;
      querySnapshot.forEach((doc) => {
        const itemData = doc.data();
        if (itemData.id === itemId && itemData.size === itemSize) {
          itemDocId = doc.id;
        }
      });
  
      if (itemDocId) {
        await deleteDoc(doc(shoppingCartCollectionRef, itemDocId));
  
        const updatedShoppingCart = shoppingCart.filter((item) => item.id !== itemId || item.size !== itemSize);
        setShoppingCart(updatedShoppingCart);
      }
    } catch (error) {
      console.error('Error removing item from cart:', error);
    }
  };
  

  const placeOrder = async () => {
    try {
      if (!auth.currentUser) {
        console.error("User not authenticated.");
        return;
      }
  
      if (selectedAddressIndex === null) {
        setAddressError(true);
        setTimeout(() => {
          setAddressError(false);
        }, 1500);
        return;
      }
  
      const selectedAddress = addresses[selectedAddressIndex];
  
      const orderData = {
        orderNumber: Math.floor(Math.random() * 1000000),
        date: currentDate,
        fullName: `${selectedAddress.firstName} ${selectedAddress.lastName}`,
        total: total,
        city: selectedAddress.city,
        country: selectedAddress.country,
        email: auth.currentUser.email,
        firstName: selectedAddress.firstName,
        lastName: selectedAddress.lastName,
        road: selectedAddress.road,
        zip: selectedAddress.zip,
        phone: selectedAddress.phone,
      };
  
      
      if (selectedAddress.country === 'United States') {
        orderData.state = selectedAddress.state;
      }
  
      const userOrdersRef = collection(db, "users", auth.currentUser.uid, "orders");
      const userOrderDocRef = await addDoc(userOrdersRef, orderData);
  
      const orderItemSubcollectionRef = collection(userOrderDocRef, "orderItems");
  
      const shoppingCartRef = collection(db, "users", auth.currentUser.uid, "shoppingCart");
      const querySnapshot = await getDocs(shoppingCartRef);
  
      querySnapshot.forEach((doc) => {
        const orderItem = doc.data();
        
        
        addOrderItemToUserOrder(orderItemSubcollectionRef, orderItem);
        
        deleteDoc(doc.ref);
      });
  
      setOrderSuccess(true);
  
      setTimeout(() => {
        router.push("/");
      }, 1500);
    } catch (error) {
      console.error("Error placing the order:", error);
    }
  };

  const addOrderItemToUserOrder = async (orderItemSubcollectionRef, orderItem) => {
    try {
      await addDoc(orderItemSubcollectionRef, {
        color: orderItem.color,
        id: orderItem.id,
        img: orderItem.img,
        name: orderItem.name,
        quantity: orderItem.quantity,
        size: orderItem.size,
        total: orderItem.total,
      });
    } catch (error) {
      console.error("Error adding order item to user's order:", error);
    }
  };
  
  
  
  
  
  
  return (
    <div className="payment-container">
        <div className="payment-billing">
            <h4>Billing Details</h4>
            <div className="payment-billing-forms">
                {addresses.length === 0 ? (
                  <>
                    <h4>Addresses: {addresses.length}</h4>
                    <Link href='/account/addresses/new'>Add an Address</Link>
                  </>
                ) : (
                    <ul>
                        <h5>Choose an Address</h5>
                    {addresses.map((userAddress, index) => (
                        <li key={index}>
                        
                        <label>
                            <input
                            type="radio"
                            value={index}
                            checked={selectedAddressIndex === index}
                            onChange={() => setSelectedAddressIndex(index)}
                            />
                            {userAddress.road}...
                        </label>
                        </li>
                    ))}
                    or
                    <Link href='/account/addresses/new'>Add an Address</Link>
                    </ul>
                )}
                {selectedAddressIndex != null && (
                  <>
                  <div className="payment-billing-forms-flname">
                    <label >First & Last Name</label>
                    <span>{addresses[selectedAddressIndex].firstName} {addresses[selectedAddressIndex].lastName}</span>
                  </div>

                  <div className="payment-billing-forms-email">
                    <label>Email</label>
                    <span>{auth.currentUser.email}</span>
                  </div>

                  <div className="payment-billing-forms-address">
                    <label>Address</label>
                    <span>{addresses[selectedAddressIndex].road}</span>

                  </div>
                  <div className="payment-billing-forms-country">
                    <label>Country</label>
                    <span>{addresses[selectedAddressIndex].country}</span>
                  </div>

                  <div className="payment-billing-forms-cityzip">
                    <div>
                      <label>City</label>
                      <span>{addresses[selectedAddressIndex].city}</span>

                    </div>
                    <div>
                      <label>Zip</label>
                      <span>{addresses[selectedAddressIndex].zip}</span>
                    </div>

                  </div>

                  {addresses[selectedAddressIndex].country === 'United States' && (

                    <div className="payment-billing-forms-state">
                      <label>State</label>
                      <span>{addresses[selectedAddressIndex].state}</span>
                    </div>
                  )}
                  </>

                )}
                
            </div>


            <div className="payment-billing-payment-forms">
                <h4>Payment method</h4>
                <div className="payment-billing-payment-forms-card">
                    <label>
                        <input
                        type="radio"
                        value="card"
                        checked={() => {}}
                        onChange={() => {}}
                        />
                        Credit Card
                        <Image src="/Images/placeholders/cardsplaceholder.png" width={150} height={30} />
                    </label>
                </div>
                <div className="payment-billing-payments-forms-cardnum">
                    <label>Card Number</label>
                    <p>1234 2134 4321 3214 <Image src="/Images/placeholders/visa.png" width={40} height={40} /></p>

                </div>
                <div className="payment-billing-payments-forms-details">
                    <div className="payment-exp-date">
                        <label>Exp. Date</label>
                        <div>
                            <span>12/2027</span>
                        </div>
                    </div>
                    <div className="payment-sec-code">
                        <label>CVV</label>
                        <div>
                            <span>123</span>
                        </div>
                    </div>
                </div>
                <div className="shopping-order-content-totals">
                  <div>
                    <span>Subtotal</span>
                    <span>${subtotal}</span>
                  </div>
                  <div>
                    <span>Shipping</span>
                    <span>Free</span>
                  </div>
                  <div>
                    <span>Tax</span>
                    <span>${tax}</span>  
                  </div>
                  <div>
                    <span>Total</span>
                    <span>${total}</span>  
                  </div> 
                </div>
                <button className="payment-btn" onClick={() => placeOrder()}>Place Order</button>
            </div>
            {addressError && <h5 className='error payment-err'>Please select an address</h5>}
            {orderSuccess && <h5 className='success payment-succ'>Order placed. Thank you! Redirecting...</h5>}
            <h6>** This is a fake checkout page. No real cards are used.</h6>
        </div>
        
        <div className="payment-cart-sum">
          <div className="shopping-cart-content-container">
            {shoppingCart.length === 0 ? (
            <h5>Loading...</h5>
            ) : (
              shoppingCart.map((item) => (

                  <div className="shopping-cart-main" key={item.id}>
                    <div className="shopping-cart-item">
                      <Image src={item.img} width={140} height={155} alt={item.name} style={{objectFit: 'contain'}}/>
                      <div className="shopping-cart-item-info">
                        <div>
                          <h5 onClick={() => router.push(`/category/clothing/view/${item.id}`)}>{item.name}</h5>
                          <span>Item #: {item.id}</span>

                          <div>
                            <span>{item.color} {item.size ? item.size : ''}</span>
                            <span>${item.total}</span>
                          </div>

                          <div>
                            <div>
                              <label htmlFor="quantity">QTY</label>
                              <span>{item.quantity}</span>
                            </div>
                            <div>
                              
                              <span onClick={() => removeItemFromCart(item.id, item.size)}>Remove</span>
                            </div>
                            
                          </div>
                        </div>
                        
                      </div>
                    </div>
                  </div>
                  ))
                )}
                
          </div>

          
          
        </div>

        
    </div>
  )
}

export default CartPaymentPage






