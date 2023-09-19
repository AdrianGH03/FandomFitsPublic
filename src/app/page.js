import Image from 'next/image'
import Link from 'next/link'
import { auth, googleProvider, db } from '@/config/firebase-config.js';



export default function Home() {
  
  return (
    <main>
        <h1 className="SHOP">SHOP</h1>
        
        <div className="mainDisplay">
          <div className="mainShop">
            <a href="/category/mens"><Image src="/Images/pageImages/mensPage/mensshirtsboth.jpg" alt="" width={272} height={272}/></a>
            <a href="/category/mens">MENS</a>
          </div>
          <div className="mainShop">
            <Link href='/category/womens'><Image src="/Images/shopImages/shopwomens.jpg" alt="" width={272} height={272} /></Link>
            <Link href='/category/womens'>WOMENS</Link>
          </div>
          <div className="mainShop">
            <a href="/category/kids"><Image src="/Images/pageImages/kidsPage/kidstshirts.jpg" alt="" width={272} height={272} /></a>
            <a href="/category/kids">KIDS</a>
          </div>
          <div className="mainShop">
            <a href="/category/kids/clothing?filter=tshirts"><Image src="/Images/pageImages/kidsPage/kidstshirts.webp" alt="" width={272} height={272} /></a>
            <a href="/category/kids/clothing?filter=tshirts">T-SHIRTS</a>
          </div>
          <div className="mainShop">
            <a href="/category/womens/clothing?filter=tshirts"><img src="/Images/pageImages/womensPage/womenstshirts.jpg" alt="" width={272} height={272} /></a>
            <a href="/category/womens/clothing?filter=tshirts">T-SHIRTS</a>
          </div>
          <div className="mainShop">
            <a href="/category/mens/clothing?filter=tshirts"><Image src="/Images/shopImages/shoptshirts.jpg" alt="" width={272} height={272} /></a>
            <a href="/category/mens/clothing?filter=tshirts">T-SHIRTS</a>
          </div>
          <div className="mainShop">
            <a href="/category/mens/clothing?filter=accessories"><Image src="/Images/pageImages/mensPage/mensaccessories.jpg" alt="" width={272} height={272} /></a>
            <a href="/category/mens/clothing?filter=accessories">MENS</a>
          </div>
          <div className="mainShop">
            <a href="category/shoes"><Image src="/Images/pageImages/mensPage/mensshoes.jpg" alt="" width={272} height={272} /></a>
            <a href="category/shoes">SHOES</a>
          </div>
          <div className="mainShop">
            <a href="/category/accessories"><Image src="/Images/shopImages/shopjewel.jpg" alt="" width={272} height={272} /></a>
            <a href="/category/accessories">WOMENS</a>
          </div>
        </div>
      
    </main>
  )
}
