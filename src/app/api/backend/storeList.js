const list = [
    // //HOODIES
    { id: 1001, name: 'Amazing Spiderman Hoodie', mainCat: 'tops', subCat: 'hoodies', price: 24.99, img: '/Images/ClothingListItems/mens/tops/1.jpg', color: 'BLACK', topCat: 'mens'},
    { id: 1002, name: 'Miles Morales Logo Hoodie', mainCat: 'tops', subCat: 'hoodies', price: 24.99, img: '/Images/ClothingListItems/mens/tops/2.jpg', color: 'BLACK', topCat: 'mens'},
    { id: 1003, name: 'MCU Spiderman Hoodie', mainCat: 'tops', subCat: 'hoodies', price: 19.99, img: '/Images/ClothingListItems/mens/tops/3.jpg', color: 'BLACK', topCat: 'mens'},
    { id: 1004, name: 'Green Hoodie', mainCat: 'tops', subCat: 'hoodies', price: 29.99, img: '/Images/ClothingListItems/mens/tops/4.jpg', color: 'GREEN', topCat: 'mens'},
    { id: 1005, name: 'Brown Streetwear Hoodie', mainCat: 'tops', subCat: 'hoodies', price: 39.99, img: '/Images/ClothingListItems/mens/tops/5.jpg', color: 'BROWN', topCat: 'mens'},
    { id: 1006, name: 'Skeletal Love Hoodie', mainCat: 'tops', subCat: 'hoodies', price: 39.99, img: '/Images/ClothingListItems/mens/tops/6.jpg', color: 'BROWN', topCat: 'mens'},
    { id: 1007, name: 'Black and White Spider-punk Hoodie', mainCat: 'tops', subCat: 'hoodies', price: 24.99, img: '/Images/ClothingListItems/mens/tops/7.jpg', color: 'BLACK', topCat: 'mens'},
    { id: 1008, name: 'Supaidāman Hoodie', mainCat: 'tops', subCat: 'hoodies', price: 29.99, img: '/Images/ClothingListItems/mens/tops/8.jpg', color: 'BLACK', topCat: 'mens'},
    { id: 1009, name: 'Youth Streetwear Hoodie', mainCat: 'tops', subCat: 'hoodies', price: 24.99, img: '/Images/ClothingListItems/mens/tops/9.jpg', color: 'GRAY', topCat: 'mens'},
    { id: 1010, name: 'Brooklyn Visions Spiderman Hoodie', mainCat: 'tops', subCat: 'hoodies', price: 24.99, img: '/Images/ClothingListItems/mens/tops/10.jpg', color: 'BLACK', topCat: 'mens'},

    { id: 1011, name: 'Webbed Red Spider Hoodie', mainCat: 'tops', subCat: 'hoodies', price: 29.99, img: '/Images/ClothingListItems/womens/tops/1.jpg', color: 'RED', topCat: 'womens'},
    { id: 1012, name: 'Ghost Spider Hoodie', mainCat: 'tops', subCat: 'hoodies', price: 19.99, img: '/Images/ClothingListItems/womens/tops/2.jpg', color: 'BLACK', topCat: 'womens'},
    { id: 1013, name: 'Webbed Gray Spider Hoodie', mainCat: 'tops', subCat: 'hoodies', price: 24.99, img: '/Images/ClothingListItems/womens/tops/3.jpg', color: 'GRAY', topCat: 'womens'},
    { id: 1014, name: 'P*nk! Webbed Hoodie', mainCat: 'tops', subCat: 'hoodies', price: 29.99, img: '/Images/ClothingListItems/womens/tops/4.jpg', color: 'BLACK', topCat: 'womens'},
    { id: 1015, name: 'Spiderman Y2K Hoodie', mainCat: 'tops', subCat: 'hoodies', price: 39.99, img: '/Images/ClothingListItems/womens/tops/5.jpg', color: 'BLACK'},
    { id: 1016, name: 'Silver Studded Spider Hoodie', mainCat: 'tops', subCat: 'hoodies', price: 24.99, img: '/Images/ClothingListItems/womens/tops/6.jpg', color: 'BLACK', topCat: 'womens'},
    { id: 1017, name: '555 Webbed Hoodie', mainCat: 'tops', subCat: 'hoodies', price: 39.99, img: '/Images/ClothingListItems/womens/tops/7.jpg', color: 'BLACK', topCat: 'womens'},
    { id: 1018, name: 'Miles Morales Webbed Hoodie', mainCat: 'tops', subCat: 'hoodies', price: 39.99, img: '/Images/ClothingListItems/womens/tops/8.jpg', color: 'BLACK', topCat: 'womens'},
    { id: 1019, name: 'Silver Spider Web Hoodie', mainCat: 'tops', subCat: 'hoodies', price: 29.99, img: '/Images/ClothingListItems/womens/tops/9.jpg', color: 'BLACK', topCat: 'womens'},
    { id: 1020, name: 'SlightlyHated Brown Web Hoodie', mainCat: 'tops', subCat: 'hoodies', price: 24.99, img: '/Images/ClothingListItems/womens/tops/10.jpg', color: 'BROWN', topCat: 'womens'},

    { id: 1021, name: 'Gray Spiderman Hoodie', mainCat: 'tops', subCat: 'hoodies', price: 19.99, img: '/Images/ClothingListItems/kids/tops/1.jpg', color: 'GRAY', topCat: 'kids'},
    { id: 1022, name: 'Spiderman Masked Hoodie', mainCat: 'tops', subCat: 'hoodies', price: 24.99, img: '/Images/ClothingListItems/kids/tops/2.jpg', color: 'RED', topCat: 'kids'},
    { id: 1023, name: 'Friendly Spidey Hoodie', mainCat: 'tops', subCat: 'hoodies', price: 19.99, img: '/Images/ClothingListItems/kids/tops/3.jpg', color: 'RED', topCat: 'kids'},
    { id: 1024, name: 'Ghost Spider Kids Hoodie', mainCat: 'tops', subCat: 'hoodies', price: 29.99, img: '/Images/ClothingListItems/kids/tops/4.webp', color: 'WHITE', topCat: 'kids'},
    { id: 1025, name: 'Spiderman Casual Hoodie', mainCat: 'tops', subCat: 'hoodies', price: 19.99, img: '/Images/ClothingListItems/kids/tops/5.jpg', color: 'RED', topCat: 'kids'},
    { id: 1026, name: 'Black and Red 2-Pack Spiderman Hoodies', mainCat: 'tops', subCat: 'hoodies', price: 39.99, img: '/Images/ClothingListItems/kids/tops/6.jpg', color: 'RED/BLACK', topCat: 'kids'},
    { id: 1027, name: 'White Tie-dyed Spiderman Hoodie', mainCat: 'tops', subCat: 'hoodies', price: 24.99, img: '/Images/ClothingListItems/kids/tops/7.jpg', color: 'WHITE', topCat: 'kids'},
    { id: 1028, name: 'Comfy Spiderman Hoodie', mainCat: 'tops', subCat: 'hoodies', price: 24.99, img: '/Images/ClothingListItems/kids/tops/8.jpg', color: 'RED', topCat: 'kids'},
    { id: 1029, name: 'Gray and Red 2-Pack Spiderman Hoodies', mainCat: 'tops', subCat: 'hoodies', price: 39.99, img: '/Images/ClothingListItems/kids/tops/9.jpg', color: 'RED/GRAY', topCat: 'kids'},
    { id: 1030, name: 'Friendly Ghost Spider Hoodie', mainCat: 'tops', subCat: 'hoodies', price: 19.99, img: '/Images/ClothingListItems/kids/tops/10.jpg', color: 'PINK', topCat: 'kids'},


    //T SHIRTS
    { id: 1031, name: 'Carnage T-Shirt', mainCat: 'tops', subCat: 'tshirts', price: 24.99, img: '/Images/ClothingListItems/mens/tops/11.jpg', color: 'BLACK', topCat: 'mens'},
    { id: 1032, name: 'Miles Morales Comic Issue T-Shirt', mainCat: 'tops', subCat: 'tshirts', price: 19.99, img: '/Images/ClothingListItems/mens/tops/12.jpg', color: 'BLACK', topCat: 'mens'},
    { id: 1033, name: 'Spider-Punk Red T-Shirt', mainCat: 'tops', subCat: 'tshirts', price: 24.99, img: '/Images/ClothingListItems/mens/tops/13.jpg', color: 'RED', topCat: 'mens'},
    { id: 1034, name: 'Amazing Spiderman T-Shirt', mainCat: 'tops', subCat: 'tshirts', price: 14.99, img: '/Images/ClothingListItems/mens/tops/14.jpg', color: 'BLACK', topCat: 'mens'},
    { id: 1035, name: 'Spider-Punk Colorful T-Shirt', mainCat: 'tops', subCat: 'tshirts', price: 19.99, img: '/Images/ClothingListItems/mens/tops/15.jpg', color: 'BLACK', topCat: 'mens'},
    { id: 1036, name: 'Gray Spiderman Comic T-Shirt', mainCat: 'tops', subCat: 'tshirts', price: 24.99, img: '/Images/ClothingListItems/mens/tops/16.jpg', color: 'GRAY', topCat: 'mens'},
    { id: 1037, name: 'Supaidāman T-Shirt', mainCat: 'tops', subCat: 'tshirts', price: 19.99, img: '/Images/ClothingListItems/mens/tops/17.jpg', color: 'BLACK', topCat: 'mens'},
    { id: 1038, name: 'Blue/Black Amazing Spiderman T-Shirt', mainCat: 'tops', subCat: 'tshirts', price: 22.99, img: '/Images/ClothingListItems/mens/tops/18.jpg', color: 'BLACK', topCat: 'mens'},
    { id: 1039, name: 'Marvel Age Spiderman T-Shirt', mainCat: 'tops', subCat: 'tshirts', price: 19.99, img: '/Images/ClothingListItems/mens/tops/19.jpg', color: 'WHITE', topCat: 'mens'},
    { id: 1040, name: 'Green Goblin T-Shirt', mainCat: 'tops', subCat: 'tshirts', price: 24.99, img: '/Images/ClothingListItems/mens/tops/20.jpg', color: 'GREEN', topCat: 'mens'},

    { id: 1041, name: 'Amazing Spiderman White T-Shirt', mainCat: 'tops', subCat: 'tshirts', price: 19.99, img: '/Images/ClothingListItems/womens/tops/11.jpg', color: 'WHITE', topCat: 'womens'},
    { id: 1042, name: 'Ghost-Spider T-Shirt', mainCat: 'tops', subCat: 'tshirts', price: 19.99, img: '/Images/ClothingListItems/womens/tops/12.jpg', color: 'BLACK', topCat: 'womens'},
    { id: 1043, name: 'Blue Spiderman Pocket T-Shirt', mainCat: 'tops', subCat: 'tshirts', price: 24.99, img: '/Images/ClothingListItems/womens/tops/13.jpg', color: 'BLUE', topCat: 'womens'},
    { id: 1044, name: 'Spiderman Portrait T-Shirt', mainCat: 'tops', subCat: 'tshirts', price: 14.99, img: '/Images/ClothingListItems/womens/tops/14.jpg', color: 'WHITE', topCat: 'womens'},
    { id: 1045, name: 'MJ Comic T-Shirt', mainCat: 'tops', subCat: 'tshirts', price: 19.99, img: '/Images/ClothingListItems/womens/tops/15.jpg', color: 'GRAY', topCat: 'womens'},
    { id: 1046, name: 'Amazing Spiderman Baseball Tee', mainCat: 'tops', subCat: 'tshirts', price: 24.99, img: '/Images/ClothingListItems/womens/tops/16.jpg', color: 'WHITE', topCat: 'womens'},
    { id: 1047, name: 'Spiderman 2099 T-Shirt', mainCat: 'tops', subCat: 'tshirts', price: 19.99, img: '/Images/ClothingListItems/womens/tops/17.jpg', color: 'BLACK', topCat: 'womens'},
    { id: 1048, name: 'Spider-Punk Pink T-shirt', mainCat: 'tops', subCat: 'tshirts', price: 22.99, img: '/Images/ClothingListItems/womens/tops/18.jpg', color: 'BLACK', topCat: 'womens'},
    { id: 1049, name: 'Spiderman Heart Tie-Dye T-Shirt', mainCat: 'tops', subCat: 'tshirts', price: 19.99, img: '/Images/ClothingListItems/womens/tops/19.jpg', color: 'GRAY', topCat: 'womens'},
    { id: 1050, name: 'The Spot T-Shirt', mainCat: 'tops', subCat: 'tshirts', price: 24.99, img: '/Images/ClothingListItems/womens/tops/20.jpg', color: 'CREAM', topCat: 'womens'},

    { id: 1051, name: 'Miles Morales Logo T-Shirt', mainCat: 'tops', subCat: 'tshirts', price: 19.99, img: '/Images/ClothingListItems/kids/tops/11.jpg', color: 'BLACK', topCat: 'kids'},
    { id: 1052, name: 'Spiderman Cartoon Head T-Shirt', mainCat: 'tops', subCat: 'tshirts', price: 19.99, img: '/Images/ClothingListItems/kids/tops/12.jpg', color: 'RED', topCat: 'kids'},
    { id: 1053, name: 'Tie-Dye Amazing Spiderman Logo T-Shirt', mainCat: 'tops', subCat: 'tshirts', price: 24.99, img: '/Images/ClothingListItems/kids/tops/13.jpg', color: 'GRAY', topCat: 'kids'},
    { id: 1054, name: 'Amazing Spiderman Comic T-Shirt', mainCat: 'tops', subCat: 'tshirts', price: 14.99, img: '/Images/ClothingListItems/kids/tops/14.jpg', color: 'BLUE', topCat: 'kids'},
    { id: 1055, name: 'Spider-Gwen City T-Shirt', mainCat: 'tops', subCat: 'tshirts', price: 19.99, img: '/Images/ClothingListItems/kids/tops/15.jpg', color: 'BLACK', topCat: 'kids'},
    { id: 1056, name: 'Team-Up! Spidey T-Shirt', mainCat: 'tops', subCat: 'tshirts', price: 24.99, img: '/Images/ClothingListItems/kids/tops/16.jpg', color: 'WHITE', topCat: 'kids'},
    { id: 1057, name: 'Spider-Gwen Webbed T-Shirt', mainCat: 'tops', subCat: 'tshirts', price: 19.99, img: '/Images/ClothingListItems/kids/tops/17.jpg', color: 'WHITE', topCat: 'kids'},    
    { id: 1058, name: 'Friendly Spidey Crew T-Shirt', mainCat: 'tops', subCat: 'tshirts', price: 22.99, img: '/Images/ClothingListItems/kids/tops/18.jpg', color: 'WHITE', topCat: 'kids'},
    { id: 1059, name: 'Spider Heroes Unite T-Shirt', mainCat: 'tops', subCat: 'tshirts', price: 19.99, img: '/Images/ClothingListItems/kids/tops/19.jpg', color: 'BLUE', topCat: 'kids'},
    { id: 1060, name: 'Ghost-Spider T-Shirt', mainCat: 'tops', subCat: 'tshirts', price: 24.99, img: '/Images/ClothingListItems/kids/tops/20.jpg', color: 'WHITE', topCat: 'kids'},






    //PANTS
    { id: 2001, name: 'Supaidāman Sweatpants', mainCat: 'bottoms', subCat: 'sweatpants', price: 24.99, img: '/Images/ClothingListItems/mens/bottoms/1.jpg', color: 'BLACK', topCat: 'mens'},
    { id: 2002, name: 'Red Webbed Sweatpants', mainCat: 'bottoms', subCat: 'sweatpants', price: 19.99, img: '/Images/ClothingListItems/mens/bottoms/2.jpg', color: 'BLACK', topCat: 'mens'},
    { id: 2003, name: 'The Amazing Spiderman Sweatpants', mainCat: 'bottoms', subCat: 'sweatpants', price: 24.99, img: '/Images/ClothingListItems/mens/bottoms/3.jpg', color: 'BLACK', topCat: 'mens'},
    { id: 2004, name: 'Web-Head Jeans', mainCat: 'bottoms', subCat: 'jeans', price: 34.99, img: '/Images/ClothingListItems/mens/bottoms/4.jpg', color: 'BLUE', topCat: 'mens'},
    { id: 2005, name: 'Black Cargo Sweatpants', mainCat: 'bottoms', subCat: 'sweatpants', price: 29.99, img: '/Images/ClothingListItems/mens/bottoms/5.jpg', color: 'BLACK', topCat: 'mens'},
    { id: 2006, name: 'Webbed Black Jeans', mainCat: 'bottoms', subCat: 'jeans', price: 39.99, img: '/Images/ClothingListItems/mens/bottoms/6.jpg', color: 'BLACK', topCat: 'mens'},
    { id: 2007, name: 'Classic Denim Jeans', mainCat: 'bottoms', subCat: 'jeans', price: 34.99, img: '/Images/ClothingListItems/mens/bottoms/7.jpg', color: 'BLUE', topCat: 'mens'},
    { id: 2008, name: 'Star Webbed Sweatpants', mainCat: 'bottoms', subCat: 'sweatpants', price: 29.99, img: '/Images/ClothingListItems/mens/bottoms/8.jpg', color: 'BLACK', topCat: 'mens'},
    { id: 2009, name: 'Black Spider Webbed Jeans', mainCat: 'bottoms', subCat: 'jeans', price: 34.99, img: '/Images/ClothingListItems/mens/bottoms/9.jpg', color: 'BLACK', topCat: 'mens'},
    { id: 2010, name: 'Amazing Spiderman Shorts', mainCat: 'bottoms', subCat: 'shorts', price: 24.99, img: '/Images/ClothingListItems/mens/bottoms/10.jpg', color: 'BLACK', topCat: 'mens'},


    { id: 2011, name: 'Brown Electric Sweatpants', mainCat: 'bottoms', subCat: 'sweatpants', price: 24.99, img: '/Images/ClothingListItems/womens/pants/1.jpg', color: 'BROWN', topCat: 'womens'},
    { id: 2012, name: 'Black Webbed Leggings', mainCat: 'bottoms', subCat: 'leggings', price: 19.99, img: '/Images/ClothingListItems/womens/pants/2.jpg', color: 'BLACK', topCat: 'womens'},
    { id: 2013, name: 'Spiderman Heart Sweatpants', mainCat: 'bottoms', subCat: 'sweatpants', price: 24.99, img: '/Images/ClothingListItems/womens/pants/3.jpg', color: 'GRAY', topCat: 'womens'},
    { id: 2014, name: 'Webbed Black Chain Pants', mainCat: 'bottoms', subCat: 'pants', price: 34.99, img: '/Images/ClothingListItems/womens/pants/4.jpg', color: 'BLACK', topCat: 'womens'},
    { id: 2015, name: 'Black Cargo Pants', mainCat: 'bottoms', subCat: 'pants', price: 29.99, img: '/Images/ClothingListItems/womens/pants/5.jpg', color: 'BLACK', topCat: 'womens'},
    { id: 2016, name: 'Purple Webbed Star Pants', mainCat: 'bottoms', subCat: 'pants', price: 39.99, img: '/Images/ClothingListItems/womens/pants/6.jpg', color: 'PURPLE', topCat: 'womens'},
    { id: 2017, name: 'Spider Web Leggings', mainCat: 'bottoms', subCat: 'leggings', price: 14.99, img: '/Images/ClothingListItems/womens/pants/7.jpg', color: 'BLACK', topCat: 'womens'},
    { id: 2018, name: 'Spider-Themed Pants', mainCat: 'bottoms', subCat: 'pants', price: 29.99, img: '/Images/ClothingListItems/womens/pants/8.webp', color: 'GRAY', topCat: 'womens'},
    { id: 2019, name: 'Blue Spiderman Sweatpants', mainCat: 'bottoms', subCat: 'sweatpants', price: 34.99, img: '/Images/ClothingListItems/womens/pants/9.jpg', color: 'BLUE', topCat: 'womens'},
    { id: 2020, name: 'Webbed Pants', mainCat: 'bottoms', subCat: 'pants', price: 24.99, img: '/Images/ClothingListItems/womens/pants/10.jpg', color: 'BLACK', topCat: 'womens'},

    { id: 2021, name: 'Spiderman Black and Gray 2-Pack Sweatpants', mainCat: 'bottoms', subCat: 'sweatpants', price: 24.99, img: '/Images/ClothingListItems/kids/pants/1.jpg', color: 'BLACK/GRAY', topCat: 'kids'},
    { id: 2022, name: 'Spiderman Black and Red 2-Pack Sweatpants', mainCat: 'bottoms', subCat: 'sweatpants', price: 24.99, img: '/Images/ClothingListItems/kids/pants/2.jpg', color: 'BLACK/RED', topCat: 'kids'},
    { id: 2023, name: 'Spiderman 3-Pack Sweatpants', mainCat: 'bottoms', subCat: 'sweatpants', price: 34.99, img: '/Images/ClothingListItems/kids/pants/3.jpg', color: 'MULTIPLE', topCat: 'kids'},
    { id: 2024, name: 'Spiderman Red and Blue 2-Pack Sweatpants', mainCat: 'bottoms', subCat: 'sweatpants', price: 34.99, img: '/Images/ClothingListItems/kids/pants/4.jpg', color: 'RED/BLUE', topCat: 'kids'},
    { id: 2025, name: 'Spiderman Blue and White 2-Pack Sweatpants', mainCat: 'bottoms', subCat: 'sweatpants', price: 29.99, img: '/Images/ClothingListItems/kids/pants/5.jpg', color: 'BLUE/WHITE', topCat: 'kids'},
    { id: 2026, name: 'Spiderman Black and White 2-Pack Sweatpants', mainCat: 'bottoms', subCat: 'sweatpants', price: 39.99, img: '/Images/ClothingListItems/kids/pants/6.jpg', color: 'BLACK/WHITE', topCat: 'kids'},
    { id: 2027, name: 'Spiderman Suit Sweatpants', mainCat: 'bottoms', subCat: 'sweatpants', price: 14.99, img: '/Images/ClothingListItems/kids/pants/7.jpg', color: 'BLUE', topCat: 'kids'},
    { id: 2028, name: 'Red Spiderman Sweatpants', mainCat: 'bottoms', subCat: 'sweatpants', price: 14.99, img: '/Images/ClothingListItems/kids/pants/8.jpg', color: 'RED', topCat: 'kids'},
    { id: 2029, name: 'Gray Friendly Spidey Sweatpants', mainCat: 'bottoms', subCat: 'sweatpants', price: 14.99, img: '/Images/ClothingListItems/kids/pants/9.jpg', color: 'GRAY', topCat: 'kids'},
    { id: 2030, name: 'Pink And Blue Spidey Sweatpants', mainCat: 'bottoms', subCat: 'sweatpants', price: 14.99, img: '/Images/ClothingListItems/kids/pants/10.jpg', color: 'PINK/BLUE', topCat: 'kids'},



    //SHOES
    { id: 3001, name: 'Black and Red Nike Shoes', mainCat: 'shoes', subCat: 'sport', price: 44.99, img: '/Images/ClothingListItems/mens/shoes/1.jpg', color: 'RED/BLUE', topCat: 'mens'},
    { id: 3002, name: 'Black and Gray Nike Shoes', mainCat: 'shoes', subCat: 'sport', price: 54.99, img: '/Images/ClothingListItems/mens/shoes/2.jpg', color: 'BLACK/GRAY', topCat: 'mens'},
    { id: 3003, name: 'Red and White Nike Shoes', mainCat: 'shoes', subCat: 'sport', price: 54.99, img: '/Images/ClothingListItems/mens/shoes/3.jpg', color: 'WHITE/RED', topCat: 'mens'},
    { id: 3004, name: 'Black and Red Nike Shoes', mainCat: 'shoes', subCat: 'sport', price: 64.99, img: '/Images/ClothingListItems/mens/shoes/4.jpg', color: 'BLACK/RED', topCat: 'mens'},
    { id: 3005, name: 'Black and White Nike Shoes', mainCat: 'shoes', subCat: 'sport', price: 44.99, img: '/Images/ClothingListItems/mens/shoes/5.jpg', color: 'BLACK/WHITE', topCat: 'mens'},
    { id: 3006, name: 'Brown Nike Shoes', mainCat: 'shoes', subCat: 'sport', price: 54.99, img: '/Images/ClothingListItems/mens/shoes/6.jpg', color: 'BLACK/BROWN', topCat: 'mens'},
    { id: 3007, name: 'Red Low-Top Converse Shoes', mainCat: 'shoes', subCat: 'sneakers', price: 34.99, img: '/Images/ClothingListItems/mens/shoes/7.jpg', color: 'RED', topCat: 'mens'},
    { id: 3008, name: 'Blue High-Top Converse Shoes', mainCat: 'shoes', subCat: 'sneakers', price: 44.99, img: '/Images/ClothingListItems/mens/shoes/8.jpg', color: 'BLUE', topCat: 'mens'},
    { id: 3009, name: 'Black and White High-Top Converse Shoes', mainCat: 'shoes', subCat: 'sneakers', price: 44.99, img: '/Images/ClothingListItems/mens/shoes/9.jpg', color: 'BLACK/WHITE', topCat: 'mens'},
    { id: 3010, name: 'Red Low-top Puma Shoes', mainCat: 'shoes', subCat: 'sneakers', price: 44.99, img: '/Images/ClothingListItems/mens/shoes/10.jpg', color: 'RED', topCat: 'mens'},

    { id: 3011, name: 'Webbed Spider Boots', mainCat: 'shoes', subCat: 'boots', price: 44.99, img: '/Images/ClothingListItems/womens/shoes/1.jpg', color: 'BLACK', topCat: 'womens'},
    { id: 3012, name: 'Pink Nike Shoes', mainCat: 'shoes', subCat: 'sport', price: 54.99, img: '/Images/ClothingListItems/womens/shoes/2.jpg', color: 'PINK/WHITE', topCat: 'womens'},
    { id: 3013, name: 'ASTV Inspired Nike Shoes', mainCat: 'shoes', subCat: 'sport', price: 54.99, img: '/Images/ClothingListItems/womens/shoes/3.jpg', color: 'RED', topCat: 'womens'},
    { id: 3014, name: 'White Cloud Shoes', mainCat: 'shoes', subCat: 'shoes', price: 64.99, img: '/Images/ClothingListItems/womens/shoes/4.jpg', color: 'WHITE', topCat: 'womens'},
    { id: 3015, name: 'Baby Blue Slippers', mainCat: 'shoes', subCat: 'shoes', price: 34.99, img: '/Images/ClothingListItems/womens/shoes/5.jpg', color: 'BLUE', topCat: 'womens'},
    { id: 3016, name: 'Black Low-Top Converse Shoes', mainCat: 'shoes', subCat: 'sneakers', price: 34.99, img: '/Images/ClothingListItems/womens/shoes/6.jpg', color: 'BLACK', topCat: 'womens'},
    { id: 3017, name: 'Red High-Top Converse Shoes', mainCat: 'shoes', subCat: 'sneakers', price: 44.99, img: '/Images/ClothingListItems/womens/shoes/7.jpg', color: 'RED', topCat: 'womens'},
    { id: 3018, name: 'Baby Blue Nike Shoes', mainCat: 'shoes', subCat: 'sport', price: 44.99, img: '/Images/ClothingListItems/womens/shoes/8.jpg', color: 'BLUE', topCat: 'womens'},
    { id: 3019, name: 'Red Webbed Running Shoes', mainCat: 'shoes', subCat: 'sport', price: 34.99, img: '/Images/ClothingListItems/womens/shoes/9.jpg', color: 'RED', topCat: 'womens'},
    { id: 3020, name: 'Black Webbed Running Shoes', mainCat: 'shoes', subCat: 'sport', price: 34.99, img: '/Images/ClothingListItems/womens/shoes/10.jpg', color: 'BLACK', topCat: 'womens'},

    { id: 3021, name: 'Spiderman Blue Velcro Shoes', mainCat: 'shoes', subCat: 'sport', price: 14.99, img: '/Images/ClothingListItems/kids/shoes/1.jpg', color: 'BLLUE', topCat: 'kids'},
    { id: 3022, name: 'Miles Morales Black Velcro Shoes', mainCat: 'shoes', subCat: 'sport', price: 14.99, img: '/Images/ClothingListItems/kids/shoes/2.jpg', color: 'BLACK', topCat: 'kids'},
    { id: 3023, name: 'Blue Spider Light-up Shoes', mainCat: 'shoes', subCat: 'sport', price: 24.99, img: '/Images/ClothingListItems/kids/shoes/3.jpg', color: 'BLUE', topCat: 'kids'},
    { id: 3024, name: 'Red Spidey Clogs', mainCat: 'shoes', subCat: 'shoes', price: 24.99, img: '/Images/ClothingListItems/kids/shoes/4.jpg', color: 'RED', topCat: 'kids'},
    { id: 3025, name: 'Red Spiderman Light-up Shoes', mainCat: 'shoes', subCat: 'sport', price: 19.99, img: '/Images/ClothingListItems/kids/shoes/5.jpg', color: 'RED', topCat: 'kids'},
    { id: 3026, name: 'Spider-Gwen Pink Light-up Shoes', mainCat: 'shoes', subCat: 'sport', price: 19.99, img: '/Images/ClothingListItems/kids/shoes/6.jpg', color: 'PINK', topCat: 'kids'},
    { id: 3027, name: 'Spiderman Blue Light-up Shoes', mainCat: 'shoes', subCat: 'sport', price: 19.99, img: '/Images/ClothingListItems/kids/shoes/7.jpg', color: 'BLUE', topCat: 'kids'},
    { id: 3028, name: 'Kids Red Low-top Converse Shoes', mainCat: 'shoes', subCat: 'sneakers', price: 24.99, img: '/Images/ClothingListItems/kids/shoes/8.jpg', color: 'RED', topCat: 'kids'},
    { id: 3029, name: 'Kids Black Low-top Converse Shoes', mainCat: 'shoes', subCat: 'sneakers', price: 24.99, img: '/Images/ClothingListItems/kids/shoes/9.jpg', color: 'BLACK', topCat: 'kids'},
    { id: 3030, name: 'Kids Pink Low-top Converse Shoes', mainCat: 'shoes', subCat: 'sneakers', price: 24.99, img: '/Images/ClothingListItems/kids/shoes/10.jpg', color: 'PINK', topCat: 'kids'},




    //Accessories
    { id: 4001, name: 'Silver Spiderman Logo Necklace', mainCat: 'accessories', subCat: 'necklace', price: 7.99, img: '/Images/ClothingListItems/mens/accessories/1.jpg', color: 'SILVER', topCat: 'mens'},
    { id: 4002, name: 'Red Spiderman Head Necklace', mainCat: 'accessories', subCat: 'necklace', price: 10.99, img: '/Images/ClothingListItems/mens/accessories/2.jpg', color: 'RED', topCat: 'mens'},
    { id: 4003, name: 'Duo Partner Spider Bracelets', mainCat: 'accessories', subCat: 'bracelet', price: 14.99, img: '/Images/ClothingListItems/mens/accessories/3.jpg', color: 'BLACK/WHITE', topCat: 'mens'},
    { id: 4004, name: 'Black and Red Spiderman Bracelet', mainCat: 'accessories', subCat: 'bracelet', price: 9.99, img: '/Images/ClothingListItems/mens/accessories/4.jpg', color: 'BLACK/RED', topCat: 'mens'},
    { id: 4005, name: 'Black and Silver Spider Necklace', mainCat: 'accessories', subCat: 'necklace', price: 9.99, img: '/Images/ClothingListItems/mens/accessories/5.jpg', color: 'BLACK', topCat: 'mens'},
    { id: 4006, name: 'Black Spider Necklace', mainCat: 'accessories', subCat: 'necklace', price: 9.99, img: '/Images/ClothingListItems/mens/accessories/6.jpg', color: 'BLACK', topCat: 'mens'},
    { id: 4007, name: 'Spiderman Body Necklace', mainCat: 'accessories', subCat: 'necklace', price: 14.99, img: '/Images/ClothingListItems/mens/accessories/7.jpg', color: 'RED/SILVER', topCat: 'mens'},
    { id: 4008, name: 'Black and Red Spiderman Bracelet', mainCat: 'accessories', subCat: 'bracelet', price: 9.99, img: '/Images/ClothingListItems/mens/accessories/8.jpg', color: 'BLACK/RED', topCat: 'mens'},
    { id: 4009, name: 'Black and Red Amazing Spiderman Bracelet', mainCat: 'accessories', subCat: 'bracelet', price: 10.99, img: '/Images/ClothingListItems/mens/accessories/9.jpg', color: 'BLACK/RED', topCat: 'mens'},
    { id: 4010, name: 'Black and Silver Spider Bracelet', mainCat: 'accessories', subCat: 'bracelet', price: 10.99, img: '/Images/ClothingListItems/mens/accessories/10.jpg', color: 'BLACK/RED', topCat: 'mens'},

    { id: 4011, name: 'Black Spider Teardrop Necklace', mainCat: 'accessories', subCat: 'necklace', price: 9.99, img: '/Images/ClothingListItems/womens/accessories/1.jpg', color: 'BLACK', topCat: 'womens'},
    { id: 4012, name: 'Silver Web Necklace', mainCat: 'accessories', subCat: 'necklace', price: 9.99, img: '/Images/ClothingListItems/womens/accessories/2.jpg', color: 'SILVER', topCat: 'womens'},
    { id: 4013, name: 'Red Crystal Spider Necklace', mainCat: 'accessories', subCat: 'necklace', price: 14.99, img: '/Images/ClothingListItems/womens/accessories/3.jpg', color: 'BLACK/RED', topCat: 'womens'},
    { id: 4014, name: 'Black Jewel Spider Necklace', mainCat: 'accessories', subCat: 'necklace', price: 24.99, img: '/Images/ClothingListItems/womens/accessories/4.jpg', color: 'BLACK', topCat: 'womens'},
    { id: 4015, name: 'Gold Web Necklace', mainCat: 'accessories', subCat: 'necklace', price: 19.99, img: '/Images/ClothingListItems/womens/accessories/5.jpg', color: 'GOLD', topCat: 'womens'},
    { id: 4016, name: 'Spiderman Heart Silver Bracelet', mainCat: 'accessories', subCat: 'bracelet', price: 14.99, img: '/Images/ClothingListItems/womens/accessories/6.jpg', color: 'SILVER', topCat: 'womens'},
    { id: 4017, name: 'Silver Webbed Spider Bracelet', mainCat: 'accessories', subCat: 'bracelet', price: 9.99, img: '/Images/ClothingListItems/womens/accessories/7.jpg', color: 'SILVER', topCat: 'womens'},
    { id: 4018, name: 'Great Responsibility Silver Bracelet', mainCat: 'accessories', subCat: 'bracelet', price: 9.99, img: '/Images/ClothingListItems/womens/accessories/8.jpg', color: 'SILVER', topCat: 'womens'},
    { id: 4019, name: 'Spider-Family Bracelet', mainCat: 'accessories', subCat: 'bracelet', price: 19.99, img: '/Images/ClothingListItems/womens/accessories/9.jpg', color: 'SILVER', topCat: 'womens'},
    { id: 4020, name: 'Black Spider Leather Bracelet', mainCat: 'accessories', subCat: 'bracelet', price: 9.99, img: '/Images/ClothingListItems/womens/accessories/10.jpg', color: 'BLACK/SILVER', topCat: 'womens'},

    { id: 4021, name: 'Spiderman Necklaces 3-Pack', mainCat: 'accessories', subCat: 'necklace', price: 19.99, img: '/Images/ClothingListItems/kids/accessories/1.jpg', color: 'MULTIPLE', topCat: 'kids'},
    { id: 4022, name: 'Spiderman Color Necklace 5-Pack', mainCat: 'accessories', subCat: 'necklace', price: 19.99, img: '/Images/ClothingListItems/kids/accessories/2.jpg', color: 'MULTIPLE', topCat: 'kids'},
    { id: 4023, name: 'Spiderman Head Necklace', mainCat: 'accessories', subCat: 'necklace', price: 9.99, img: '/Images/ClothingListItems/kids/accessories/3.jpg', color: 'SILVER/RED', topCat: 'kids'},
    { id: 4024, name: 'Spiderman Heart Necklace', mainCat: 'accessories', subCat: 'necklace', price: 9.99, img: '/Images/ClothingListItems/kids/accessories/4.jpg', color: 'SILVER/RED', topCat: 'kids'},
    { id: 4025, name: 'Gold Spiderman Logo Necklace', mainCat: 'accessories', subCat: 'necklace', price: 14.99, img: '/Images/ClothingListItems/kids/accessories/5.jpg', color: 'GOLD', topCat: 'kids'},
    { id: 4026, name: 'Insomniac Spiderman Bracelet', mainCat: 'accessories', subCat: 'bracelet', price: 7.99, img: '/Images/ClothingListItems/kids/accessories/6.jpg', color: 'BLACK', topCat: 'kids'},
    { id: 4027, name: '9-Pack Spiderman Bracelets', mainCat: 'accessories', subCat: 'bracelet', price: 7.99, img: '/Images/ClothingListItems/kids/accessories/7.jpg', color: 'BLACK', topCat: 'kids'},
    { id: 4028, name: '18-Pack Black and Red Spiderman Bracelets', mainCat: 'accessories', subCat: 'bracelet', price: 17.99, img: '/Images/ClothingListItems/kids/accessories/8.jpg', color: 'BLACK/RED', topCat: 'kids'},
    { id: 4029, name: 'Spider-Friends Friendship Bracelets', mainCat: 'accessories', subCat: 'bracelet', price: 14.99, img: '/Images/ClothingListItems/kids/accessories/9.jpg', color: 'WHITE/RED', topCat: 'kids'},
    { id: 4030, name: 'Spiderman Cartoon Head Necklace', mainCat: 'accessories', subCat: 'necklace', price: 9.99, img: '/Images/ClothingListItems/kids/accessories/10.jpg', color: 'RED/GOLD', topCat: 'kids'},






]
export default list;
