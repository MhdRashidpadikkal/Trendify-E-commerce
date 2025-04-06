import img1 from '../assets/hero/img-1.png'
import img2 from '../assets/hero/img-2.png'
import img3 from '../assets/hero/img-3.png'
import img4 from '../assets/hero/img-4.png'

export const heroData = [
    {
        id: 1,
        title: 'Top Electronics  ',
        secondTitle: 'JBL Headset',
        description: 'Experience immersive sound with the latest JBL headset, featuring cutting-edge, ensuring a premium listening experience for music lovers.',
        product: {
            id: 1.1,
            name: 'JBL Wireless Headset',
            category: 'Electronics',
            price: '100',
            strikePrice: '180',
            image: img1,
            rating: 4.5,
            reviews: 20,
            discount: '50%', 
        },
    },
    {
        id: 2,
        title: 'Premium Footwear  ',
        secondTitle: 'Men’s Shoes',
        description: 'Step into superior comfort with our stylish and durable men’s shoes, crafted with breathable materials, a cushioned insole, and an ergonomic design.',
        product: {
            id: 2.1,
            name: 'Men’s Running Shoes',
            category: 'Footwear',
            price: '200',
            strikePrice: '250',
            image: img2,
            rating: 3.8,
            reviews: 15,
            discount: '30%',
        },
    },
    {
        id: 3,
        title: 'Fashion Essentials  ',
        secondTitle: 'Men’s Hoodie',
        description: 'Stay effortlessly stylish and cozy with this premium men’s hoodie, designed with soft, high-quality fabric, a modern tailored fit, and all-weather versatility.',
        product: {
            id: 3.1,
            name: 'Casual Men’s Hoodie',
            category: 'Clothing',
            price: '300',
            strikePrice: '350',
            image: img3,
            rating: 4.2,
            reviews: 25,
            discount: '40%',
        },
    },
    {
        id: 4,
        title: 'Smart Accessories  ',
        secondTitle: 'Smartwatch',
        description: 'Upgrade your daily routine with this advanced smartwatch, featuring real-time health tracking, seamless Bluetooth connectivity, and instant notifications.',
        product: {
            id: 4.1,
            name: 'Advanced Smartwatch',
            category: 'Accessories',
            price: '400',
            strikePrice: '450',
            image: img4,
            rating: 2.7,
            reviews: 18,
            discount: '25%',
        },
    }
];

