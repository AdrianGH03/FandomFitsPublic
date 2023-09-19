"use client";

// Fonts or Styles
import '@/css/layout.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faBagShopping } from '@fortawesome/free-solid-svg-icons'

//Firebase
import { auth, app } from '../config/firebase-config';

//Hooks or React Components
import { useEffect, useState, useRef } from 'react';
import Link from 'next/link'
import Image from 'next/image'

//Custom Components
import UserDesktop from '@/app/components/user-components/UserDesktop';
import UserMobile from '@/app/components/user-components/UserMobile';


import list from '@/app/api/backend/storeList';


const Header = ({ setSelectedTheme, selectedTheme }) => {

    const [menuShowing, setMenuShowing] = useState(false);
    const [toggleSearchDropdown, setToggleSearchDropdown] = useState(false);
    const [searchInput, setSearchInput] = useState('');
    const [filteredItems, setFilteredItems] = useState([]);

    const saleCarouselImages = [
      '/Images/menuImages/menuHats.jpg',
      '/Images/themeImages/spiderversebanner3.jpg',
      '/Images/themeImages/spiderversebanner4.webp',
    ]

    const saleCarouselContent = [
      'Sign up today!',
      'Shop your favorite fandoms!',
      'Get the latest deals!'
    ]
    const saleCarouselData = [
      {
        imageUrl: '/Images/menuImages/menuHats.jpg',
        content: 'Sign up today!'
      }, 
      {
        imageUrl: '/Images/themeImages/spiderversebanner3.jpg',
        content: 'Shop your favorite fandoms!'
      },
      {
        imageUrl: '/Images/themeImages/spiderversebanner4.jpg',
        content: 'Get the latest deals!'
      }
    ];
    const [currentDataIndex, setCurrentDataIndex] = useState(0);
    const rotateData = () => {
      setCurrentDataIndex((prevIndex) =>
        prevIndex === saleCarouselData.length - 1 ? 0 : prevIndex + 1
      );
    };
    const menuRef = useRef(null);

    useEffect(() => {
      const handleClickOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
        
          setMenuShowing(false);
        }
      };
  
      document.addEventListener('mouseover', handleClickOutside);
      return () => {
        document.removeEventListener('mouseover', handleClickOutside);
      };
    }, []);
    useEffect(() => {
      const mySelect = document.getElementById('themeSelect');
      const myDiv = document.querySelector('.themeDropDown');
      const menuItems = document.querySelectorAll('.menuMens, .menuWomens, .menuHats, .menuShirts, .menuPants, .menuShoes, .menuJewelry');
  
      const setInitialBackground = () => {
        const selectedValue = mySelect.value;
  
        switch (selectedValue) {
          case 'sp-astv':
            myDiv.style.backgroundImage = 'url("/Images/themeImages/spidermanbanner2.jpg")';
            menuItems.forEach(item => {
              const className = item.classList[0];
              item.style.backgroundImage = `url("/Images/menuImages/${className}.jpg")`;
            });
            break;
          case 'barbie':
            myDiv.style.backgroundImage = 'url("/Images/themeImages/barbie.jpg")';
            menuItems.forEach(item => item.style.backgroundImage = 'url("/Images/themeImages/barbie.jpg")');
            break;
          case 'oppenheimer':
            myDiv.style.backgroundImage = 'url("/Images/themeImages/oppenheimer.jpg")';
            menuItems.forEach(item => item.style.backgroundImage = 'url("/Images/themeImages/oppenheimer.jpg")');
            break;
          default:
            myDiv.style.backgroundImage = 'none';
            menuItems.forEach(item => item.style.backgroundImage = 'none');
            break;
        }
      }
      mySelect.addEventListener('change', setInitialBackground);
      setInitialBackground();
      return () => {
        mySelect.removeEventListener('change', setInitialBackground);
      };
    }, []);

    useEffect(() => {
      const interval = setInterval(() => {
        rotateData();
      }, 4000); 
    
      return () => clearInterval(interval);
    }, []);

    const handleCheckboxChange = () => {
      setMenuShowing(prev => !prev);
    };
    const handleButtonClick = () => {
      setMenuShowing(false);
    };

    const handleSearchDropdown = () => {
      setToggleSearchDropdown(prev => !prev); 
    }

    const handleThemeChange = (event) => {
        setSelectedTheme(event.target.value);
    };


    const handleSearchInputChange = (e) => {
      const inputValue = e.target.value;
      setSearchInput(inputValue);
  
      
      const filtered = list.filter((item) =>
        item.name.toLowerCase().includes(inputValue.toLowerCase())
      );
  
      setFilteredItems(filtered);
    };
    
  return (
    <>
        <header>   
            <div className="hamburger-menu hideForDesktop" ref={menuRef}>
                <nav role="navigation">
                    <div id="menuToggle">
                    <input type="checkbox" checked={menuShowing} onChange={handleCheckboxChange} 
                    
                    />
                    <span></span>
                    <span></span>
                    <span></span>
                    <ul id="menu">
                        <li className="menuHead">
                          <div>
                              <h1>SHOP</h1>
                          </div>
                        </li>
                        <li className='user-nav'>
                          <UserMobile handleButtonClick={handleButtonClick} handleCheckboxChange={handleCheckboxChange} />
                        </li>
                        <li className="menuMens menuFirst"><Link href="/category/mens" onClick={handleButtonClick}>Mens</Link ></li>
                        <li className="menuWomens"><Link href='/category/womens' onClick={handleButtonClick}>Womens</Link></li>
                        <li className="menuShirts"><Link href="/category/kids" onClick={handleButtonClick}>Kids</Link ></li>
                        <li className="menuShoes"><Link href="/category/shoes" onClick={handleButtonClick}>Shoes</Link ></li>
                        <li className="menuJewelry"><Link href="/category/accessories" onClick={handleButtonClick}>Accessories</Link ></li>
                        <li className="brandName"><Link href="/" onClick={handleButtonClick}><h1>Fandom Fits</h1></Link></li>
                    </ul>
                    </div>
                </nav>
                
            </div>
            <div className="title hideForDesktop"><Link href="/"><h1>Fandom Fits</h1></Link ></div>
            <nav className="desktop-header hideForMobile">
                <ul className="desktopList">
                    <li><Link href="/" className="titleA"><h1>Fandom Fits</h1></Link ></li>
                    <li className="firstCat"><Link href="/category/mens">Mens</Link ></li>
                    <li><Link href='/category/womens'>Womens</Link></li>
                    
                    <li><Link href="/category/kids">Kids</Link ></li>
                    <li><Link href="/category/shoes">Shoes</Link ></li>
                    
                    <li><Link href="/category/accessories">Accessories</Link ></li>
                    
                    
                </ul>
                
                
            </nav>
            <UserDesktop handleSearchDropdown={handleSearchDropdown} />
            
        </header> 
        
        {toggleSearchDropdown && window.innerWidth > 1024 && 
           <div className='full-container-for-search hideForMobile'>
            <div className='container-for-search'>
              <div className='search-bar-container'
                style={filteredItems.length == 0 ? {paddingBottom: '0rem'} : {paddingBottom: '3rem'}}
              >
                <input
                  id="search-input"
                  type="text"
                  placeholder="Search..."
                  value={searchInput}
                  onChange={handleSearchInputChange}
                />
              
                <button type="submit">
                  <FontAwesomeIcon icon={faMagnifyingGlass}  />
                </button>
              </div>
              <div className="search-items-container">
              {filteredItems.slice(0,20).map((item) => (
                <Link href={`/category/clothing/view/${item.id}`} key={item.id} onClick={handleSearchDropdown}>
                  <div className="search-item">
                    <div>
                      <Image
                        src={item.img}
                        alt={item.name}
                        width={50}
                        height={50}
                        style={{objectFit: 'contain'}}
                      />
                    </div>
                    
                    <p>{item.name}</p>
                  </div>
                </Link>
              ))}
              </div>
            </div>
            
          </div>
        }


        
        <div className="themeDropDown">
        <label htmlFor="themeSelect" id="themeLabel">THEME</label>
                <select id="themeSelect" onChange={handleThemeChange} >
                    <option value="sp-astv">Spider-Man: Across the Spider-Verse</option>
                    
                </select>
        </div>
        
        <div className="sale-container" style={{ backgroundImage: `url(${saleCarouselData[currentDataIndex].imageUrl})` }}>
            <h1 id='sales-pitch'><Link href="/user-authentication/login">{saleCarouselData[currentDataIndex].content}</Link></h1>
        </div>
    </>
  )
}

export default Header

/*<option value="barbie">Barbie</option>
<option value="oppenheimer">Oppenheimer</option>*/