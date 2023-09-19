import Link from "next/link";

export default function Custom404() {
    return ( 
    <> 
        <div className="error-page">
            <h1>404 - Page Not Found</h1>
            <p>Sorry, the page you are looking for does not exist.</p>
            <p>Try going back to the previous page or go to the <Link href="/">Home page</Link>.</p>
        </div>
     </>
    )
}