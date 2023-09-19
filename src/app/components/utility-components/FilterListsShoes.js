export function applyFilterSpecial(filterWord, secondFilterWord, catList, setClothingList) {
    if (filterWord === 'mens' && secondFilterWord === 'sneakers') {
      const newList = catList.filter(item => item.subCat === 'sneakers' && item.topCat === 'mens');
      setClothingList(newList);
    
    } else if (filterWord === 'mens' && secondFilterWord === 'shoes') {
      const newList = catList.filter(item => item.topCat === 'mens');
      setClothingList(newList);
    } else if (secondFilterWord === 'sport' && filterWord === 'mens') {
      const newList = catList.filter(item => item.subCat === 'sport' && item.topCat === 'mens');
      setClothingList(newList);
    
    
    } else if (filterWord === 'womens' && secondFilterWord === 'sneakers'){
        const newList = catList.filter(item => item.subCat === 'sneakers' && item.topCat === 'womens');
        setClothingList(newList);
    } else if (filterWord === 'womens' && secondFilterWord === 'sport'){
        const newList = catList.filter(item => item.subCat === 'sport' && item.topCat === 'womens');
        setClothingList(newList);
    } else if (filterWord === 'womens' && secondFilterWord === 'shoes'){
        const newList = catList.filter(item => item.topCat === 'womens');
        setClothingList(newList);
    }


     else if (filterWord === 'kids' && secondFilterWord === 'sneakers'){
        const newList = catList.filter(item => item.subCat === 'sneakers' && item.topCat === 'kids');
        setClothingList(newList);
    } else if (filterWord === 'kids' && secondFilterWord === 'sport'){
        const newList = catList.filter(item => item.subCat === 'sport' && item.topCat === 'kids');
        setClothingList(newList);
    } else if (filterWord === 'kids' && secondFilterWord === 'shoes'){
        const newList = catList.filter(item => item.topCat === 'kids');
        setClothingList(newList);
    }   else if (filterWord === 'all' && secondFilterWord === 'all') {
        const newList = catList;
        setClothingList(newList);
      }

    else if(filterWord === 'shoes' && secondFilterWord === 'sneakers'){
        const newList = catList.filter(item => item.subCat === 'sneakers');
        setClothingList(newList);
    } else if(filterWord === 'shoes' && secondFilterWord === 'sport'){
        const newList = catList.filter(item => item.subCat === 'sport');
        setClothingList(newList);
    } 

    else if(filterWord === 'all' && secondFilterWord === 'sneakers'){
        const newList = catList.filter(item => item.subCat === 'sneakers');
        setClothingList(newList);
    } else if (filterWord === 'all' && secondFilterWord === 'sport'){
        const newList = catList.filter(item => item.subCat === 'sport');
        setClothingList(newList);
    }


    //accessories
    if (filterWord === 'mens' && secondFilterWord === 'bracelet') {
        const newList = catList.filter(item => item.subCat === 'bracelet' && item.topCat === 'mens');
        setClothingList(newList);
      
      }
    else if (filterWord === 'mens' && secondFilterWord === 'accessories') {
        const newList = catList.filter(item => item.topCat === 'mens');
        setClothingList(newList);
    } else if (secondFilterWord === 'necklace' && filterWord === 'mens') {
        const newList = catList.filter(item => item.subCat === 'necklace' && item.topCat === 'mens');
        setClothingList(newList);
    
    
    } else if (filterWord === 'womens' && secondFilterWord === 'bracelet'){
        const newList = catList.filter(item => item.subCat === 'bracelet' && item.topCat === 'womens');
        setClothingList(newList);
    } else if (filterWord === 'womens' && secondFilterWord === 'necklace'){
        const newList = catList.filter(item => item.subCat === 'necklace' && item.topCat === 'womens');
        setClothingList(newList);
    } else if (filterWord === 'womens' && secondFilterWord === 'accessories'){
        const newList = catList.filter(item => item.topCat === 'womens');
        setClothingList(newList);
    }


    else if (filterWord === 'kids' && secondFilterWord === 'bracelet'){
        const newList = catList.filter(item => item.subCat === 'bracelet' && item.topCat === 'kids');
        setClothingList(newList);
    } else if (filterWord === 'kids' && secondFilterWord === 'necklace'){
        const newList = catList.filter(item => item.subCat === 'necklace' && item.topCat === 'kids');
        setClothingList(newList);
    } else if (filterWord === 'kids' && secondFilterWord === 'accessories'){
        const newList = catList.filter(item => item.topCat === 'kids');
        setClothingList(newList);
    }   else if (filterWord === 'all' && secondFilterWord === 'all') {
        const newList = catList;
        setClothingList(newList);
        }

    else if(filterWord === 'accessories' && secondFilterWord === 'bracelet'){
        const newList = catList.filter(item => item.subCat === 'bracelet');
        setClothingList(newList);
    } else if(filterWord === 'accessories' && secondFilterWord === 'necklace'){
        const newList = catList.filter(item => item.subCat === 'necklace');
        setClothingList(newList);
    } 

    else if(filterWord === 'all' && secondFilterWord === 'bracelet'){
        const newList = catList.filter(item => item.subCat === 'bracelet');
        setClothingList(newList);
    } else if (filterWord === 'all' && secondFilterWord === 'necklace'){
        const newList = catList.filter(item => item.subCat === 'necklace');
        setClothingList(newList);
    }
  }

  