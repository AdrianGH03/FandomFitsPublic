"use client";
import { auth, googleProvider, db } from '@/config/firebase-config.js';
import { signInWithPopup, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { doc, getDoc } from 'firebase/firestore';
import { useRouter } from 'next/navigation';
import { useUserData } from '@/app/components/user-components/useUserData';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userData, setUserData] = useState(null);
  const [googleUser, setGoogleUser] = useState(null);
  const [userDoesntExist, setUserDoesntExist] = useState(false);
  const [user, setUser] = useState(null);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const router = useRouter();
  const [fieldsEmpty, setFieldsEmpty] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  const userDataCheck = useUserData();
  
  
  
  const signInWithGoogle = async () => {
    setUserDoesntExist(false)
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
  
      const userDocRef = doc(db, 'users', user.uid);
      const userDocSnapshot = await getDoc(userDocRef);

  
      if (userDocSnapshot.exists()) {
        setGoogleUser(user);
        setUserData(userDocSnapshot.data());
        router.push('/');
      } else if(!userDocSnapshot.exists()) {
        setUser(null)
        auth.currentUser = null;
        setUserDoesntExist(true);
        await user.delete();
        
      }
    } catch (error) {
      console.log(error);
    }
  };
  
  if(userDataCheck != null) {
    router.push('/');
  }
  
  useEffect(() => {
    if(fieldsEmpty) {
      setTimeout(() => {
        setFieldsEmpty(false);
      }, 3000);
    }
  }, [fieldsEmpty]);
  
  const handleUserLogin = async () => {
    setEmailError(false);
    setPasswordError(false);
    setFieldsEmpty(false);
    await handleLogin(email, password);
    if(user != null) {
      router.push('/');
    }
  };
  const handleLogin = async (email, password) => {
    if(email === '' || password === '') {
        setFieldsEmpty(true);
        return;
    }
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      
    } catch (error) {
        if (error.code === 'auth/invalid-email' || error.code === 'auth/user-not-found') {
            setEmailError(true);
          
        } else if(error.code === 'auth/wrong-password') {
            setPasswordError(true);
        }
        else {
            console.error('Error signing up:', error.message);
        }
     }
  };

  
  return (
    <>
    
        <div className='login-content'>
            <h1>Log in or sign up now</h1>
            <div className='login-form'>
                
                 <div>
                     <label htmlFor='email'>Email</label>
                     <input
                         type="email"
                         placeholder="Email"
                         value={email}
                         onChange={(e) => setEmail(e.target.value)}
                         style={
                                (emailError || (fieldsEmpty && email == '')) ? {border: '2px solid red'} : {border: '2px solid white'}
                         }
                     />
                 </div>
                 <div>
                     <label htmlFor='password'>Password</label>
                     <input
                         type="password"
                         placeholder="Password"
                         value={password}
                         onChange={(e) => setPassword(e.target.value)}
                         style={
                             (passwordError || (fieldsEmpty && password == '')) ? {border: '2px solid red'} : {border: '2px solid white'}
                         }
                     />
                 </div>
                    
                
                <Link href='/user-authentication/forgot-pass'><span>Forgot Your Password?</span></Link>

                
                <div>
                    {emailError && <h2 className='account-error'>Email is invalid.</h2>}
                    {fieldsEmpty && <h2 className='account-error'>Please fill in all fields.</h2>}
                    {passwordError && <h2 className='account-error'>Password is incorrect.</h2>}
                    <button onClick={handleUserLogin}>LOG IN</button>
                </div>
                
                <button className='login-google-button' onClick={signInWithGoogle} disabled={user}>
                    <Image src="/Images/socials/google.png" alt="" width={20} height={20} className='rounded-full' />
                    <span>SIGN IN WITH GOOGLE</span>
                </button>
                {userDoesntExist && <h1 className='account-error'>Account doesn't exist. Please create an account first.</h1>}
                <Link href='/user-authentication/signup' className='login-create-account'>CREATE AN ACCOUNT</Link>
                
            </div>

            

        </div>
        
    </>
  )
}

export default Login



