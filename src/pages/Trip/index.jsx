// import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchProducts, selectAllProducts } from "../../stores/trip/productSlice";
// import ProductDetailCard from "../../components/ProductDetailCard";
// import { Tabs } from "../../components/Tabs";
// import { addToCart } from "../../stores/cart/cartSlices";

// const Trip = () => {
//     const dispatch = useDispatch();
//     const products = useSelector(selectAllProducts);
//     const [activeTab, setActiveTab] = useState('');
//     const [activeTabIndex, setActiveTabIndex] = useState(0);

//     useEffect(() => {
//         dispatch(fetchProducts())
//     }, [])

//     const onAddProduct = (product) => {
//         dispatch(addToCart(product))
//     }

//     const onTabSwitch = (newActiveTab) => {
//         setActiveTab(newActiveTab);
//         let categories = products.products.map((product) => product.name.name);
//         let index = categories.findIndex(category => newActiveTab === category);
//         console.log(index);
//         if (index > -1) {
//             setActiveTabIndex(index);
//         } else {
//             setActiveTabIndex(0);
//         }
//     }

//     return (
//         <div className="bg-black">
//            {
//             products.status !== 'fulfilled' ?
//             <div>loading...</div> :
//             <div className="menu-wrapper">
//                 {
//                     products.products &&
//                     <Tabs
//                         list={products.products.map((product) => product.name.name)}
//                         activeTab={activeTab}
//                         onTabSwitch={onTabSwitch}
//                         />
//                 }
//                 <div className="flex flex-row mx-3">
//                 {
//                     products.products && products.products[activeTabIndex].products.map((product, index) => {
//                         return (
//                            <ProductDetailCard key={index} product={product} onAddProduct={onAddProduct}/>
//                         )
//                     })
//                 }
//                 </div>
//             </div>
//            }
//         </div>
//     )
// }

// export default Trip;


import React from 'react';
import TripList from '../../components/tripList';
import TripImage from '../../assets/images/tripimage.png';

export default function Trip() {
  return (
    <div>
        <div className='flex justify-around px-12 py-12 mt-16'>
            <div className='inline px-8 py-8 mt-8'>
                <h1 className='text-4xl'>Discover Our</h1>
                <h1 className='text-4xl text-bgColor text-semibold'>Packages</h1>
                <p className='py-8'>"Embark on a journey through Bali's wonders with Bali Edventures' Tour Packages! <br />
                    Explore our meticulously curated selection of tours, <br/>
                    each offering a unique and unforgettable experience. "</p>
            </div>

            <div>
                <img src={TripImage} alt="" 
                className='w-72 h-auto rounded-lg mt-12 md:mt-0'/>
            </div>
        </div>
      <TripList />
    </div>
  )
}
