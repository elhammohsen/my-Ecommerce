// import React, { useContext } from 'react'
// import logo from '../../assets/images/freshcart-logo.svg'
// import style from './Navbar.module.css'
// import { NavLink, useNavigate } from 'react-router-dom'
// import { UserContext } from '../../context/UserContext'


// export default function Navbar() {

//   let navigate=useNavigate();
//   let {userData , setUserData}=useContext(UserContext)

//   function Logout(){
//     localStorage.removeItem('userToken');
//     setUserData(null);
//     navigate('/login')

//   }
    
//   return <>
//     <nav className='bg-gray-200 text-center md:fixed top-0 inset-x-0 capitalize text-slate-500 container z-10 '>
//       <div className="container w-[90%] flex flex-col md:flex-row p-5 justify-between items-center">
//        <div className="flex flex-col md:flex-row items-center space-x-10 ">
//        <img src={logo} width={120} alt="" />
//         {userData && <ul className='flex flex-col font-semibold px-5 md:flex-row space-x-2'>
//           <li className='hover:text-[#0AAD0A] pr-4'><NavLink to=''>Home</NavLink></li>
//           <li className='hover:text-[#0AAD0A] pr-4'><NavLink to='cart'>cart</NavLink></li>
//           <li className='hover:text-[#0AAD0A] pr-4'><NavLink to='products'>Products</NavLink></li>
//           <li className='hover:text-[#0AAD0A] pr-4'><NavLink to='categories'>categories</NavLink></li>
//           <li className='hover:text-[#0AAD0A] pr-4'><NavLink to='brands'>brands</NavLink></li>
          
//         </ul>}
//        </div>
//        <div className="flex items-center space-x-2">
       
//         <ul className='flex flex-col md:flex-row space-x-2 px-4 items-center'>
//           <li className=' space-x-2 text-black '>
//             <i className='fab fa-facebook-f px-1 '></i>
//             <i className='fab fa-twitter px-1 '></i>
//             <i className='fab fa-linkedin px-1 '></i>
//             <i className='fab fa-instagram px-1 '></i>
//             <i className='fab fa-youtube px-1 '></i>
//             </li>

//             {userData ? <li onClick={()=>Logout()} className='cursor-pointer px-7 font-bold hover:text-[#0AAD0A]'>Logout</li> : <>
//               <li><NavLink to='login'>Login</NavLink></li>
//               <li><NavLink to='register'>Register</NavLink></li></>}
          
          
          
//         </ul>
//        </div>
//       </div>
//     </nav>

//   </>
// }


import React, { useContext, useState } from 'react';
import logo from '../../assets/images/freshcart-logo.svg';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
import { CartContext } from '../../context/CartContext';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { userData, setUserData } = useContext(UserContext);
  const { setNumberOfItems, numberOfItems } = useContext(CartContext);

  function Logout() {
    localStorage.removeItem('userToken');
    setUserData(null);
    navigate('/login');
  }

  return (
    <nav className="bg-gray-200 text-center mb-10 fixed top-0 inset-x-0 capitalize text-slate-500 z-10 shadow-md">
      <div className="mx-auto w-[90%] flex flex-col lg:flex-row p-3 justify-between items-center">
        {/* Logo and hamburger */}
        <div className="w-full flex justify-between items-center lg:w-auto">
          <img src={logo} width={120} alt="FreshCart Logo" />
          <button
            className="lg:hidden text-2xl text-green-600"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <i className={`fas ${menuOpen ? 'fa-times' : 'fa-bars'}`}></i>
          </button>
        </div>

        {/* Full menu */}
        <div className={`w-full lg:flex lg:items-center lg:justify-between ${menuOpen ? 'block' : 'hidden'} transition-all duration-300 ease-in-out`}>
        <div>
        {userData && (
            <ul className="flex flex-col lg:flex-row font-semibold px-5 lg:space-x-6 items-center">
              <li className='hover:text-[#0AAD0A] p-2'><NavLink to=''>Home</NavLink></li>
              <li className='relative hover:text-[#0AAD0A] p-2'><NavLink to='cart'>Cart 
                <div className='absolute top-[-1px] right-[-10px] size-5 bg-emerald-600 text-white rounded-full flex justify-center items-center'>
                {numberOfItems}
                  </div> </NavLink></li>
              <li className='hover:text-[#0AAD0A] p-2'><NavLink to='products'>Products</NavLink></li>
              <li className='hover:text-[#0AAD0A] p-2'><NavLink to='categories'>Categories</NavLink></li>
              <li className='hover:text-[#0AAD0A] p-2'><NavLink to='brands'>Brands</NavLink></li>
            </ul>
          )}
        </div>

          <div>
          <ul className='flex flex-col lg:flex-row lg:space-x-6 px-4 items-center mt-4 lg:mt-0'>
            <li className='text-black space-x-2'>
              <Link to={`https://web.facebook.com/?_rdc=1&_rdr#`}><i className='fab fa-facebook-f px-1'></i></Link>
              <Link to={`https://x.com/`}><i className='fab fa-twitter px-1'></i></Link>
              <Link to={`https://www.linkedin.com/in/elham-mohsen-79014a257/`}><i className='fab fa-linkedin px-1'></i></Link>
              <Link to={`https://www.instagram.com/`}><i className='fab fa-instagram px-1'></i></Link>
              <Link to={`https://www.youtube.com/`}><i className='fab fa-youtube px-1'></i></Link>
            </li>

            {userData ? (
              <li onClick={Logout} className='cursor-pointer px-4 font-bold hover:text-[#0AAD0A]'>Logout</li>
            ) : (
              <>
                <li className='p-2 hover:text-[#0AAD0A]'><NavLink to='login'>Login</NavLink></li>
                <li className='p-2 hover:text-[#0AAD0A]'><NavLink to='register'>Register</NavLink></li>
              </>
            )}
          </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
