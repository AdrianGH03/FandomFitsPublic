"use client";
import Link from 'next/link'
import Image from 'next/image'
import Dropdowns from '@/app/components/utility-components/Dropdowns'

const KidsPage = () => {
  return (
    <>
    <div className="categoryTitle">
      <h1>KIDS</h1>
    </div>
    
    <div className="dropDowns hideForDesktop">
      <div className="dropDowns-title">
        <span>Kids's Clothing for<br />Boys and Girls</span>
      </div>
      <div>
        <Link href="/category/kids/clothing?filter=tshirts"><Image src="/Images/pageImages/kidsPage/kidstshirts.webp" alt="" width={328} height={290} /></Link>
        <Link href="/category/kids/clothing?filter=tshirts" className="description">SHOP T-SHIRTS</Link>
      </div>
      <ul>
        <li>
          <label for="dropdown" className="dropdownLabel">
            TOPS
            <input type="checkbox" id="dropdown" />
            <span className="arrow"></span>
          </label>
          <ul className="dropdown-menu">
            <li><Link href="/category/kids/clothing?filter=tops">All</Link></li>
            <li><Link href="/category/kids/clothing?filter=hoodies">Hoodies</Link></li>
            <li><Link href="/category/kids/clothing?filter=tshirts">T-Shirts</Link></li>
            
          </ul>
        </li>
        <li>
          <label for="dropdown2" className="dropdownLabel">
            BOTTOMS
            <input type="checkbox" id="dropdown2" />
            <span className="arrow"></span>
          </label>
          <ul className="dropdown-menu">
            
            <li><Link href="/category/kids/clothing?filter=sweatpants">Sweatpants</Link></li>
          </ul>
        </li>
        <li>
          <label for="dropdown3" className="dropdownLabel">
            SHOES
            <input type="checkbox" id="dropdown3" />
            <span className="arrow"></span>
          </label>
          <ul className="dropdown-menu">
            <li><Link href="/category/kids/clothing?filter=shoes">All</Link></li>
            <li><Link href="/category/kids/clothing?filter=sneakers">Sneakers</Link></li>
            <li><Link href="/category/kids/clothing?filter=sport">Sport</Link></li>
            
          </ul>
        </li>
        <li>
          <label for="dropdown4" className="dropdownLabel">
            ACCESSORIES
            <input type="checkbox" id="dropdown4" />
            <span className="arrow"></span>
          </label>
          <ul className="dropdown-menu">
            <li><Link href="/category/kids/clothing?filter=accessories">All</Link></li>
            <li><Link href="/category/kids/clothing?filter=necklace">Necklacess</Link></li>
            <li><Link href="/category/kids/clothing?filter=bracelet">Bracelets</Link></li>
          </ul>
        </li>
      </ul>
      
      <div>
        <Link href="/category/kids/clothing?filter=sweatpants"><Image src="/Images/ClothingListItems/kids/pants/1.jpg" alt="" width={328} height={290} /></Link>
        <Link href="/category/kids/clothing?filter=sweatpants" className="description">SHOP PANTS</Link>
      </div>
      <div>
        <Link href="/category/kids/clothing?filter=shoes"><Image src="/Images/pageImages/kidsPage/kidsshoess.jpg" alt="" width={328} height={290} /></Link>
        <Link href="/category/kids/clothing?filter=shoes" className="description">SHOP SHOES</Link>
      </div>
      <div>
        <Link href="/category/kids/clothing?filter=accessories"><Image src="/Images/pageImages/kidsPage/kidsaccessories.avif" alt="" width={328} height={290} /></Link>
        <Link href="/category/kids/clothing?filter=accessories" className="description">SHOP JEWELRY</Link>
      </div>
    </div>
    






    
    <div className="mainContentDesktop hideForMobile">
      <div className="dropDowns">
        <ul>
          <li>
            <label htmlFor="dropdown" className="dropdownLabel">
                <Link href='/category/kids/clothing'>ALL</Link>
            </label>
            
        </li>
          <li>
            <label for="dropdown5" className="dropdownLabel">
              TOPS
              <input type="checkbox" id="dropdown5" />
              <span className="arrow"></span>
            </label>
            <ul className="dropdown-menu">
              <li><Link href="/category/kids/clothing?filter=tops">All</Link></li>
              <li><Link href="/category/kids/clothing?filter=hoodies">Hoodies</Link></li>
              <li><Link href="/category/kids/clothing?filter=tshirts">T-Shirts</Link></li>
            </ul>
          </li>
          <li>
            <label for="dropdown6" className="dropdownLabel">
              BOTTOMS
              <input type="checkbox" id="dropdown6" />
              <span className="arrow"></span>
            </label>
            <ul className="dropdown-menu">
              <li><Link href="/category/kids/clothing?filter=sweatpants">Sweatpants</Link></li>
            </ul>
          </li>
          <li>
            <label for="dropdown7" className="dropdownLabel">
              SHOES
              <input type="checkbox" id="dropdown7" />
              <span className="arrow"></span>
            </label>
            <ul className="dropdown-menu">
              <li><Link href="/category/kids/clothing?filter=shoes">All</Link></li>
              <li><Link href="/category/kids/clothing?filter=sneakers">Sneakers</Link></li>
              <li><Link href="/category/kids/clothing?filter=sport">Sport</Link></li>
            </ul>
          </li>
          <li>
            <label for="dropdown8" className="dropdownLabel">
              ACCESSORIES
              <input type="checkbox" id="dropdown8" />
              <span className="arrow"></span>
            </label>
            <ul className="dropdown-menu">
              <li><Link href="/category/kids/clothing?filter=accessories">All</Link></li>
              <li><Link href="/category/kids/clothing?filter=necklace">Necklacess</Link></li>
              <li><Link href="/category/kids/clothing?filter=bracelet">Bracelets</Link></li>
            </ul>
          </li>
        </ul>
        </div>
        <div className="dropDowns-main-desktop">
          <div className="desktopTitle">
            <span>Kids's Clothing for<br />Boys and Girls</span>
          </div>
          <div className="bannerSection">
              <Link href="/category/kids/clothing"><Image src="/Images/pageImages/kidsPage/kidsheaderr.jpg" alt="" width={328} height={200} /></Link>
              <Link href="/category/kids/clothing" className="describe">SHOP ALL</Link>
          </div>
          <div className="rowSection">
            <div>
              <Link href="/category/kids/clothing?filter=tshirts"><Image src="/Images/pageImages/kidsPage/kidstshirts.webp" alt="" width={328} height={290} /></Link>
              <Link href="/category/kids/clothing?filter=tshirts" className="describe">SHOP T-SHIRTS</Link>
            </div>
            <div>
              <Link href="/category/kids/clothing?filter=sweatpants"><Image src="/Images/ClothingListItems/kids/pants/1.jpg" alt="" width={328} height={290} /></Link>
              <Link href="/category/kids/clothing?filter=sweatpants" className="describe">SHOP PANTS</Link>
            </div>
          </div>
          
          <div className="bannerSection middlebanner">
              <Image src="/Images/pageImages/mensPage/mensmiddlebanner.jpg" alt="" width={328} height={170} />
          </div>
          <div className="rowSection">
            <div>
              <Link href="/category/kids/clothing?filter=shoes"><Image src="/Images/pageImages/kidsPage/kidsshoess.jpg" alt="" width={328} height={270} /></Link>
              <Link href="/category/kids/clothing?filter=shoes" className="describe">SHOP SHOES</Link>
            </div>
            <div>
              <Link href="/category/kids/clothing?filter=accessories"><Image src="/Images/pageImages/kidsPage/kidsaccessories.avif" alt="" width={328} height={270} /></Link>
              <Link href="/category/kids/clothing?filter=accessories" className="describe">SHOP ACCESSORY</Link>
            </div>
          </div>
      </div>
    </div>
    <Dropdowns />
    </>
  )
}

export default KidsPage