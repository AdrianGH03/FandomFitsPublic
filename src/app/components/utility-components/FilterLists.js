export function applyFilter(filterWord, catList, setClothingList) {
    if (filterWord === 'hoodies') {
      const newList = catList.filter(item => item.subCat === 'hoodies');
      setClothingList(newList);
    } else if (filterWord === 'tshirts') {
      const newList = catList.filter(item => item.subCat === 'tshirts');
      setClothingList(newList);
    } else if (filterWord === 'sweatpants') {
      const newList = catList.filter(item => item.subCat === 'sweatpants');
      setClothingList(newList);
    } else if (filterWord === 'jeans') {
      const newList = catList.filter(item => item.subCat === 'jeans');
      setClothingList(newList);
    } else if (filterWord === 'shorts') {
      const newList = catList.filter(item => item.subCat === 'shorts');
      setClothingList(newList);
    } else if (filterWord === 'sneakers') {
      const newList = catList.filter(item => item.subCat === 'sneakers');
      setClothingList(newList);
    } else if (filterWord === 'sport') {
      const newList = catList.filter(item => item.subCat === 'sport');
      setClothingList(newList);
    } else if (filterWord === 'necklace') {
      const newList = catList.filter(item => item.subCat === 'necklace');
      setClothingList(newList);
    } else if (filterWord === 'bracelet') {
      const newList = catList.filter(item => item.subCat === 'bracelet');
      setClothingList(newList);
    } else if (filterWord === 'accessories') {
      const newList = catList.filter(item => item.mainCat === 'accessories');
      setClothingList(newList);
    } else if (filterWord === 'bottoms') {
      const newList = catList.filter(item => item.mainCat === 'bottoms');
      setClothingList(newList);
    } else if (filterWord === 'shoes') {
      const newList = catList.filter(item => item.mainCat === 'shoes');
      setClothingList(newList);
    } else if (filterWord === 'tops') {
      const newList = catList.filter(item => item.mainCat === 'tops');
      setClothingList(newList);
    } else if (filterWord === 'pants'){
      const newList = catList.filter(item => item.subCat === 'pants');
      setClothingList(newList);

    
    } else if(filterWord === 'leggings'){
      const newList = catList.filter(item => item.subCat === 'leggings');
      setClothingList(newList);

    
    } else if (filterWord === 'all') {
      const newList = catList;
      setClothingList(newList);
    }
  }