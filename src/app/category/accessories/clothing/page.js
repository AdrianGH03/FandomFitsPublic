"use client";
import Link from 'next/link'
import Image from 'next/image'
import Dropdowns from '@/app/components/utility-components/Dropdowns'
import list from '@/app/api/backend/storeList';
import { useEffect, useState } from 'react';
import { useRouter, useSearchParams} from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { applyFilterSpecial } from '@/app/components/utility-components/FilterListsShoes';

const accessoriesMainPage = () => {
  const router = useRouter();
  const [clothingList, setClothingList] = useState(list);
  const [filterWord, setFilterWord] = useState('');
  const [secondFilterWord, setSecondFilterWord] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 21; 
  const accessoriesList = list.filter(item => item.mainCat === 'accessories');
  const searchParams = useSearchParams()
 
  const routeFilter = searchParams.get('filter')
  const routeSubFilter = searchParams.get('subFilter')
  

  useEffect(() => {
    

    if (routeFilter) {
      
      setFilterWord(routeFilter);
      setSecondFilterWord(routeSubFilter);
    } else {
      setFilterWord('all');
      setSecondFilterWord('');
    }
  }, []);

  useEffect(() => {
    setClothingList(accessoriesList);
  }, [])
  useEffect(() => {
    applyFilterSpecial(filterWord, secondFilterWord, accessoriesList, setClothingList);

  }, [filterWord, secondFilterWord])

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
            item.mainCat === 'accessories' ? 180 : 250
          }
          height={
            item.mainCat === 'accessories' ? 100 : 200
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
            item.mainCat === 'accessories' ? 100 : 250
          }
          height={
            item.mainCat === 'accessories' ? 50 : 50
          }
          style={item ? {objectFit: 'contain'} : {objectFit: 'contain'}}
          
          
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
      <h1>JEWELRY</h1>
    </div>
    
    <div className="dropDowns hideForDesktop">
      
      
      <ul>
        
        <li>
          <label htmlFor="dropdown" className="dropdownLabel">
            MENS
            <input type="checkbox" id="dropdown" />
            <span className="arrow"></span>
          </label>
          <ul className="dropdown-menu">
              <li><Link href="" onClick={() => { setSecondFilterWord('accessories'); setFilterWord('mens'); }}>All</Link></li>
              <li><Link href="" onClick={() => { setSecondFilterWord('bracelet'); setFilterWord('mens'); }}>Bracelets</Link></li>
              <li><Link href="" onClick={() => { setSecondFilterWord('necklace'); setFilterWord('mens'); }}>Necklaces</Link></li>
          </ul>
        </li>
        <li>
          <label htmlFor="dropdown2" className="dropdownLabel">
            WOMENS
            <input type="checkbox" id="dropdown2" />
            <span className="arrow"></span>
          </label>
          <ul className="dropdown-menu">
              <li><Link href="" onClick={() => { setSecondFilterWord('accessories'); setFilterWord('womens'); }}>All</Link></li>
              <li><Link href="" onClick={() => { setSecondFilterWord('bracelet'); setFilterWord('womens'); }}>Bracelets</Link></li>
              <li><Link href="" onClick={() => { setSecondFilterWord('necklace'); setFilterWord('womens'); }}>Necklaces</Link></li>
          </ul>
        </li>
        <li>
          <label htmlFor="dropdown3" className="dropdownLabel">
            KIDS
            <input type="checkbox" id="dropdown3" />
            <span className="arrow"></span>
          </label>
          <ul className="dropdown-menu">
              <li><Link href="" onClick={() => { setSecondFilterWord('accessories'); setFilterWord('kids'); }}>All</Link></li>
              <li><Link href="" onClick={() => { setSecondFilterWord('bracelet'); setFilterWord('kids'); }}>Bracelets</Link></li>
              <li><Link href="" onClick={() => { setSecondFilterWord('necklace'); setFilterWord('kids'); }}>Necklaces</Link></li>
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
            <label htmlFor="dropdown" className="dropdownLabel" onClick={() => { setSecondFilterWord('all'); setFilterWord('all'); }}>
              ALL
            </label>
            
          </li>
          <li>
            <label htmlFor="dropdown5" className="dropdownLabel">
              MENS
              <input type="checkbox" id="dropdown5" />
              <span className="arrow"></span>
            </label>
            <ul className="dropdown-menu">
              <li><Link href="" onClick={() => { setSecondFilterWord('accessories'); setFilterWord('mens'); }}>All</Link></li>
              <li><Link href="" onClick={() => { setSecondFilterWord('bracelet'); setFilterWord('mens'); }}>Bracelets</Link></li>
              <li><Link href="" onClick={() => { setSecondFilterWord('necklace'); setFilterWord('mens'); }}>Necklaces</Link></li>
              
            </ul>
          </li>
          <li>
            <label htmlFor="dropdown6" className="dropdownLabel">
              WOMENS&nbsp;&nbsp;&nbsp;&nbsp;
              <input type="checkbox" id="dropdown6" />
              <span className="arrow"></span>
            </label>
            <ul className="dropdown-menu">
              <li><Link href="" onClick={() => { setSecondFilterWord('accessories'); setFilterWord('womens'); }}>All</Link></li>
              <li><Link href="" onClick={() => { setSecondFilterWord('bracelet'); setFilterWord('womens'); }}>Bracelets</Link></li>
              <li><Link href="" onClick={() => { setSecondFilterWord('necklace'); setFilterWord('womens'); }}>Necklaces</Link></li>
            </ul>
          </li>
          <li>
            <label htmlFor="dropdown7" className="dropdownLabel">
              KIDS
              <input type="checkbox" id="dropdown7" />
              <span className="arrow"></span>
            </label>
            <ul className="dropdown-menu">
              <li><Link href="" onClick={() => { setSecondFilterWord('accessories'); setFilterWord('kids'); }}>All</Link></li>
              <li><Link href="" onClick={() => { setSecondFilterWord('bracelet'); setFilterWord('kids'); }}>Bracelets</Link></li>
              <li><Link href="" onClick={() => { setSecondFilterWord('necklace'); setFilterWord('kids'); }}>Necklaces</Link></li>
              
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

export default accessoriesMainPage