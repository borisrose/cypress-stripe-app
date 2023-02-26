
import Link from 'next/link'
import styles from './about.module.css'


export default function About(){



    return(

        
        <div className={styles.aboutContainer}>


            <div className={styles.aboutMessage}>

                <p> Page pour le test E2E </p>
                <Link href="/"> Retour à la page des produits </Link>
            </div>

        </div>



    )
}