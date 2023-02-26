
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import HomePage from './home-page'
import Link from 'next/link'


const inter = Inter({ subsets: ['latin'] })

async function getData() {

  return await (await fetch('http://localhost:3000/api/products', { cache:'no-store'})).json()

}



export default async function Home() {

  const data = await getData()


  return (
    <main className={styles.main}>



          <HomePage data={data} />
          <Link href='/about'>About</Link>


      
    </main>
  )
}
