"use client";
import { auth, googleProvider, db } from '@/config/firebase-config.js';
import { useState, useEffect } from 'react';
import { doc, getDoc, collection, query, where, getDocs } from 'firebase/firestore';
import { sendPasswordResetEmail } from 'firebase/auth';
import Link from 'next/link';
import { useUserData } from '@/app/components/user-components/useUserData';
import { useRouter } from 'next/navigation';

const ForgotPass = () => {
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState(false);
    const router = useRouter();
    const [emailSent, setEmailSent] = useState(false);

    const userDataCheck = useUserData();

    useEffect(() => {
        if(emailError) {
            setTimeout(() => {
                setEmailError(false);

            }, 2000);
        }
    }, [emailError]);
    

    const handleForgotPass = async () => {
        setEmailError(false);

        
        const usersCollectionRef = collection(db, 'users');
        const q = query(usersCollectionRef, where('email', '==', email));
        const querySnapshot = await getDocs(q);

        if (querySnapshot.empty) {
            setEmailError(true);
            return;
        }

        
        try {
            await sendPasswordResetEmail(auth, email);
            setEmailSent(true);
            setTimeout(() => {
                router.push('/user-authentication/login');
            }, 3000);

        } catch (error) {
            console.error('Error sending password reset email:', error);
        }
    };

    if(userDataCheck != null) {
        router.push('/account')
    }
  return (
    <>
        <div className='login-content'>
            <h1>Forgot Password</h1>
            <div className='login-form'>
                
                 <div>
                     <label htmlFor='email'>Email</label>
                     <input
                         type="email"
                         placeholder="Email"
                         value={email}
                         onChange={(e) => setEmail(e.target.value)}
                         style={
                                emailError ? {border: '2px solid red'} : {border: '2px solid white'}
                         }
                     />
                 </div>

                 <div>
                    {emailError && <p className='error'>Email does not exist.</p>}
                     {emailSent && <p className='forgot-pass success'>Email sent. Check your inbox.</p>}
                    <button onClick={handleForgotPass}>RESET PASSWORD</button>
                    
                 </div>
                 <Link href='/user-authentication/login' className='login-create-account forgot-pass'>LOGIN</Link>
            </div>
        </div>
    </>
  )
}

export default ForgotPass