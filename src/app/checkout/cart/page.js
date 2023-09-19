"use client";
import Image from 'next/image'
import Link from 'next/link'

import { useEffect, useState } from 'react';
import { auth, db } from '@/config/firebase-config';
import { collection, getDocs, deleteDoc, addDoc, doc } from 'firebase/firestore';
import { useRouter } from 'next/navigation';


const ShoppingCart = () => {
  const [shoppingCart, setShoppingCart] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const router = useRouter();
  const total = shoppingCart.reduce((acc, item) => acc + item.total, 0).toFixed(2);

  
   
  useEffect(() => {
    const fetchData = async () => {
      try {
        const userDocRef = doc(db, 'users', auth.currentUser.uid);
        const shoppingCartCollectionRef = collection(userDocRef, 'shoppingCart');
        const favoritesCollectionRef = collection(userDocRef, 'favorites');

        const shoppingCartSnapshot = await getDocs(shoppingCartCollectionRef);
        const favoritesSnapshot = await getDocs(favoritesCollectionRef);

        const shoppingCartData = [];
        const favoritesData = [];

        shoppingCartSnapshot.forEach((doc) => {
          shoppingCartData.push({ id: doc.id, ...doc.data() });
        });

        favoritesSnapshot.forEach((doc) => {
          favoritesData.push({ id: doc.id, ...doc.data() });
        });

        updateLocalCart(shoppingCartData);
        updateLocalFavorites(favoritesData);
      } catch (error) {
        console.error('Error fetching shopping cart and favorites:', error);
      }
    };

    if (auth.currentUser) {
      fetchData();
    } else {
      setShoppingCart([]);
      setFavorites([]);
    }
  }, [auth.currentUser]);

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
        updateLocalCart(updatedShoppingCart);
      }
    } catch (error) {
      console.error('Error removing item from cart:', error);
    }
  };

  const moveItemToCart = async (itemId, itemSize) => {
    try {
      const userDocRef = doc(db, 'users', auth.currentUser.uid);
      const favoritesCollectionRef = collection(userDocRef, 'favorites');
      const shoppingCartCollectionRef = collection(userDocRef, 'shoppingCart');

      
      const querySnapshot = await getDocs(favoritesCollectionRef);
      let selectedItem = null;
      let itemDocId = null;
      querySnapshot.forEach((doc) => {
        const itemData = doc.data();
        if (itemData.id === itemId && itemData.size === itemSize) {
          selectedItem = { id: doc.id, ...itemData };
          itemDocId = doc.id;
        }
      });

      

      if (selectedItem) {
        
        await addDoc(shoppingCartCollectionRef, selectedItem);     
        if (itemDocId) {
          await deleteDoc(doc(favoritesCollectionRef, itemDocId));
        }

        const updatedFavorites = favorites.filter(
          (item) => item.id !== itemId || item.size !== itemSize
        );
        updateLocalFavorites(updatedFavorites);

        const updatedShoppingCartData = [...shoppingCart, selectedItem];
        updateLocalCart(updatedShoppingCartData);
      }
    } catch (error) {
      console.error('Error moving item to cart:', error);
    }
  };

  const moveItemToFavorites = async (itemId, itemSize) => {
    try {
      const userDocRef = doc(db, 'users', auth.currentUser.uid);
      const shoppingCartCollectionRef = collection(userDocRef, 'shoppingCart');
      const favoritesCollectionRef = collection(userDocRef, 'favorites');
  
      const querySnapshot = await getDocs(shoppingCartCollectionRef);
      let selectedItem = null;
      let itemDocId = null;
  
      
      querySnapshot.forEach((doc) => {
        const itemData = doc.data();
        if (itemData.id === itemId && itemData.size === itemSize) {
          selectedItem = { id: doc.id, ...itemData };
          itemDocId = doc.id;
        }
      });
  
      if (selectedItem) {
        
        await addDoc(favoritesCollectionRef, selectedItem);
  
      
        if (itemDocId) {
          await deleteDoc(doc(shoppingCartCollectionRef, itemDocId));
        }
  
        const updatedShoppingCart = shoppingCart.filter(
          (item) => item.id !== itemId || item.size !== itemSize
        );
        updateLocalCart(updatedShoppingCart);
  
        const updatedFavoritesData = [...favorites, selectedItem];
        updateLocalFavorites(updatedFavoritesData);
      }
    } catch (error) {
      console.error('Error moving item to favorites:', error);
    }
  };

  const removeItemFromFavorites = async (itemId) => {
    try {
      const userDocRef = doc(db, 'users', auth.currentUser.uid);
      const favoritesCollectionRef = collection(userDocRef, 'favorites');
  
      const favSnapshot = await getDocs(favoritesCollectionRef);
      let docIdToDelete = null;
      favSnapshot.forEach((doc) => {
        const data = doc.data();
        if (data.id === itemId) {
          docIdToDelete = doc.id;
        }
      });

      if (docIdToDelete) {
        await deleteDoc(doc(favoritesCollectionRef, docIdToDelete));
  
        const updatedFavorites = favorites.filter((item) => item.id !== itemId);
        updateLocalFavorites(updatedFavorites);
      }
  
      
    } catch (error) {
      console.error('Error deleting item from favorites:', error);
    }
  };

  const updateLocalCart = (newCart) => {
    setShoppingCart(newCart);
  };

  const updateLocalFavorites = (newFavorites) => {
    setFavorites(newFavorites);
  };

  const pushToPay = () => {
    router.push('/checkout/payment')
    localStorage.setItem('hasAccessToPaymentPage', "true")

  }
  
  return (
    <div className='shopping-page-container'>


      <div className="shopping-cart-content">
          <div>
            <h1>My bag ({shoppingCart.length} items)</h1>
          </div>
          <div className="shopping-cart-content-container">
            {shoppingCart.length === 0 ? (
            <div className='empty-cart'>
             
              <div className="empty-cart-image">
                <Link href='/'><p>SHOP NOW</p></Link>
              </div>
              
              
            </div>
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
                              <span onClick={() => moveItemToFavorites(item.id, item.size)}>Move to favorites / </span>
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

          

          <div>
            <h1>Your Favorites</h1>
          </div>

          <div className="shopping-cart-content-container">
          {favorites.length === 0 ? (
            <div className='empty-cart'>
              
              
              
              
            </div>
            ) : (
              favorites.map((item) => (

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
                              <span onClick={() => moveItemToCart(item.id, item.size)}>Move to Cart / </span>
                              <span onClick={() => removeItemFromFavorites(item.id)}>Remove</span>
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










      <div className="shopping-order-content">
        <div className="shopping-order-content-header">
          <h4>Order Summary</h4>
        </div>


        <div className="shopping-order-content-totals">
          <div>
            <span>Subtotal</span>
            <span>${total}</span>
          </div>
          <div>
            <span>Shipping</span>
            <span>Free</span>
          </div>
          <div>
            <span>Tax</span>
            <span>TBD</span>  
          </div>
          <div>
            <span>Total</span>
            <span>${total}</span>  
          </div> 
        </div>

        <div className="shopping-order-content-btn">
          {shoppingCart.length === 0 ? (
            <button disabled>CHECKOUT</button>
          ) : (
            <button onClick={pushToPay}>CHECKOUT</button>
          )}
          <button>PAYPAL CHECKOUT</button>
        </div>


        <div className="shopping-order-content-info">
          <div className='shopping-order-content-faq'>
            <h6>Helpful information</h6>
            <ul>
              <li>Shipping & Returns</li>
              <li>Track Your Order</li>
              <li>International Shipping</li>
              <li>Size Guide</li>
              <li>FAQ</li>
            </ul>
          </div>

          <div className='shopping-order-content-customercare'>
            <h6>Contact customer care</h6>
            <p>
              For questions concering your order and other account related issues, feel free 
              to call or text us at 1-123-456-7890.
            </p>
            <Image src="/Images/placeholders/cardsplaceholder.png" width={150} height={30} />
          </div>
        </div>

      </div>
    </div>
  )
}

export default ShoppingCart