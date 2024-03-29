import Link from "next/link";
import { useEffect } from 'react';
import { useRouter } from 'next/router';
const NotFound = () => {
    //initialize router hook

    const router = useRouter();
    useEffect(() => {
        //redirect user on invalid link
        setTimeout(() => {
            router.push('/');
        }, 3000)
    },[])
    return (
        <div className='not-found'>
            <h1>Oooops...</h1>
            <h2>That page cannot be found</h2>
            <p>Go to the <Link href='/'><a>Homepage</a></Link></p>
        </div>
        
    )
}

export default NotFound
