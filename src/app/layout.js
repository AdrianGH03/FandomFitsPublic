"use client";
//Fonts or Styles
import '../css/layout.css'
import '../css/categories/womens.css'
import '../css/categories/mens.css'
import '../css/globals.css'
import '../css/search.css'
import '../css/authentication/login.css'
import '../css/authentication/signup.css'
import '../css/loadingicon.css'
import '../css/user-files/user-header.css'
import '../css/error.css'
import '../css/user-files/dashboard-layout.css'
import '../css/user-files/user-dashboard.css'
import '../css/user-files/user-acc-info.css'
import '../css/user-files/user-addresses.css'
import '../css/user-files/user-favorites.css'
import '../css/user-files/user-orders.css'
import '../css/checkout/cart.css'
import '../css/clothingpages/layout.css'
import '../css/clothingpages/viewitem.css'
import '../css/checkout/payment.css'

//Node Packages
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';


//Components
import Header from '@/layout-components/Header'
import Footer from '@/layout-components/Footer'

//React Hooks
import { useState } from 'react';





export default function RootLayout({ children }) {

  const [selectedTheme, setSelectedTheme] = useState('sp-astv');


  return (
    <html lang="en">
      
        <body>
        
          <Header selectedTheme={selectedTheme} setSelectedTheme={setSelectedTheme}/>
              {children}
          <Footer />
          
        </body>
    </html>
  )
}
