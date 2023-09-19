"use client";
import Image from 'next/image'
import Dropdowns from '@/app/components/utility-components/Dropdowns'
import Link from 'next/link'

const Womens = () => {
    
  return (
    <>
    <div className="categoryTitle">
        <h1>WOMENS</h1>
    </div>
        
        <div className="dropDowns hideForDesktop">
            <div className="dropDowns-title">
                <span>Women's Clothing &<br />Juniors Clothing</span>
            </div>
            <div>
                <Link href="/category/womens/clothing?filter=tshirts"><Image src="/Images/pageImages/womensPage/womenstshirts.jpg" alt="" width={400} height={400} /></Link>
                <Link href="/category/womens/clothing?filter=tshirts" className="description">SHOP T-SHIRTS</Link>
            </div>
            <ul>
                <li>
                    <label for="dropdown" className="dropdownLabel">
                        TOPS
                        <input type="checkbox" id="dropdown" />
                        <span className="arrow"></span>
                    </label>
                    <ul className="dropdown-menu">
                        <li><Link href="/category/womens/clothing?filter=tops">All</Link></li>
                        <li><Link href="/category/womens/clothing?filter=hoodies">Hoodies</Link></li>
                        <li><Link href="/category/womens/clothing?filter=tshirts">T-Shirts</Link></li>
                    </ul>
                </li>
                <li>
                    <label for="dropdown2" className="dropdownLabel">
                        BOTTOMS
                        <input type="checkbox" id="dropdown2" />
                        <span className="arrow"></span>
                    </label>
                    <ul className="dropdown-menu">
                        <li><Link href="/category/womens/clothing?filter=bottoms">All</Link></li>
                        <li><Link href="/category/womens/clothing?filter=pants">Pants</Link></li>
                        <li><Link href="/category/womens/clothing?filter=leggings">Leggings</Link></li>
                        <li><Link href="/category/womens/clothing?filter=sweatpants">Sweatpants</Link></li>
                    </ul>
                </li>
                <li>
                    <label for="dropdown3" className="dropdownLabel">
                        SHOES
                        <input type="checkbox" id="dropdown3" />
                        <span className="arrow"></span>
                    </label>
                    <ul className="dropdown-menu">
                        <li><Link href="/category/womens/clothing?filter=shoes">All</Link></li>
                        <li><Link href="/category/womens/clothing?filter=sneakers">Sneakers</Link></li>
                        <li><Link href="/category/womens/clothing?filter=sport">Sport</Link></li>
                    </ul>
                </li>
                <li>
                    <label for="dropdown4" className="dropdownLabel">
                        ACCESSORIES
                        <input type="checkbox" id="dropdown4" />
                        <span className="arrow"></span>
                    </label>
                    <ul className="dropdown-menu">
                        <li><Link href="/category/womens/clothing?filter=accessories">All</Link></li>
                        <li><Link href="/category/womens/clothing?filter=necklace">Necklaces</Link></li>
                        <li><Link href="/category/womens/clothing?filter=bracelet">Bracelets</Link></li>
                    </ul>
                </li>
            </ul>
            
            
            <div>
                <Link href="/category/womens/clothing?filter=bottoms"><Image src="/Images/pageImages/womensPage/womenspants.webp" alt="" width={400} height={400}  /></Link>
                <Link href="/category/womens/clothing?filter=bottoms" className="description">SHOP PANTS</Link>
            </div>
            <div>
                <Link href="/category/womens/clothing?filter=shoes"><Image src="/Images/pageImages/mensPage/mensshoesboth.jpg" alt="" width={400} height={400}  /></Link>
                <Link href="/category/womens/clothing?filter=shoes" className="description">SHOP SHOES</Link>
            </div>
            <div>
                <Link href="/category/womens/clothing?filter=accessories"><Image src="/Images/pageImages/womensPage/womensacc.avif" alt="" width={400} height={400}  /></Link>
                <Link href="/category/womens/clothing?filter=accessories" className="description">SHOP ACCESSORY</Link>
            </div>
        </div>


        
        <div className="mainContentDesktop hideForMobile">
            <div className="dropDowns">
                <ul>
                    <li>
                        <label htmlFor="dropdown" className="dropdownLabel">
                            <Link href='/category/womens/clothing'>ALL</Link>
                        </label>
                        
                    </li>
                    <li>
                        <label for="dropdown5" className="dropdownLabel">
                        TOPS
                        <input type="checkbox" id="dropdown5" />
                        <span className="arrow"></span>
                        </label>
                        <ul className="dropdown-menu">
                            <li><Link href="/category/womens/clothing?filter=tops">All</Link></li>
                            <li><Link href="/category/womens/clothing?filter=hoodies">Hoodies</Link></li>
                            <li><Link href="/category/womens/clothing?filter=tshirts">T-Shirts</Link></li>
                        </ul>
                    </li>
                    <li>
                        <label for="dropdown6" className="dropdownLabel">
                        BOTTOMS
                        <input type="checkbox" id="dropdown6" />
                        <span className="arrow"></span>
                        </label>
                        <ul className="dropdown-menu">
                            <li><Link href="/category/womens/clothing?filter=bottoms">All</Link></li>
                            <li><Link href="/category/womens/clothing?filter=pants">Pants</Link></li>
                            <li><Link href="/category/womens/clothing?filter=leggings">Leggings</Link></li>
                            <li><Link href="/category/womens/clothing?filter=sweatpants">Sweatpants</Link></li>
                        </ul>
                    </li>
                    <li>
                        <label for="dropdown7" className="dropdownLabel">
                        SHOES
                        <input type="checkbox" id="dropdown7" />
                        <span className="arrow"></span>
                        </label>
                        <ul className="dropdown-menu">
                            <li><Link href="/category/womens/clothing?filter=shoes">All</Link></li>
                            <li><Link href="/category/womens/clothing?filter=sneakers">Sneakers</Link></li>
                            <li><Link href="/category/womens/clothing?filter=sport">Sport</Link></li>
                        </ul>
                    </li>
                    <li>
                        <label for="dropdown8" className="dropdownLabel">
                        ACCESSORIES
                        <input type="checkbox" id="dropdown8" />
                        <span className="arrow"></span>
                        </label>
                        <ul className="dropdown-menu">
                            <li><Link href="/category/womens/clothing?filter=accessories">All</Link></li>
                            <li><Link href="/category/womens/clothing?filter=necklace">Necklaces</Link></li>
                            <li><Link href="/category/womens/clothing?filter=bracelet">Bracelets</Link></li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div className="dropDowns-main-desktop">
                <div className="desktopTitle">
                    <span>Women's Clothing &<br />Juniors Clothing</span>
                </div>
                <div className="rowSection">
                    <div>
                        <Link href="/category/womens/clothing?filter=tshirts"><Image src="/Images/pageImages/womensPage/womenstshirts.jpg" alt="" width={328} height={290}  /></Link>
                        <Link href="/category/womens/clothing?filter=tshirts" className="describe">SHOP T-SHIRTS</Link>
                    </div>
                    <div>
                        <Link href="/category/womens/clothing?filter=tshirts"><Image src="/Images/pageImages/womensPage/womensshirtsboth.jpg" alt="" width={328} height={290}  /></Link>
                        <Link href="/category/womens/clothing?filter=tshirts" className="describe">SHOP SHIRTS</Link>
                    </div>
                </div>
                <div className="rowSection">
                    <div>
                        <Link href="/category/womens/clothing?filter=shoes"><Image src="/Images/pageImages/womensPage/womensshoes.jpeg" alt="" width={328} height={240}  /></Link>
                        <Link href="/category/womens/clothing?filter=shoes" className="describe">SHOP SHOES</Link>
                    </div>
                    <div>
                        <Link href="/category/womens/clothing?filter=hoodies"><Image src="/Images/pageImages/womensPage/womenshoodiess.jpg" alt="" width={328} height={240}  /></Link>
                        <Link href="/category/womens/clothing?filter=hoodies" className="describe">SHOP HOODIES</Link>
                    </div>
                </div>
                <div className="bannerSection">
                    <Link href="/category/womens/clothing?filter=all"><Image src="/Images/pageImages/womensPage/womensbannerall.webp" alt="" width={328} height={270}  /></Link>
                    <Link href="/category/womens/clothing?filter=all" className="describe">SHOP ALL</Link>
                </div>
                <div className="rowSection">
                    <div>
                        <Link href="/category/womens/clothing?filter=pants"><Image src="/Images/pageImages/womensPage/womenspants.webp" alt="" width={328} height={270} /></Link>
                        <Link href="/category/womens/clothing?filter=pants" className="describe">SHOP PANTS</Link>
                    </div>
                    <div>
                        <Link href="/category/womens/clothing?filter=accessories"><Image src="/Images/ClothingListItems/womens/accessories/3.jpg" alt="" width={328} height={270} /></Link>
                        <Link href="/category/womens/clothing?filter=accessories" className="describe">SHOP JEWELRY</Link>
                    </div>
                </div>
                <div className="bannerSection middlebanner">
                    <Image src="/Images/pageImages/womensPage/womensmiddlebanner.png" alt="" width={328} height={160} />
                </div>
                <div className="rowSection">
                    <div>
                        <Link href="/category/womens/clothing?filter=shoes"><Image src="/Images/pageImages/mensPage/mensshoesboth.jpg" alt="" width={328} height={328} /></Link>
                        <Link href="/category/womens/clothing?filter=shoes" className="describe">SHOP SHOES</Link>
                    </div>
                    <div>
                        <Link href="/category/womens/clothing?filter=accessories"><Image src="/Images/pageImages/womensPage/womensacc.avif" alt="" width={328} height={328} /></Link>
                        <Link href="/category/womens/clothing?filter=accessories" className="describe">SHOP ACCESORY</Link>
                    </div>
                </div>
            </div>

            
        </div>

        <Dropdowns />
    </>
  )
}

export default Womens