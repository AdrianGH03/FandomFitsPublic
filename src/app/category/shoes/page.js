"use client";
import Image from 'next/image'
import Dropdowns from '@/app/components/utility-components/Dropdowns'
import Link from 'next/link';


const ShoesPage = () => {
    
  return (
    <>
    <div className="categoryTitle">
        <h1>SHOES</h1>
    </div>
        
        <div className="dropDowns hideForDesktop">
            <div className="dropDowns-title">
                <span>Shoes &<br />Sneakers</span>
            </div>
            <div>
                <Link href="/category/shoes/clothing?filter=womens&subFilter=shoes"><Image src="/Images/pageImages/shoesPage/shoes1.webp" alt="" width={400} height={400} /></Link>
                <Link href="/category/shoes/clothing?filter=womens&subFilter=shoes" className="description">SHOP WOMENS</Link>
            </div>
            <ul>
                <li>
                    <label for="dropdown" className="dropdownLabel">
                        MENS
                        <input type="checkbox" id="dropdown" />
                        <span className="arrow"></span>
                    </label>
                    <ul className="dropdown-menu">
                            <li><Link href="/category/shoes/clothing?filter=mens&subFilter=shoes">All</Link></li>
                            <li><Link href="/category/shoes/clothing?filter=mens&subFilter=sneakers">Sneakers</Link></li>
                            <li><Link href="/category/shoes/clothing?filter=mens&subFilter=sport">Sport</Link></li>
                    </ul>
                </li>
                <li>
                    <label for="dropdown2" className="dropdownLabel">
                        WOMENS
                        <input type="checkbox" id="dropdown2" />
                        <span className="arrow"></span>
                    </label>
                    <ul className="dropdown-menu">
                            <li><Link href="/category/shoes/clothing?filter=womens&subFilter=shoes">All</Link></li>
                            <li><Link href="/category/shoes/clothing?filter=womens&subFilter=sneakers">Sneakers</Link></li>
                            <li><Link href="/category/shoes/clothing?filter=womens&subFilter=sport">Sport</Link></li>
                    </ul>
                </li>
                <li>
                    <label for="dropdown3" className="dropdownLabel">
                        KIDS
                        <input type="checkbox" id="dropdown3" />
                        <span className="arrow"></span>
                    </label>
                    <ul className="dropdown-menu">
                            <li><Link href="/category/shoes/clothing?filter=kids&subFilter=shoes">All</Link></li>
                            <li><Link href="/category/shoes/clothing?filter=kids&subFilter=sneakers">Sneakers</Link></li>
                            <li><Link href="/category/shoes/clothing?filter=kids&subFilter=sport">Sport</Link></li>
                    </ul>
                </li>
                <li>
                    <label for="dropdown4" className="dropdownLabel">
                        ALL
                        <input type="checkbox" id="dropdown4" />
                        <span className="arrow"></span>
                    </label>
                    <ul className="dropdown-menu">
                            <li><Link href="/category/shoes/clothing?filter=all&subFilter=shoes">All</Link></li>
                            <li><Link href="/category/shoes/clothing?filter=all&subFilter=sneakers">Sneakers</Link></li>
                            <li><Link href="/category/shoes/clothing?filter=all&subFilter=sport">Sport</Link></li>
                    </ul>
                </li>
            </ul>
            <div>
                <Link href="/category/shoes/clothing?filter=mens&subFilter=shoes"><Image src="/Images/pageImages/shoesPage/shoes2.jpg" alt="" width={400} height={400} /></Link>
                <Link href="/category/shoes/clothing?filter=mens&subFilter=shoes" className="description">SHOP MENS</Link>
            </div>
            
            <div>
                <Link href="/category/shoes/clothing?filter=shoes&subFilter=sneakers"><Image src="/Images/pageImages/shoesPage/shoes5.webp" alt="" width={400} height={400}  /></Link>
                <Link href="/category/shoes/clothing?filter=shoes&subFilter=sneakers" className="description">SHOP SNEAKERS</Link>
            </div>
            <div>
                <Link href="/category/shoes/clothing"><Image src="/Images/pageImages/mensPage/mensshoesboth.jpg" alt="" width={400} height={400}  /></Link>
                <Link href="/category/shoes/clothing" className="description">SHOP ALL</Link>
            </div>
            <div>
                <Link href="/category/shoes/clothing?filter=shoes&subFilter=sport"><Image src="/Images/pageImages/shoesPage/shoes6.webp" alt="" width={400} height={400}  /></Link>
                <Link href="/category/shoes/clothing?filter=shoes&subFilter=sport" className="description">SHOP SPORT</Link>
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
                            <li><Link href="/category/shoes/clothing?filter=mens&subFilter=shoes">All</Link></li>
                            <li><Link href="/category/shoes/clothing?filter=mens&subFilter=sneakers">Sneakers</Link></li>
                            <li><Link href="/category/shoes/clothing?filter=mens&subFilter=sport">Sport</Link></li>
                        </ul>
                    </li>
                    <li>
                        <label for="dropdown6" className="dropdownLabel">
                        WOMENS
                        <input type="checkbox" id="dropdown6" />
                        <span className="arrow"></span>
                        </label>
                        <ul className="dropdown-menu">
                            <li><Link href="/category/shoes/clothing?filter=womens&subFilter=shoes">All</Link></li>
                            <li><Link href="/category/shoes/clothing?filter=womens&subFilter=sneakers">Sneakers</Link></li>
                            <li><Link href="/category/shoes/clothing?filter=womens&subFilter=sport">Sport</Link></li>
                        </ul>
                    </li>
                    <li>
                        <label for="dropdown7" className="dropdownLabel">
                        KIDS
                        <input type="checkbox" id="dropdown7" />
                        <span className="arrow"></span>
                        </label>
                        <ul className="dropdown-menu">
                            <li><Link href="/category/shoes/clothing?filter=kids&subFilter=shoes">All</Link></li>
                            <li><Link href="/category/shoes/clothing?filter=kids&subFilter=sneakers">Sneakers</Link></li>
                            <li><Link href="/category/shoes/clothing?filter=kids&subFilter=sport">Sport</Link></li>
                        </ul>
                    </li>
                    <li>
                        <label for="dropdown8" className="dropdownLabel">
                        ALL&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <input type="checkbox" id="dropdown8" />
                        <span className="arrow"></span>
                        </label>
                        <ul className="dropdown-menu">
                            <li><Link href="/category/shoes/clothing?filter=all&subFilter=shoes">All</Link></li>
                            <li><Link href="/category/shoes/clothing?filter=all&subFilter=sneakers">Sneakers</Link></li>
                            <li><Link href="/category/shoes/clothing?filter=all&subFilter=sport">Sport</Link></li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div className="dropDowns-main-desktop">
                <div className="desktopTitle">
                    <span>Shoes &<br />Sneakers</span>
                </div>
                <div className="rowSection">
                    <div>
                        <Link href="/category/shoes/clothing?filter=womens&subFilter=shoes"><Image src="/Images/pageImages/shoesPage/shoes1.webp" alt="" width={328} height={290}  /></Link>
                        <Link href="/category/shoes/clothing?filter=womens&subFilter=shoes" className="describe">SHOP WOMENS</Link>
                    </div>
                    <div>
                        <Link href="/category/shoes/clothing?filter=mens&subFilter=shoes"><Image src="/Images/pageImages/shoesPage/shoes2.jpg" alt="" width={328} height={290}  /></Link>
                        <Link href="/category/shoes/clothing?filter=mens&subFilter=shoes" className="describe">SHOP MENS</Link>
                    </div>
                </div>
                
                
                <div className="rowSection">
                    <div>
                        <Link href="/category/shoes/clothing?filter=shoes&subFilter=sneakers"><Image src="/Images/pageImages/shoesPage/shoes5.webp" alt="" width={328} height={270} /></Link>
                        <Link href="/category/shoes/clothing?filter=shoes&subFilter=sneakers" className="describe">SHOP SNEAKERS</Link>
                    </div>
                    <div>
                        <Link href="/category/shoes/clothing?filter=shoes&subFilter=sport"><Image src="/Images/pageImages/shoesPage/shoes6.webp" alt="" width={328} height={270} /></Link>
                        <Link href="/category/shoes/clothing?filter=shoes&subFilter=sport" className="describe">SHOP SPORT</Link>
                    </div>
                </div>
                <div className="bannerSection middlebanner">
                    <Image src="/Images/pageImages/mensPage/mensheader.jpeg" alt="" width={328} height={260} />
                </div>
                <div className="rowSection">
                    <div>
                        <Link href="/category/shoes/clothing?filter=kids&subFilter=shoes"><Image src="/Images/pageImages/shoesPage/shoes4.jpg" alt="" width={328} height={250} /></Link>
                        <Link href="/category/shoes/clothing?filter=kids&subFilter=shoes" className="describe">SHOP KIDS</Link>
                    </div>
                    <div >
                        <Link href="/category/shoes/clothing"><Image src="/Images/pageImages/mensPage/mensshoesboth.jpg" alt="" width={328} height={250} /></Link>
                        <Link href="/category/shoes/clothing" className="describe">SHOP ALL</Link>
                    </div>
                </div>
            </div>

            
        </div>

        <Dropdowns />
    </>
  )
}

export default ShoesPage