                                                                                                                                                            "use client";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import '@/css/layout.css'
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link'
import Image from 'next/image'
import list from '@/app/api/backend/storeList';



const SearchPage = () => {
  const router = useRouter();
  const [searchInput, setSearchInput] = useState('');
  const [filteredItems, setFilteredItems] = useState([]);

  

  const [windowWidth, setWindowWidth] = useState('');
  useEffect(() => {
    setWindowWidth(window.innerWidth);
  }, []);
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (windowWidth > 1024) {
      router.push('/');
    }
  }, [windowWidth, router]);

  const handleSearchInputChange = (e) => {
    const inputValue = e.target.value;
    setSearchInput(inputValue);

    
    const filtered = list.filter((item) =>
      item.name.toLowerCase().includes(inputValue.toLowerCase())
    );

    setFilteredItems(filtered);
  };
  return (
    <div className='searchpage-container'>
        <div className='searchpage-search-container'>
          <div className="searchpage-search-controls">
            <input id="search-input" type="text" placeholder="Search..."
            value={searchInput}
            onChange={handleSearchInputChange}
            />
            <button type="submit">
              <FontAwesomeIcon icon={faMagnifyingGlass}  />
            </button>
          </div>
          
          <div className="searchpage-search-items">
          
              {filteredItems.slice(0,30).map((item) => (
                <Link href={`/category/clothing/view/${item.id}`} key={item.id}>
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
  )
}

export default SearchPage