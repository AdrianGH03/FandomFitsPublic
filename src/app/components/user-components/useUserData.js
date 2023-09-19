import { useState, useEffect } from 'react';
import { auth } from '@/config/firebase-config';
import { getUserDocument } from '@/config/userUtils';

export function useUserData() {
  
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      
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
  }, []);

  return userData;
}