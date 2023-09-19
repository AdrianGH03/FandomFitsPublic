"use client";
import Link from 'next/link'
import Image from 'next/image'
import Dropdowns from '@/app/components/utility-components/Dropdowns'

const AccessoriesPage = () => {
  return (
    <>
    <div className="categoryTitle">
      <h1 id='accessoriespagehone'>ACCESSORIES</h1>
    </div>
    
    <div className="dropDowns hideForDesktop">
      <div className="dropDowns-title">
        <span>Jewelry for Men,<br /> Women, and kids.</span>
      </div>
      <div>
        <Link href="/category/accessories/clothing?filter=accessories&subFilter=necklace"><Image src="/Images/pageImages/accessoriesPage/acc3.jpeg" alt="" width={328} height={290} /></Link>
        <Link href="/category/accessories/clothing?filter=accessories&subFilter=necklace" className="description">SHOP NECKLACES</Link>
      </div>
      <ul>
        <li>
          <label for="dropdown" className="dropdownLabel">
            MENS
            <input type="checkbox" id="dropdown" />
            <span className="arrow"></span>
          </label>
          <ul className="dropdown-menu">
            <li><Link href='/category/accessories/clothing?filter=mens&subFilter=accessories'>All</Link></li>
            <li><Link href="/category/accessories/clothing?filter=mens&subFilter=bracelet">Bracelets</Link></li>
            <li><Link href="/category/accessories/clothing?filter=mens&subFilter=necklace">Necklaces</Link></li>
            
          </ul>
        </li>
        <li>
          <label for="dropdown2" className="dropdownLabel">
            WOMENS
            <input type="checkbox" id="dropdown2" />
            <span className="arrow"></span>
          </label>
          <ul className="dropdown-menu">
            <li><Link href='/category/accessories/clothing?filter=womens&subFilter=accessories'>All</Link></li>
            <li><Link href="/category/accessories/clothing?filter=womens&subFilter=bracelet">Bracelets</Link></li>
            <li><Link href="/category/accessories/clothing?filter=womens&subFilter=necklace">Necklaces</Link></li>
          </ul>
        </li>
        <li>
          <label for="dropdown3" className="dropdownLabel">
            KIDS
            <input type="checkbox" id="dropdown3" />
            <span className="arrow"></span>
          </label>
          <ul className="dropdown-menu">
            <li><Link href='/category/accessories/clothing?filter=kids&subFilter=accessories'>All</Link></li>
            <li><Link href="/category/accessories/clothing?filter=kids&subFilter=bracelet">Bracelets</Link></li>
            <li><Link href="/category/accessories/clothing?filter=kids&subFilter=necklace">Necklaces</Link></li>
          </ul>
        </li>
        <li>
          <label for="dropdown4" className="dropdownLabel">
            ALL
            <input type="checkbox" id="dropdown4" />
            <span className="arrow"></span>
          </label>
          <ul className="dropdown-menu">
            <li><Link href='/category/accessories/clothing?filter=all&subFilter=all'>All</Link></li>
            <li><Link href="/category/accessories/clothing?filter=accessories&subFilter=bracelet">Bracelets</Link></li>
            <li><Link href="/category/accessories/clothing?filter=accessories&subFilter=necklace">Necklaces</Link></li>
          </ul>
        </li>
      </ul>
      
      <div>
        <Link href="/category/accessories/clothing?filter=mens&subFilter=accessories"><Image src="/Images/pageImages/accessoriesPage/acc1.webp" alt="" width={328} height={290} /></Link>
        <Link href="/category/accessories/clothing?filter=mens&subFilter=accessories" className="description">SHOP MENS</Link>
      </div>
      <div>
        <Link href="/category/accessories/clothing?filter=womens&subFilter=accessories"><Image src="/Images/pageImages/accessoriesPage/acc2.avif" alt="" width={328} height={290} /></Link>
        <Link href="/category/accessories/clothing?filter=womens&subFilter=accessories" className="description">SHOP WOMENS</Link>
      </div>
      <div>
        <Link href="/category/accessories/clothing?filter=accessories&subFilter=bracelet"><Image src="/Images/pageImages/kidsPage/kidsaccessories.avif" alt="" width={328} height={290} /></Link>
        <Link href="/category/accessories/clothing?filter=accessories&subFilter=bracelet" className="description">SHOP BRACELETS</Link>
      </div>
    </div>
    






    
    <div className="mainContentDesktop hideForMobile">
      <div className="dropDowns">
        <ul>
          <li>
            <label for="dropdown5" className="dropdownLabel">
              MENS
              <input type="checkbox" id="dropdown5" />
              <span className="arrow"></span>
            </label>
            <ul className="dropdown-menu">
              <li><Link href='/category/accessories/clothing?filter=mens&subFilter=accessories'>All</Link></li>
              <li><Link href="/category/accessories/clothing?filter=mens&subFilter=bracelet">Bracelets</Link></li>
              <li><Link href="/category/accessories/clothing?filter=mens&subFilter=necklace">Necklaces</Link></li>
            </ul>
          </li>
          <li>
            <label for="dropdown6" className="dropdownLabel">
              WOMENS
              <input type="checkbox" id="dropdown6" />
              <span className="arrow"></span>
            </label>
            <ul className="dropdown-menu">
              <li><Link href='/category/accessories/clothing?filter=womens&subFilter=accessories'>All</Link></li>
              <li><Link href="/category/accessories/clothing?filter=womens&subFilter=bracelet">Bracelets</Link></li>
              <li><Link href="/category/accessories/clothing?filter=womens&subFilter=necklace">Necklaces</Link></li>
            </ul>
          </li>
          <li>
            <label for="dropdown7" className="dropdownLabel">
              KIDS
              <input type="checkbox" id="dropdown7" />
              <span className="arrow"></span>
            </label>
            <ul className="dropdown-menu">
              <li><Link href='/category/accessories/clothing?filter=kids&subFilter=accessories'>All</Link></li>
              <li><Link href="/category/accessories/clothing?filter=kids&subFilter=bracelet">Bracelets</Link></li>
              <li><Link href="/category/accessories/clothing?filter=kids&subFilter=necklace">Necklaces</Link></li>
            </ul>
          </li>
          <li>
            <label for="dropdown8" className="dropdownLabel">
              ALL&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <input type="checkbox" id="dropdown8" />
              <span className="arrow"></span>
            </label>
            <ul className="dropdown-menu">
              <li><Link href='/category/accessories/clothing?filter=all&subFilter=all'>All</Link></li>
              <li><Link href="/category/accessories/clothing?filter=accessories&subFilter=bracelet">Bracelets</Link></li>
              <li><Link href="/category/accessories/clothing?filter=accessories&subFilter=necklace">Necklaces</Link></li>
            </ul>
          </li>
        </ul>
        </div>
        <div className="dropDowns-main-desktop">
          <div className="desktopTitle">
            <span>Jewelry for Men,<br /> Women, and kids.</span>
          </div>
          <div className="bannerSection">
              <Link href="/category/accessories/clothing?filter=all&subFilter=all"><Image src="/Images/pageImages/accessoriesPage/accbanner2.jpg" alt="" width={328} height={200} /></Link>
              <Link href="/category/accessories/clothing?filter=all&subFilter=all" className="describe">SHOP ALL</Link>
          </div>
          <div className="rowSection">
            <div>
              <Link href="/category/accessories/clothing?filter=mens&subFilter=accessories"><Image src="/Images/pageImages/accessoriesPage/acc1.webp" alt="" width={328} height={290} /></Link>
              <Link href="/category/accessories/clothing?filter=mens&subFilter=accessories" className="describe">SHOP MENS</Link>
            </div>
            <div>
              <Link href="/category/accessories/clothing?filter=womens&subFilter=accessories"><Image src="/Images/pageImages/accessoriesPage/acc2.avif" alt="" width={328} height={290} /></Link>
              <Link href="/category/accessories/clothing?filter=womens&subFilter=accessories" className="describe">SHOP WOMENS</Link>
            </div>
          </div>
          
          <div className="bannerSection middlebanner">
              <Image src="/Images/pageImages/accessoriesPage/accbanner1.jpg" alt="" width={328} height={220} />
          </div>
          <div className="rowSection">
            <div>
              <Link href="/category/accessories/clothing?filter=accessories&subFilter=necklace"><Image src="/Images/pageImages/accessoriesPage/acc3.jpeg" alt="" width={328} height={270} /></Link>
              <Link href="/category/accessories/clothing?filter=accessories&subFilter=necklace" className="describe">SHOP NECKLACES</Link>
            </div>
            <div>
              <Link href="/category/accessories/clothing?filter=accessories&subFilter=bracelet"><Image src="/Images/pageImages/accessoriesPage/acc4.webp" alt="" width={328} height={270} /></Link>
              <Link href="/category/accessories/clothing?filter=accessories&subFilter=bracelet" className="describe">SHOP BRACELETS</Link>
            </div>
          </div>
      </div>
    </div>
    <Dropdowns />
    </>
  )
}

export default AccessoriesPage