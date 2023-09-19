import { auth, db } from '@/config/firebase-config.js';
import { doc, getDoc } from 'firebase/firestore';

export const getUserDocument = async (user) => {
  try {
    if (user) {
      const userUid = user.uid;
      const userDocRef = doc(db, 'users', userUid);
      const userDocSnapshot = await getDoc(userDocRef);

      if (userDocSnapshot.exists()) {
        return userDocSnapshot.data();
      } else {
        
        return null;
      }
    }
    return null;
  } catch (error) {
    console.error('Error fetching user document:', error);
    return null;
  }
};