"use client";
import Sizes from '@/app/components/utility-components/Sizes'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faBagShopping } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react';
import { auth, db } from '@/config/firebase-config';
import { collection, doc, getDocs, deleteDoc, addDoc } from 'firebase/firestore';
import Link from 'next/link';


const Favorites = () => {

  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userDocRef = doc(db, 'users', auth.currentUser.uid);
        
        const favoritesCollectionRef = collection(userDocRef, 'favorites');

        
        const favoritesSnapshot = await getDocs(favoritesCollectionRef);

        
        const favoritesData = [];

    

        favoritesSnapshot.forEach((doc) => {
          favoritesData.push({ id: doc.id, ...doc.data() });
        });

        setFavorites(favoritesData);
      } catch (error) {
        console.error('Error fetching shopping cart and favorites:', error);
      }
    };

    if (auth.currentUser) {
      fetchData();
    } else {
      setFavorites([]);
    }
  }, [auth.currentUser]);


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
        setFavorites(updatedFavorites);

        
      }
    } catch (error) {
      console.error('Error moving item to cart:', error);
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
        setFavorites(updatedFavorites);
      }
  
      
    } catch (error) {
      console.error('Error deleting item from favorites:', error);
    }
  };
  
  return (
    <>
      <div className="favorites-container">
        <div className="favorites-header">
          <h4>Favorites</h4>
        </div>


        <div className="favorites-content">
          
          {favorites.length != 0 ? favorites.map((item) => (
            <div className="favorites-content-item">
              <div className='fav-item'>
                <div className='fav-item-img'>
                  <Image src={item.img} width={100} height={130} style={{objectFit: 'contain'}} />
                </div>
                <div>
                  <h4><Link href={`/category/clothing/view/${item.id}`}>{item.name}</Link></h4>
                  <div>
                    <span>Item #: {item.id}</span>
                    <span>Color: {item.color}</span>
                    <span>Quantity: {item.quantity}</span>
                    <span className='favorites-content-item-price'>$39.95</span>
                  </div>
                </div>
              </div>

              <div className="favorites-content-sizes">
                <span>{item.size}</span>
              </div>


              <div className="favorites-content-buttons">
                <button onClick={() => moveItemToCart(item.id, item.size)}><FontAwesomeIcon icon={faBagShopping} style={{color: "#ffffff"}} /></button>
                <button onClick={() => removeItemFromFavorites(item.id)}>REMOVE</button>
              </div>
            </div>

          )) : <h2>No Favorites.</h2>}
        </div>

        
        
      </div>
    </>
  )
}

export default Favorites