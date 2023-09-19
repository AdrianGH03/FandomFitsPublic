"use client";
import { useRouter, useParams } from 'next/navigation';
import Image from 'next/image';
import list from '@/app/api/backend/storeList';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { auth, db } from '@/config/firebase-config';
import { doc, updateDoc, collection, addDoc, getDocs, deleteDoc } from 'firebase/firestore';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

const ViewClothingItem = () => {
  
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedQuantity, setSelectedQuantity] = useState(1);
  const [itemId, setItemId] = useState(0);
  const [shuffledRecommendedList, setShuffledRecommendedList] = useState([]);
  const [shuffledRecommendedList2, setShuffledRecommendedList2] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);

  const router = useRouter();
  const { id } = useParams(); 
  const item = list.find(item => item.id == id);
  const recommendedList = list.filter(cloth => item && (cloth.mainCat == item.mainCat && cloth.id != item.id && cloth.topCat == item.topCat));
  const recommendedList2 = list.filter(cloth => item && (cloth.id != item.id && cloth.topCat == item.topCat));
  const availableSizes = ['S', 'M', 'L', 'XL', 'XXL']; 
  const availableShoeSizes = ['M 3 / W 4.5', 'M 4 / W 5.5', 'M 5 / W 6.5', 'M 6 / W 7.5', 'M 7 / W 8.5', 'M 8 / W 9.5', 'M 9 / W 10.5', 'M 10 / W 11.5', 'M 11 / W 12.5', 'M 12 / W 13.5'];

  const [mustBeLoggedIn, setMustBeLoggedIn] = useState(false);
  const [sizeError, setSizeError] = useState(false);
  const [cartSuccess, setCartSuccess] = useState(false); 
  const [itemInCart, setItemInCart] = useState(false);
  const [isFavorite, setIsFavorite] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setCurrentUser(user);
      } else {
        setCurrentUser(null);
      }
    });
  })

  useEffect(() => {
    setItemId(Number(id));
  }, [item]);

  useEffect(() => {
    const shuffledList1 = shuffleArray([...recommendedList]).slice(0, 3);
    const shuffledList2 = shuffleArray([...recommendedList2]).slice(0, 3);
    setShuffledRecommendedList(shuffledList1);
    setShuffledRecommendedList2(shuffledList2);
  }, []);

  useEffect(() => {
    setItemId(Number(id));
    
    
    const checkFavoriteStatus = async () => {
      if (auth.currentUser != null) {
        const userDocRef = doc(db, 'users', auth.currentUser.uid);
        const favCollectionRef = collection(userDocRef, 'favorites');
        
        const favSnapshot = await getDocs(favCollectionRef);
        
        const favData = [];
        favSnapshot.forEach((doc) => {
          favData.push({ id: doc.id, ...doc.data() });
        });
        
        const itemIsFavorite = favData.some((item) => item.id == itemId);
        
        setIsFavorite(itemIsFavorite);
      }
    };
    
    checkFavoriteStatus();
  }, [currentUser]);
  
  const handleSizeChange = (size) => {
    setSelectedSize(size);
    
  };
  const handleQuantityChange = (quantity) => {
    setSelectedQuantity(quantity);
  };
  
  

  const handleAddToCart = async () => {
    if(auth.currentUser == null) {
        setMustBeLoggedIn(true);
        setTimeout(() => {
            setMustBeLoggedIn(false);
            router.push('/user-authentication/login');
        }, 2000);
    } else if (selectedSize == '' && item.mainCat != 'accessories') {
        setSizeError(true);
        setTimeout(() => {
            setSizeError(false);
        }, 2000);
    } else {
        const userDocRef = doc(db, 'users', auth.currentUser.uid);
        const cartCollectionRef = collection(userDocRef, 'shoppingCart');

        const itemData = {
            id: itemId,
            name: item.name,
            img: item.img,
            price: item.price,
            size: selectedSize,
            quantity: selectedQuantity,
            mainCat: item.mainCat,
            subCat: item.subCat,
            topCat: item.topCat,
            color: item.color,
            total: item.price * selectedQuantity,
        };

        const checkIfItemExists = async () => {
            const cartSnapshot = await getDocs(cartCollectionRef);
            const cartData = [];
            cartSnapshot.forEach((doc) => {
                cartData.push({ id: doc.id, ...doc.data() });
            });
            const itemExists = cartData.some(item => item.id == itemId && item.size == selectedSize);
            return itemExists;
        }

        const addItemToCart = async () => {
            try {
                const docRef = await addDoc(cartCollectionRef, itemData);
                
            } catch (error) {
                console.error('Error adding item to cart:', error);
            }
        }

        

        const itemExists = await checkIfItemExists();
    
        if (itemExists) {
        
            setItemInCart(true);
            setTimeout(() => {
                setItemInCart(false);
            }, 2000)
        } else {
       
            await addItemToCart();
            setCartSuccess(true);
            setTimeout(() => {
                setCartSuccess(false);
            }, 2000)
        }

        
        setSelectedSize('');
        setSelectedQuantity(1);
    }
  }

  const handleFavorite = async () => {
    if(auth.currentUser == null) {
        setMustBeLoggedIn(true);
        setTimeout(() => {
            setMustBeLoggedIn(false);
            router.push('/user-authentication/login');
        }, 2000);
    } else if (selectedSize == '' && (item.mainCat != 'accessories' && !isFavorite)) {
        setSizeError(true);
        setTimeout(() => {
            setSizeError(false);
        }, 2000);
    } else {
        const userDocRef = doc(db, 'users', auth.currentUser.uid);
        const favCollectionRef = collection(userDocRef, 'favorites');

        const itemData = {
            id: itemId,
            name: item.name,
            img: item.img,
            price: item.price,
            size: selectedSize,
            quantity: selectedQuantity,
            mainCat: item.mainCat,
            subCat: item.subCat,
            topCat: item.topCat,
            color: item.color,
            total: item.price * selectedQuantity,
        };

        const checkIfItemExists = async () => {
            const favSnapshot = await getDocs(favCollectionRef);
            const favData = [];
            favSnapshot.forEach((doc) => {
                favData.push({ id: doc.id, ...doc.data() });
            });
            const itemExists = favData.some(item => item.id == itemId);
            
            return itemExists;
        }

        const addItemToFav = async () => {
            try {
                const docRef = await addDoc(favCollectionRef, itemData);
                
            } catch (error) {
                console.error('Error adding item to cart:', error);
            }
        }

        const deleteItemFromFav = async () => {
            try {
              
              const favSnapshot = await getDocs(favCollectionRef);
              let docIdToDelete = null;
              favSnapshot.forEach((doc) => {
                const data = doc.data();
                
                if (data.id == itemId) {
                  docIdToDelete = doc.id;
                }
              });
      
              if (docIdToDelete) {
                
                await deleteDoc(doc(favCollectionRef, docIdToDelete));
              }
            } catch (error) {
              console.error('Error deleting item from favorites:', error);
            }
          };

        

        const itemExists = await checkIfItemExists();
    
        if (itemExists) {
            await deleteItemFromFav();
            setIsFavorite(false);
            
        } else {
       
            await addItemToFav();
            setIsFavorite(true);
        }

    }
  }
  
  return (
    <div className='view-clothing-container'>
        <h1>{item && item.name}</h1>
        <div className="view-clothing-item-container">
            
            <div className="view-clothing-item-img-container">
                <Image src={item && item.img} alt={item && item.name} width={250} height={250} style={{objectFit: 'contain'}}/>
            </div>
            
            <div className="view-clothing-item-details">
                <span>PRICE: ${item && item.price}</span>
                <p><strong>COLOR:</strong>{item && item.color}</p>
                <p><strong>SIZE:</strong>{selectedSize != '' ? selectedSize : 'None'}</p>
                <div className="size-checkboxes">
                    {itemId < 2999 ? availableSizes.map((size) => (
                        <label key={size} className='size-label'
                            style={{backgroundColor: selectedSize === size ? '#000' : '#fff', color: selectedSize === size ? '#fff' : '#000'}}
                        >
                            <input
                            type="radio"
                            value={size}
                            checked={selectedSize === size}
                            onChange={() => handleSizeChange(size)}
                            className='size-checkbox'
                            />
                            {size}
                        </label>
                    )) : item && item.mainCat == 'shoes' ? 
                    <div className="view-clothing-item-quantity">
                        <label htmlFor="shoe_sizes">SIZE</label>
                        <select
                        id="shoe_sizes"
                        className=""
                        value={selectedSize}
                        onChange={(e) => setSelectedSize(e.target.value)} 
                        >
                            {availableShoeSizes.map((size) => (
                                <option key={size} value={size}>{size}</option>
                            ))}
                        </select>
                    </div>
                    
                    : item && item.mainCat == 'accessories'  ? 
                    <h1 className='accessories-h1'>One Size Fits Most</h1> 
                    : <h1>Error.</h1>}
                </div>
                
                <div className="view-clothing-item-quantity">
                    <label htmlFor="clothing_sizes">QUANTITY</label>
                    <select
                        id="clothing_sizes"
                        className=""
                        value={selectedQuantity}
                        onChange={(e) => handleQuantityChange(e.target.value)}
                    >
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </div>
                <button className="view-clothing-item-add-to-cart" onClick={handleAddToCart}>ADD TO CART</button>
                {auth.currentUser != null ? 
                    <button className='view-clothing-item-add-to-favorites' onClick={handleFavorite}>
                        <FontAwesomeIcon icon={faStar} style={isFavorite ? {color: '#FFFF00'} : {color: "#ffffff",}} />
                        FAVORITE
                    </button> 
                : ''}
                <div className="error-container">
                    {mustBeLoggedIn && <p className='error'>You must be logged in to add items to your cart.</p>}
                    {sizeError && <p className='error'>Please select a size.</p>}
                    {cartSuccess && <p className='success'>Item added to cart.</p>}
                    {itemInCart && <p className='error'>Item already in cart.</p>}
                </div>
            </div>
        </div>
        <div className="view-clothing-item-recommended-container">
            <h1 className='view-clothing-item-recommended-title'>SUGGESTED</h1>
            <div className="view-clothing-item-recommended">
                {shuffledRecommendedList.map((item) => (
                        <div key={item.id}>
                            <div>
                                <Link href={`/category/clothing/view/${item.id}`}><Image src={item.img} alt={item.name} width={250} height={250} style={{objectFit: 'contain'}}/></Link>
                            </div>
                        </div>
                ))}
            </div>
            <h1>YOU MAY ALSO LIKE...</h1>
            <div className="view-clothing-item-recommended">
                {shuffledRecommendedList2.map((item) => (
                        <div key={item.id}>
                            <div>
                                <Link href={`/category/clothing/view/${item.id}`}><Image src={item.img} alt={item.name} width={250} height={250} style={{objectFit: 'contain'}}/></Link>
                            </div>
                        </div>
                ))}
            </div>
        </div>
        
    </div>
  )
}

export default ViewClothingItem