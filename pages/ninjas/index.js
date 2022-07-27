import styles from '../../styles/Ninjas.module.css'
import Link from 'next/link';

export const getServerSideProps = async () => {
    const res = await fetch(process.env.NEXT_PUBLIC_USERS);

    const data = await res.json();
    return {
        props: { ninjas: data }
    }
}

const index = ({ninjas}) => {
    return (
        <div>
            <h1>All Ninjas</h1>
            {ninjas.map(ninja =>(
                <Link href={'/ninjas/' + ninja.id } key={ninja.id}>
                    <a className={styles.single}>
                        <h3>
                            {ninja.name}
                        </h3>
                    </a>
                </Link>
            ))}
        </div>
    )
}

export default index
