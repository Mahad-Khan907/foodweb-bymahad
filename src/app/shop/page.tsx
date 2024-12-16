import React from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { FaAngleRight } from "react-icons/fa6";
import { IoSearchOutline } from "react-icons/io5";
import { FaAnglesRight } from "react-icons/fa6";
import { FaAnglesLeft } from "react-icons/fa6";
import "../styles/other.css"

const page = () => {
  return (
    <div>
      <Nav/>
     <div className="relative">
   <img 
     src="nav.png" alt="bg"  className="w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] object-cover " 
   />
   <h1 className="absolute inset-0 flex justify-center items-center text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
     Our Shop
   </h1>
   <div className="absolute inset-0 flex justify-center items-center flex-col mt-20 sm:mt-32 lg:mt-36">
     <h2 className="flex items-center text-sm sm:text-base md:text-lg text-white gap-1">
       Home <FaAngleRight /> <span className="text-orange-400"></span>
     </h2>
   </div>
 </div>


      <div className="flex md:items-center flex-col ml-2  md:justify-center space-x-4 mt-20">
  <div className="flex items-center space-x-2">
    <label htmlFor="sort" className="text-gray-700">Sort By:</label>
    <select id="sort" className="border border-gray-300 w-[200px] h-auto rounded-md p-2 text-gray-700 ">

    </select>
  </div>
  

  <div className="flex items-center space-x-2 mt-2">
    <label htmlFor="show" className="text-gray-700">Show:</label>
    <select id="show" className="border border-gray-300 w-[200px] h-auto rounded-md p-2 text-gray-700 ">

    </select>
  </div>
</div>





     <div className='flex justify-center flex-col md:flex-row text-[12px]'>

    
      <div className='flex justify-center p-8'>
      <div className='grid grid-cols-3 w-[600px] h-auto gap-10'>
        <div className='text-start'>
        <img src="Mask Group.png" alt="bg" className='' />
        <div className='font-semibold'>Fresh Lime 
            <div className='flex gap-2'>
            <h1 className='text-orange-500 font-normal '>$38.00</h1>
            <h2 className='line-through text-gray-600 font-normal'>$45.00</h2></div>
        </div></div>
        <div className='text-start'>
        <img src="Mask Group (1).png" alt="bg" className='' />
        <div className='font-semibold'>Chocolate Muffin
            <div className='flex gap-2'>
            <h1 className='text-orange-500 font-normal '>$28.00</h1>
            {/* <h2 className='line-through text-gray-600 font-normal'>$45.00</h2> */}
            </div>
        </div></div>
        <div className='text-start'>
        <img src="Mask Group (2).png " alt="bg" className='' />
        <div className='font-semibold'>Burger
            <div className='flex gap-2'>
            <h1 className='text-orange-500 font-normal '>$21.00</h1>
            <h2 className='line-through text-gray-600 font-normal'>$45.00</h2></div>
        </div></div>
        <div className='text-start'>
        <img src="Mask Group (3).png" alt="bg" className='' />
        <div className='font-semibold'>Country Burger
            <div className='flex gap-2'>
            <h1 className='text-orange-500 font-normal '>$45.00</h1>
            {/* <h2 className='line-through text-gray-600 font-normal'>$45.00</h2> */}
            </div>
        </div></div>
        <div className='text-start'>
        <img src="Mask Group (4).png" alt="bg" className='' />
        <div className='font-semibold'>Drink
            <div className='flex gap-2'>
            <h1 className='text-orange-500 font-normal '>$23.00</h1>
            <h2 className='line-through text-gray-600 font-normal'>$45.00</h2></div>
        </div></div>
        <div className='text-start'>
        <img src="Mask Group (5).png" alt="bg" className='' />
        <div className='font-semibold'>Pizza
            <div className='flex gap-2'>
            <h1 className='text-orange-500 font-normal '>$43.00</h1>
            {/* <h2 className='line-through text-gray-600 font-normal'>$45.00</h2> */}
            </div>
        </div></div>
        <div className='text-start'>
        <img src="Mask Group (6).png" alt="bg" className='' />
        <div className='font-semibold'>Cheese Butter
            <div className='flex gap-2'>
            <h1 className='text-orange-500 font-normal '>$10.00</h1>
            {/* <h2 className='line-through text-gray-600 font-normal'>$45.00</h2> */}
            </div>
        </div></div>
        <div className='text-start'>
        <img src="Mask Group (7).png" alt="bg" className='' />
        <div className='font-semibold'>Sandwiches
            <div className='flex gap-2'>
            <h1 className='text-orange-500 font-normal '>$25.00</h1>
            {/* <h2 className='line-through text-gray-600 font-normal'>$45.00</h2> */}
            </div>
        </div></div>
        <div className='text-start'>
        <img src="Mask Group (8).png" alt="bg" className='' />
        <div className='font-semibold'>Chicken Chup
            <div className='flex gap-2'>
            <h1 className='text-orange-500 font-normal '>$12.00</h1>
            {/* <h2 className='line-through text-gray-600 font-normal'>$45.00</h2> */}
            </div>
        </div></div>
        <div className='text-start'>
        <img src="Mask Group (9).png" alt="bg" className='' />
        <div className='font-semibold'>Country Burger
            <div className='flex gap-2'>
            <h1 className='text-orange-500 font-normal '>$25.00</h1>
            {/* <h2 className='line-through text-gray-600 font-normal'>$45.00</h2> */}
            </div>
        </div></div>
        <div className='text-start'>
        <img src="Mask Group (10).png" alt="bg" className='' />
        <div className='font-semibold'>Drink
            <div className='flex gap-2'>
            <h1 className='text-orange-500 font-normal '>$23.00</h1>
            <h2 className='line-through text-gray-600 font-normal'>$45.00</h2>
            </div>
        </div></div>
        <div className='text-start'>
        <img src="Mask Group (11).png" alt="bg" className='' />
        <div className='font-semibold'>Pizza
            <div className='flex gap-2'>
            <h1 className='text-orange-500 font-normal '>$43.00</h1>
            {/* <h2 className='line-through text-gray-600 font-normal'>$45.00</h2> */}
            </div>
        </div></div>
        <div className='text-start'>
        <img src="Mask Group (12).png" alt="bg" className='' />
        <div className='font-semibold'>Cheese Butter
            <div className='flex gap-2'>
            <h1 className='text-orange-500 font-normal '>$10.00</h1>
            {/* <h2 className='line-through text-gray-600 font-normal'>$45.00</h2> */}
            </div>
        </div></div>
        <div className='text-start'>
        <img src="Mask Group (13).png" alt="bg" className='' />
        <div className='font-semibold'>Sandwiches
            <div className='flex gap-2'>
            <h1 className='text-orange-500 font-normal '>$25.00</h1>
            {/* <h2 className='line-through text-gray-600 font-normal'>$45.00</h2> */}
            </div>
        </div></div>
        <div className='text-start'>
        <img src="Mask Group (14).png" alt="bg" className='' />
        <div className='font-semibold'>Chicken Chup 
            <div className='flex gap-2'>
            <h1 className='text-orange-500 font-normal '>$12.00</h1>
            {/* <h2 className='line-through text-gray-600 font-normal'>$45.00</h2> */}
            </div>
        </div></div>
      </div></div>
      <div className="flex justify-center mt-10">
        <div>

      <div>
        <div className='flex'>
  <input
    type="text"
    id="name"
    placeholder="Search Product"
    className="bg-pink-100 text-[15px] text-gray-800 px-2 py-1 w-[200px] h-[40px] " 
  />
  <IoSearchOutline className="bg-yellow-500 text-white w-8 h-10 cursor-pointer " /></div>
</div>
    
  <h1 className='text-[20px] font-bold mt-6'>Category</h1>
  <input type="checkbox" name='text ' className='mt-4'/> Sandwitches <br />
  <input type="checkbox" name='text ' className='mt-4'/> Burger <br />
  <input type="checkbox" name='text ' className='mt-4'/> Chicken Chup<br />
  <input type="checkbox" name='text ' className='mt-4'/> Drink <br />
  <input type="checkbox" name='text ' className='mt-4'/> Pizza <br />
  <input type="checkbox" name='text ' className='mt-4'/> Thi <br />
  <input type="checkbox" name='text ' className='mt-4'/> Non Veg <br />
  <input type="checkbox" name='text ' className='mt-4'/> Uncategorized <br />
  <img src="banner.png" alt="bg" className='mt-4' />

  <h1 className='text-[20px] font-bold mt-4 border-b-4 border-orange-500 w-[200px] h-auto'>Filter By Price</h1>
  <h2 className='text-[13px] text-slate-600'>From $0 to $80000</h2>

  <img src="Latest Product.png" alt="bg" className='mt-4' />

  <h1 className='text-[20px] font-bold mt-4'>Product Tags</h1>

  <ul className='flex gap-3 mt-4'>
    <li>Services</li>
    <li>Our Menu</li>
    <li>Pizza</li>
    </ul>

    <ul className='flex gap-3 mt-2'>
    <li>Cupcake</li>
    <li className='text-orange-500 border-b border-orange-400'>Burger</li>
    <li>Cookies</li>
  </ul>

  <ul className='flex gap-3 mt-2'>
    <li>Our Shop</li>
    <li>Tandori Chicken</li>
  </ul>
  </div>
  </div></div>

<div className='flex gap-4 justify-center '>
<FaAnglesLeft className='mt-1 text-orange-500'/>
  <div className='text-black border border-slate-200 w-8 h-8 text-center flex justify-center mb-10'>1</div>
  <div className=' bg-orange-500 text-white border border-slate-200 w-8 h-8 text-center flex justify-center '>2</div>
  <div className='text-black border border-slate-200 w-8 h-8 text-center flex justify-center '>3</div>
  <FaAnglesRight className='mt-1 text-orange-500' />
  </div>
      <Footer/>
    </div>
  )
}

export default page
 