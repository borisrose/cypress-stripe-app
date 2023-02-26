'use client'

import Image from 'next/image'
import styles from './home-page.module.css'


export interface Products {

    data: any
}


interface Car {
    title: string,
    id: number,
    url:string,
    price:number,
}

export default function HomePage(props:Products){

    const imageStyle:any = {

        width : "100%",
        heigth: "100%",


    }

    return(

        <div className={styles.homepageContainer}>
        
        
                {

                    props.data.map((item:Car, index:any) => 
                    
                            <div className={styles.product_box_container} key={index}>

                                <div className={styles.product_box_title}>
                                    <p>{item.title}</p>
                                </div>

                                <div className={styles.product_box_image}>
                                    <Image src={item.url}  alt={item.title}  width={200} height={200} style={imageStyle} className={styles.product_box_img}/>
                                </div>

                               
    
                                


                            </div>
                    
                    )

                }

        
        </div>


    )

}