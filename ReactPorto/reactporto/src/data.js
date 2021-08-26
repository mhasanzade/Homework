import img1 from "./img/product-1.jpg";
import img2 from "./img/product-2.jpg";
import img3 from "./img/product-3.jpg";
import img4 from "./img/product-4.jpg";
import img5 from "./img/product-5.jpg";
import img6 from "./img/product-6.jpg";
import img7 from "./img/product-7.jpg";


const data = {
    productData: [
        {
           id:1,
           img: img1,
           title: "Black Grey Headset",
           price: '39.00' 
        },

        {
            id:2,
            img: img2,
            title: "Battery Charger",
            price: '259.00' 
         },

         {
            id:3,
            img: img3,
            title: "Brown Bag",
            price: '199.00'
         },

         {
            id:4,
            img: img4,
            title: "Casual Note Bag",
            price: '299.00',
            starcount: 3
             
         },

         {
            id:5,
            img: img5,
            title: "Porto Extended Camera",
            price: '599.00',
            starcount: 2
         },

         {
            id:6,
            img: img6,
            title: "Computer Mouse",
            price: '55.00'
         },

         {
            id:7,
            img: img7,
            title: "Blue BackPack",
            price: '199.00'
         }
    ],
};

export default data;