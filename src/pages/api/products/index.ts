export default function handler(req:any, res:any){

    console.log('into product handler ')


  const products = [


    {
      id: 1,
      title : "Concept Q Inspiration",
      price: 100,
      url:"https://www.groupebeaucage.com/wp-content/uploads/sites/15/2019/05/infiniti-q-inspiration-concept.png"
    },

    {
      id: 2,
      title : "Genesis G90 2023",
      price: 200,
      url:"https://www.groupebeaucage.com/wp-content/uploads/sites/15/2022/12/article-essai-genesis-g90-2023-header.jpg"
    },

    {
        id:3,
        title: "Kia Telluride 2023",
        price: 300,
        url:"https://www.groupebeaucage.com/wp-content/uploads/sites/15/2022/12/groupe-beaucage-kia-essai-telluride-2023-autopassion-3.jpg"
    },

    {

        id:4,
        title:"Mitsubishi Outlander PHEV 2023",
        price:400,
        url:"https://www.groupebeaucage.com/wp-content/uploads/sites/15/2022/12/groupe-beaucage-mitsubishi-essai-outlander-phev-2023-header.jpg"
    },

    {
        id:5,
        title:"Kia Telluride 2020",
        price:200,
        url:"https://www.groupebeaucage.com/wp-content/uploads/sites/15/2019/04/kia-telluride-2020-1.jpg"
    }

   
  

   






  ]

  res.status(200).json(products)





}

