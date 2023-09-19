import React, { useEffect } from 'react';

const Dropdowns = () => {
  useEffect(() => {
    const dropdowns = document.querySelectorAll('#dropdown, #dropdown2, #dropdown3, #dropdown4, #dropdown5, #dropdown6, #dropdown7, #dropdown8, #dropdown9');
    const dropdownMenus = document.querySelectorAll('.dropdown-menu');

    const handleDropdownClick = (index) => {
      if (dropdowns[index].checked) {
        dropdownMenus[index].style.display = 'block';
      } else {
        dropdownMenus[index].style.display = 'none';
      }
    };

    dropdowns.forEach((dropdown, index) => {
      dropdown.addEventListener('click', () => {
        handleDropdownClick(index);
      });
    });

    
    return () => {
      dropdowns.forEach((dropdown) => {
        dropdown.removeEventListener('click', () => {
          handleDropdownClick(index);
        });
      });
    };
  }, []);

  return null; 
};

export default Dropdowns;