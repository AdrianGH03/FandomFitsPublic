"use client";
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react';


const Footer = () => {
  


  return (
    <>
    <div className="fandomFitsTitle hide">
      <h1>Fandom Fits</h1>
    </div>

        <div className="contact">
          <ul>
            <h1>NEED HELP?</h1>
            <li><a href="">Contact Us</a></li>
            <li><a href="">Accessiblity</a></li>
            <li><a href="">Ways to Get Your Stuff</a></li>
          </ul>
          <div className="socials">
            <a href=""><Image src="/Images/socials/tiktokw.png" alt="" width={27.2} height={27.2} /></a>
            <a href=""><Image src="/Images/socials/instagramw.png" alt="" width={27.2} height={27.2} /></a>
            <a href=""><Image src="/Images/socials/discordw.png" alt="" width={27.2} height={27.2} /></a>
            <a href=""><Image src="/Images/socials/twitterw.png" alt="" width={27.2} height={27.2} /></a>
            <a href=""><Image src="/Images/socials/pinterestw.png" alt="" width={27.2} height={27.2} /></a>
            <a href=""><Image src="/Images/socials/youtubew.png" alt="" width={27.2} height={27.2}/></a>
          </div>
          <div className="explore">
            <ul>
              <h1>EXPLORE</h1>
              <li><a href="">About Fandom Fits</a></li>
              <li><a href="">Community</a></li>
              <li><a href="">Popular Searches</a></li>
              <li><a href="">Join the team</a></li>
            </ul>
          </div>
        </div>
     
      <footer>
        <div>
          <h4>Copyright Policies</h4>
        </div>
        <div>
          <h4 className='hideForMobile'>Site Map</h4>
        </div>
        <div>
         <h4>Terms & Conditions</h4>
        </div>
      </footer>
    </>
  )
}

export default Footer