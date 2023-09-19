"use client";
import Link from 'next/link'
import Image from 'next/image'
import Dropdowns from '@/app/components/utility-components/Dropdowns'
import list from '@/app/api/backend/storeList';
import { useEffect, useState } from 'react';
import { useRouter, useSearchParams} from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { applyFilter } from '@/app/components/utility-components/FilterLists';

const MensMainPage = () => {
  const router = useRouter();
  const [clothingList, setClothingList] = useState(list);
  const [filterWord, setFilterWord] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 21; 
  const mensList = list.filter(item => item.topCat === 'mens');
  const searchParams = useSearchParams()
 
  const routeFilter = searchParams.get('filter')
  

  useEffect(() => {
    

    if (routeFilter) {
      
      setFilterWord(routeFilter);
    } else {
      setFilterWord('all');
    }
  }, []);

  useEffect(() => {
    setClothingList(mensList);
  }, [])
  useEffect(() => {
    applyFilter(filterWord, mensList, setClothingList);

  }, [filterWord])

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = clothingList.slice(indexOfFirstItem, indexOfLastItem);


  const clothesListDesktop = currentItems.map((item) => (
    <div key={item.id} className="clothing-item">
      <div className="clothing-item-img">
        <Image  
          src={item.img}
          alt={item.name}
          width={
            item.mainCat === 'shoes' ? 180 :
            item.mainCat === 'tops' ? 230 :
            item.mainCat === 'bottoms' ? 130 :
            item.mainCat === 'accessories' && item.subCat === 'necklace' ? 110 : 250
          }
          height={
            item.mainCat === 'shoes' ? 100 :
            item.mainCat === 'tops' ? 250 :
            item.mainCat === 'bottoms' ? 250 :
            item.mainCat === 'accessories' && item.subCat == 'necklace' ? 250 : 200
          }
          style={item ? {objectFit: 'contain'} : {objectFit: 'contain'}}
        />
      </div>
      
      <div className="clothing-item-details">
        <h5>{item.name}</h5>
        <div>
          <span>${item.price}</span>
          <Link href={`/category/clothing/view/${item.id}`}>VIEW</Link>
        </div>
      </div>
    </div>
    
  ))

  const clothesListMobile = currentItems.map((item) => (
    <div key={item.id} className="clothing-item">
      <div className="clothing-item-img-mobile">
        <Image  
          src={item.img}
          alt={item.name}
          width={
            item.mainCat === 'shoes' ? 100 :
            item.mainCat === 'tops' ? 150 :
            item.mainCat === 'bottoms' ? 100 :
            item.mainCat === 'accessories' && item.subCat === 'necklace' ? 250 : 250
          }
          height={
            item.mainCat === 'shoes' ? 50 :
            item.mainCat === 'tops' ? 50 :
            item.mainCat === 'bottoms' ? 50 :
            item.mainCat === 'accessories' && item.subCat == 'necklace' ? 50 : 50
          }
          style={item.mainCat === 'accessories' && item.subCat === 'necklace' ? {objectFit: 'contain'} : {objectFit: 'contain'}}
          
        />
      </div>
      
      <div className="clothing-item-details">
        <h5>{item.name.length > 24 ? `${item.name.slice(0, 24)}...` : item.name}</h5>
        <div>
          <span>${item.price}</span>
          <Link href={`/category/clothing/view/${item.id}`}>VIEW</Link>
        </div>
      </div>
    </div>
    
  ))
  useEffect(() => {
    window.scrollTo({ top: 200, behavior: 'smooth' });
  }, [currentPage])

  const handlePreviousPage = () => {
    if (currentPage) {
      setCurrentPage(currentPage - 1);
    }
  };
  
  const handleNextPage = () => {
    if (currentPage) {
      setCurrentPage(currentPage + 1);
    }
  };
  
  return (
    <>
    <div className="categoryTitle">
      <h1>MENS</h1>
    </div>
    
    <div className="dropDowns hideForDesktop">
      
      
      <ul>
        <li>
          
        </li>
        <li>
          <label htmlFor="dropdown" className="dropdownLabel">
            TOPS
            <input type="checkbox" id="dropdown" />
            <span className="arrow"></span>
          </label>
          <ul className="dropdown-menu">
              <li><Link href="#" onClick={() => setFilterWord('tops')}>All</Link></li>
              <li><Link href="#" onClick={() => setFilterWord('hoodies')}>Hoodies</Link></li>
              <li><Link href="#" onClick={() => setFilterWord('tshirts')}>T-Shirts</Link></li>
          </ul>
        </li>
        <li>
          <label htmlFor="dropdown2" className="dropdownLabel">
            BOTTOMS
            <input type="checkbox" id="dropdown2" />
            <span className="arrow"></span>
          </label>
          <ul className="dropdown-menu">
              <li><Link href="#" onClick={() => setFilterWord('bottoms')}>All</Link></li>
              <li><Link href="#" onClick={() => setFilterWord('jeans')}>Jeans</Link></li>
              <li><Link href="#" onClick={() => setFilterWord('shorts')}>Shorts</Link></li>
              <li><Link href="#" onClick={() => setFilterWord('sweatpants')}>Sweatpants</Link></li>
          </ul>
        </li>
        <li>
          <label htmlFor="dropdown3" className="dropdownLabel">
            SHOES
            <input type="checkbox" id="dropdown3" />
            <span className="arrow"></span>
          </label>
          <ul className="dropdown-menu">
              <li><Link href="#" onClick={() => setFilterWord('shoes')}>All</Link></li>
              <li><Link href="#" onClick={() => setFilterWord('sneakers')}>Sneakers</Link></li>
              <li><Link href="#" onClick={() => setFilterWord('sport')}>Sport</Link></li>
          </ul>
        </li>
        <li>
          <label htmlFor="dropdown4" className="dropdownLabel">
            ACCESSORIES
            <input type="checkbox" id="dropdown4" />
            <span className="arrow"></span>
          </label>
          <ul className="dropdown-menu">
              <li><Link href="#" onClick={() => setFilterWord('accessories')}>All</Link></li>
              <li><Link href="#" onClick={() => setFilterWord('necklace')}>Necklaces</Link></li>
              <li><Link href="#" onClick={() => setFilterWord('bracelet')}>Bracelets</Link></li>
          </ul>
        </li>
      </ul>
      
      <div className="clothing-items-container">
          {clothesListMobile}
          
      </div>
      
    </div>
    






    
    <div className="mainContentDesktop hideForMobile" id='clothingPAGE-container'>
      
      <div className="dropDowns">
        <ul>
          <li>
            <label htmlFor="dropdown" className="dropdownLabel" onClick={() => setFilterWord('all')}>
              ALL
              
              
            </label>
            
          </li>
          <li>
            <label htmlFor="dropdown5" className="dropdownLabel">
              TOPS
              <input type="checkbox" id="dropdown5" />
              <span className="arrow"></span>
            </label>
            <ul className="dropdown-menu">
              <li><Link href="#" onClick={() => setFilterWord('tops')}>All</Link></li>
              <li><Link href="#" onClick={() => setFilterWord('hoodies')}>Hoodies</Link></li>
              <li><Link href="#" onClick={() => setFilterWord('tshirts')}>T-Shirts</Link></li>
              
            </ul>
          </li>
          <li>
            <label htmlFor="dropdown6" className="dropdownLabel">
              BOTTOMS
              <input type="checkbox" id="dropdown6" />
              <span className="arrow"></span>
            </label>
            <ul className="dropdown-menu">
              <li><Link href="#" onClick={() => setFilterWord('bottoms')}>All</Link></li>
              <li><Link href="#" onClick={() => setFilterWord('jeans')}>Jeans</Link></li>
              <li><Link href="#" onClick={() => setFilterWord('shorts')}>Shorts</Link></li>
              <li><Link href="#" onClick={() => setFilterWord('sweatpants')}>Sweatpants</Link></li>
            </ul>
          </li>
          <li>
            <label htmlFor="dropdown7" className="dropdownLabel">
              SHOES
              <input type="checkbox" id="dropdown7" />
              <span className="arrow"></span>
            </label>
            <ul className="dropdown-menu">
              <li><Link href="#" onClick={() => setFilterWord('shoes')}>All</Link></li>
              <li><Link href="#" onClick={() => setFilterWord('sneakers')}>Sneakers</Link></li>
              <li><Link href="#" onClick={() => setFilterWord('sport')}>Sport</Link></li>
              
            </ul>
          </li>
          <li>
            <label htmlFor="dropdown8" className="dropdownLabel">
              ACCESSORIES
              <input type="checkbox" id="dropdown8" />
              <span className="arrow"></span>
            </label>
            <ul className="dropdown-menu">
              <li><Link href="#" onClick={() => setFilterWord('accessories')}>All</Link></li>
              <li><Link href="#" onClick={() => setFilterWord('necklace')}>Necklaces</Link></li>
              <li><Link href="#" onClick={() => setFilterWord('bracelet')}>Bracelets</Link></li>
            </ul>
          </li>
        </ul>
        </div>


        <div className="clothing-items-container">
          {clothesListDesktop}
          
        </div>
        
    </div>
    <div className="pagination-buttons">
      <button onClick={handlePreviousPage} disabled={currentPage === 1}
        style={currentPage === 1 ? {opacity: '0.5'} : {opacity: '1'} }
      >
        <FontAwesomeIcon icon={faArrowLeft} />
      </button>
      <span>{currentPage}</span>
      <button onClick={handleNextPage} disabled={currentPage >= Math.ceil(clothingList.length / itemsPerPage)} 
        style={currentPage >= Math.ceil(clothingList.length / itemsPerPage) ? {opacity: '0.5'} : {opacity: '1'} }
      >
        <FontAwesomeIcon icon={faArrowRight} />
      </button>
    </div>
    <Dropdowns />
    </>
  )
}

export default MensMainPage