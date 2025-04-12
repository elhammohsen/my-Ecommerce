// import React, { useEffect, useState } from 'react'
// import style from './Brands.module.css'
// import axios from 'axios';
// import Loading from '../Loading/Loading';
// import BrandDetails from '../brandsDetails/brandsDetails';
// import { Link } from 'react-router-dom';

// export default function Brands() {

//   const [allBrands, setAllBrands] = useState([]);

//   // ! Get All Brands
//   async function getAllBrands() {
//     try {
//       let { data } = await axios.get(
//         "https://ecommerce.routemisr.com/api/v1/brands"
//       );
//       setAllBrands(data);
//       console.log(data);
//     } catch (err) {
//       console.log(err);
//     }
//   }

//   useEffect(() => {
//     getAllBrands();
//   }, []);

    
//   return (
//     <>
//     <Link to={`/brands/${brands._id}`}><div className="py-10 flex flex-wrap justify-center gap-y-10 w-[90%] mx-auto mt-10">
//         {allBrands.data ? (
//           allBrands.data.map((brands,index) => (
//             <div key={brands._id} className="w-full xs:w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/6 text-center p-4 border-2 rounded-3xl border-none hover:shadow-lg hover:shadow-[#0AAD0A] duration-700 cursor-pointer">
//               <img src={brands.image} className="w-full object-contain" alt={brands.name} />
//               <h2 className="font-medium">{brands.name}</h2>
//             </div>
//           ))
//         ) 
//         : <div className="py-7 flex justify-center">
//             <Loading />
//           </div> }
//       </div></Link>
      
//     </>
//   );
// }


import React, { useEffect, useState } from 'react';
import style from './Brands.module.css';
import axios from 'axios';
import Loading from '../Loading/Loading';
import { Link } from 'react-router-dom';
import BrandDetails from '../brandsDetails/brandsDetails';

export default function Brands() {
  const [allBrands, setAllBrands] = useState([]);

  // Get All Brands
  async function getAllBrands() {
    try {
      let { data } = await axios.get(
        "https://ecommerce.routemisr.com/api/v1/brands"
      );
      setAllBrands(data);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getAllBrands();
  }, []);

  return (
    <>
      <div className="py-10 flex flex-wrap justify-center gap-y-10 w-[90%] mx-auto mt-10">
        {allBrands.data ? (
          allBrands.data.map((brand, index) => (
            <Link
              key={brand._id}
              to={`/brandsDetails/${brand._id}/${brand.name}`}
              className="w-full xs:w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/6 text-center p-4 border-2 rounded-3xl border-none hover:shadow-lg hover:shadow-[#0AAD0A] duration-700 cursor-pointer"
            >
              {/* <BrandDetails key={index} brand={brand}/> */}
              <img
                src={brand.image}
                className="w-full object-contain"
                alt={brand.name}
              />
              <h2 className="font-medium">{brand.name}</h2>
            </Link>
          ))
        ) : (
          <div className="py-7 flex justify-center">
            <Loading />
          </div>
        )}
      </div>
    </>
  );
}
