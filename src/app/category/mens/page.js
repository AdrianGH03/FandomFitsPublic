"use client";
import Link from 'next/link'
import Image from 'next/image'
import Dropdowns from '@/app/components/utility-components/Dropdowns'



const Mens = () => {
  
  return (
    <>
    <div className="categoryTitle">
      <h1>MENS</h1>
    </div>
    
    <div className="dropDowns hideForDesktop">
      <div className="dropDowns-title">
        <span>Men's Clothing &<br />Guys Clothing</span>
      </div>
      <div>
        <Link href="/category/mens/clothing?filter=tshirts"><Image src="/Images/pageImages/mensPage/mensshirtsboth.jpg" alt="" width={328} height={290} /></Link>
        <Link href="/category/mens/clothing?filter=tshirts" className="description">SHOP T-SHIRTS</Link>
      </div>
      <ul>
          
        <li>
          <label htmlFor="dropdown" className="dropdownLabel">
            TOPS
            <input type="checkbox" id="dropdown" />
            <span className="arrow"></span>
          </label>
          <ul className="dropdown-menu">
            <li><Link href="/category/mens/clothing?filter=tops">All</Link></li>
            <li><Link href="/category/mens/clothing?filter=hoodies">Hoodies</Link></li>
            <li><Link href="/category/mens/clothing?filter=tshirts">T-Shirts</Link></li>
            
          </ul>
        </li>
        <li>
          <label htmlFor="dropdown2" className="dropdownLabel">
            BOTTOMS
            <input type="checkbox" id="dropdown2" />
            <span className="arrow"></span>
          </label>
          <ul className="dropdown-menu">
            <li><Link href="/category/mens/clothing?filter=bottoms">All</Link></li>
            <li><Link href="/category/mens/clothing?filter=jeans">Jeans</Link></li>
            <li><Link href="/category/mens/clothing?filter=shorts">Shorts</Link></li>
            <li><Link href="/category/mens/clothing?filter=sweatpants">Sweatpants</Link></li>
          </ul>
        </li>
        <li>
          <label htmlFor="dropdown3" className="dropdownLabel">
            SHOES
            <input type="checkbox" id="dropdown3" />
            <span className="arrow"></span>
          </label>
          <ul className="dropdown-menu">
            <li><Link href="/category/mens/clothing?filter=shoes">All</Link></li>
            <li><Link href="/category/mens/clothing?filter=sneakers">Sneakers</Link></li>
            <li><Link href="/category/mens/clothing?filter=sport">Sport</Link></li>
            
          </ul>
        </li>
        <li>
          <label htmlFor="dropdown4" className="dropdownLabel">
            ACCESSORIES
            <input type="checkbox" id="dropdown4" />
            <span className="arrow"></span>
          </label>
          <ul className="dropdown-menu">
            <li><Link href="/category/mens/clothing?filter=accessories">All</Link></li>
            <li><Link href="/category/mens/clothing?filter=necklace">Necklaces</Link></li>
            <li><Link href="/category/mens/clothing?filter=bracelet">Bracelets</Link></li>
          </ul>
        </li>
        
      </ul>
      
      
      
      <div>
        <Link href="/category/mens/clothing?filter=bottoms"><Image src="/Images/pageImages/mensPage/pantsdesktop.webp" alt="" width={328} height={290} /></Link>
        <Link href="/category/mens/clothing?filter=bottoms" className="description">SHOP PANTS</Link>
      </div>
      <div>
        <Link href="/category/mens/clothing?filter=shoes"><Image src="/Images/pageImages/mensPage/mensshoes.jpg" alt="" width={328} height={290} /></Link>
        <Link href="/category/mens/clothing?filter=shoes" className="description">SHOP SHOES</Link>
      </div>
      <div>
        <Link href="/category/mens/clothing?filter=accessories"><Image src="/Images/pageImages/mensPage/mensaccessories.jpg" alt="" width={328} height={290} /></Link>
        <Link href="/category/mens/clothing?filter=accessories" className="description">SHOP JEWELRY</Link>
      </div>
    </div>
    






    
    <div className="mainContentDesktop hideForMobile">
      <div className="dropDowns">
        <ul>
        <li>
            <label htmlFor="dropdown" className="dropdownLabel">
              <Link href='/category/mens/clothing'>ALL</Link>
            </label>
            
          </li>
          <li>
            <label htmlFor="dropdown5" className="dropdownLabel">
              TOPS
              <input type="checkbox" id="dropdown5" />
              <span className="arrow"></span>
            </label>
            <ul className="dropdown-menu">
              <li><Link href="/category/mens/clothing?filter=tops">All</Link></li>
              <li><Link href="/category/mens/clothing?filter=hoodies">Hoodies</Link></li>
              <li><Link href="/category/mens/clothing?filter=tshirts">T-Shirts</Link></li>
              
            </ul>
          </li>
          <li>
            <label htmlFor="dropdown6" className="dropdownLabel">
              BOTTOMS
              <input type="checkbox" id="dropdown6" />
              <span className="arrow"></span>
            </label>
            <ul className="dropdown-menu">
              <li><Link href="/category/mens/clothing?filter=bottoms">All</Link></li>
              <li><Link href="/category/mens/clothing?filter=jeans">Jeans</Link></li>
              <li><Link href="/category/mens/clothing?filter=shorts">Shorts</Link></li>
              <li><Link href="/category/mens/clothing?filter=sweatpants">Sweatpants</Link></li>
            </ul>
          </li>
          <li>
            <label htmlFor="dropdown7" className="dropdownLabel">
              SHOES
              <input type="checkbox" id="dropdown7" />
              <span className="arrow"></span>
            </label>
            <ul className="dropdown-menu">
              
              <li><Link href="/category/mens/clothing?filter=shoes">All</Link></li>
              <li><Link href="/category/mens/clothing?filter=sneakers">Sneakers</Link></li>
              <li><Link href="/category/mens/clothing?filter=sport">Sport</Link></li>
            </ul>
          </li>
          <li>
            <label htmlFor="dropdown8" className="dropdownLabel">
              ACCESSORIES
              <input type="checkbox" id="dropdown8" />
              <span className="arrow"></span>
            </label>
            <ul className="dropdown-menu">
              <li><Link href="/category/mens/clothing?filter=accessories">All</Link></li>
              <li><Link href="/category/mens/clothing?filter=necklace">Necklaces</Link></li>
              <li><Link href="/category/mens/clothing?filter=bracelet">Bracelets</Link></li>
            </ul>
          </li>
        </ul>
        </div>
        <div className="dropDowns-main-desktop">
          <div className="desktopTitle">
            <span>Men's Clothing &<br />Guys Clothing</span>
          </div>
          <div className="bannerSection">
              <Link href="/category/mens/clothing"><Image src="/Images/pageImages/mensPage/mensheader.jpeg" alt="" width={328} height={290} /></Link>
              <Link href="/category/mens/clothing" className="describe">SHOP ALL</Link>
          </div>
          <div className="rowSection">
            <div>
              <Link href="/category/mens/clothing?filter=tshirts"><Image src="/Images/pageImages/mensPage/mensshirtsboth.jpg" alt="" width={328} height={290} /></Link>
              <Link href="/category/mens/clothing?filter=tshirts" className="describe">SHOP T-SHIRTS</Link>
            </div>
            <div>
              <Link href="/category/mens/clothing?filter=bottoms"><Image src="/Images/pageImages/mensPage/pantsdesktop.webp" alt="" width={328} height={290} /></Link>
              <Link href="/category/mens/clothing?filter=bottoms" className="describe">SHOP PANTS</Link>
            </div>
          </div>
          
          <div className="bannerSection middlebanner">
              <Image src="/Images/pageImages/mensPage/mensmiddlebanner.jpg" alt="" width={328} height={170} />
          </div>
          <div className="rowSection">
            <div>
              <Link href="/category/mens/clothing?filter=shoes"><Image src="/Images/pageImages/mensPage/mensshoes.jpg" alt="" width={328} height={290} /></Link>
              <Link href="/category/mens/clothing?filter=shoes" className="describe">SHOP SHOES</Link>
            </div>
            <div>
              <Link href="/category/mens/clothing?filter=accessories"><Image src="/Images/pageImages/mensPage/mensaccessories.jpg" alt="" width={328} height={290} /></Link>
              <Link href="/category/mens/clothing?filter=accessories" className="describe">SHOP ACCESSORY</Link>
            </div>
          </div>
      </div>
    </div>
    <Dropdowns />
    </>
  )
}

export default Mens