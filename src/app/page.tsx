import Header from "./components/Header";
import { FaCheck } from "react-icons/fa6";
import { PiHamburger } from "react-icons/pi";
import { FaCookieBite } from "react-icons/fa";
import { TbGlassFull } from "react-icons/tb";
import Footer from "./components/Footer";
import "./styles/home.css"



export default function Home() {
  return (
    <div className="bg-black">

      {/* header */}
      <Header />

      {/* header close */}

      {/* 1st page */}
      <div className="bg-black w-full h-auto">
        <div className="lg:pt-20">
  <div className="relative xl:absolute xl:mb-10 ml-14 mr-3 md:ml-28 text-[30px] md:text-[40px] mt-[-60px] lg:mt-10 md:mt-32 ">
    <h1 className="text-orange-500 font-bold text-2xl md:text-4xl">
      We <span className="text-white ml-2">Create the best</span>
    </h1>
    <h1 className="text-white font-bold text-xl md:text-3xl">food Product</h1>
    <p className="text-white text-sm md:text-base mt-4 md:mt-6">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
      <br />
      Doloremque ad doloribus laborum itaque magni molestiae, 
      <br />
      repellat ducimus laboriosam! Corporis eaque impedit labo 
      <br />
      riosam velit optio nihil accusamus autem laborum itaque est!
    </p>
    <div className="text-white text-sm md:text-base mt-7 leading-8 flex flex-col space-y-3">
      <span className="flex items-center"> 
        <FaCheck className="mr-2 text-lg" />
        Lacus nisi, et ac dapibus sit eu velit in consequat.
      </span>
      <span className="flex items-center">
        <FaCheck className="mr-2 text-lg" />
        Quisque diam pellentesque bibendum non dui volutpat fringilla
      </span>
      <span className="flex items-center">
        <FaCheck className="mr-2 text-lg" />
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </span>
    </div>

    <button className="bg-yellow-500 text-white text-xs md:text-sm mt-6 px-6 py-2 rounded-3xl">
      Read More
    </button>
  </div>

  <div className="mt-10 lg:mt-[-100px]"> 
    <div className="flex relative justify-center md:justify-end rounded-md m-auto">
      <img src="top.png" alt="bg" className="w-full md:w-[660px] h-auto" />
    </div>

    <div className="flex relative pl-24 pr-24 justify-center md:justify-end mt-4 gap-3 rounded-md">
      <img src="left.png" alt="bg" className="w-full md:w-[322px] h-auto" />
      <img src="right.png" alt="bg" className="w-full md:w-[322px] h-auto" />
    </div>
  </div></div>
{/* </div> */}



 {/* 1st page close */}


    {/* 2nd page */}

    <h1 className="bg-black text-orange-500 font-bold text-[24px] md:text-[30px] flex justify-center items-center mt-12 md:mt-28">
  Ch<span className="text-white">oose Food Item</span>
</h1>

<div className="flex relative justify-center mt-8 rounded-md">
  <img src="image-box.png" alt="bg" className="w-full md:w-[1000px] h-auto" />
</div>

            
{/* 2nd page close */}


    {/* 3rd page */}

    <div className="flex justify-center items-center mt-16 md:mt-28 px-4 lg:px-0">
  <div className="flex flex-col items-center gap-6 md:gap-3">

    {/* First Row of Images */}
    <div className="flex flex-wrap justify-center gap-6 md:gap-3">
      <img src="4.png" alt="bg" className="w-[220px] sm:w-[250px] md:w-[362px] h-auto" />
      <img src="2.png" alt="bg" className="w-[180px] sm:w-[200px] md:w-[281px] h-auto lg:mt-16 md:mt-32" />
    </div>

    {/* Second Row of Images */}
    <div className="flex flex-wrap justify-center gap-6 md:gap-3 mt-4">
      <img src="1.png" alt="bg" className="w-[180px] sm:w-[200px] md:w-[244px] h-auto" />
      <img src="3.png" alt="bg" className="w-[180px] sm:w-[200px] md:w-[221px] h-auto" />
      <div className="flex flex-col items-center">
        <img src="6.png" alt="bg" className="w-[130px] sm:w-[150px] md:w-[168px] h-auto" />
        <img src="5.png" alt="bg" className="w-[130px] sm:w-[150px] md:w-[161px] h-auto mt-3" />
      </div>
    </div>
  </div>

  {/* Text Section */}
  <div className="ml-6 md:ml-10 text-center">
    <h1 className="text-orange-500 text-[20px] sm:text-[24px] md:text-[30px] font-bold flex justify-center">
      Ex
      <p className="text-white inline ">tra ordinary taste</p>
    </h1>

    <h1 className="text-white font-bold text-[22px] sm:text-[24px] md:text-[30px]">And Experienced</h1>
    <p className="text-white text-[12px] sm:text-[14px] text-center mt-6 px-4 sm:px-8">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. <br />
      Doloremque ad doloribus laborum itaque magni molestiae, <br />
      repellat ducimus laboriosam! Corporis eaque impedit labo <br />
      riosam velit optio nihil accusamus autem laborum itaque est!
    </p>

    {/* Icons Section */}
    <div className="text-white flex flex-wrap justify-center gap-8 mt-5">
      <div className="flex flex-col items-center">
        <div className="bg-orange-400 p-4 rounded-full">
          <PiHamburger className="text-white text-2xl" />
        </div>
        <div className="mt-2 text-[14px] sm:text-[15px]">Fast Food</div>
      </div>

      <div className="flex flex-col items-center">
        <div className="bg-orange-400 p-4 rounded-full">
          <FaCookieBite className="text-white text-2xl" />
        </div>
        <div className="mt-2 text-[14px] sm:text-[15px]">Lunch</div>
      </div>

      <div className="flex flex-col items-center">
        <div className="bg-orange-400 p-4 rounded-full">
          <TbGlassFull className="text-white text-2xl" />
        </div>
        <div className="mt-2 text-[14px] sm:text-[15px]">Dinner</div>
      </div>
    </div>

    {/* Experience Box */}
    <div className="bg-white w-[200px] sm:w-[220px] md:w-[250px] border-l-8 border-orange-500 rounded-md mt-6 py-2 flex items-center justify-center text-center">
      <h1 className="text-orange-500 font-bold text-2xl md:text-3xl">30+</h1>
      <div className="ml-4 sm:ml-6 md:ml-7">
        Years of <br />
        <p className="font-bold">Experience</p>
      </div>
    </div>
  </div>
</div>


{/* 3rd page close */}



    {/* 4th page */}
    <div className="mt-28">
      <img src="clients.png" alt="bg" />
    </div>
    {/* 4th page close */}



    {/* 5th page */}
    <div className="flex justify-center">
  <h1 className="text-orange-500 font-bold text-[24px] sm:text-[30px] lg:text-[35px] flex justify-center items-center mt-10 sm:mt-20">
    Fr<p className="text-white ">om Our Menu</p>
  </h1>
</div>

<nav className="text-white flex justify-center mt-8 sm:mt-10">
  <ul className="list-none flex flex-wrap justify-center space-x-6 sm:space-x-10 md:space-x-12">
    <li className="text-orange-400 text-[14px] sm:text-[16px]">Breakfast</li>
    <li className="text-[14px] sm:text-[16px]">Lunch</li>
    <li className="text-[14px] sm:text-[16px]">Dinner</li>
    <li className="text-[14px] sm:text-[16px]">Dessert</li>
    <li className="text-[14px] sm:text-[16px]">Drinks</li>
    <li className="text-[14px] sm:text-[16px]">Snack</li>
    <li className="text-[14px] sm:text-[16px]">Soups</li>
  </ul>
</nav>

<div className="relative flex  mt-10 sm:mt-14">
<img src="plate.png" alt="bg" className="hidden lg:block absolute ml-24 mt-2"  />
<img src="leaf.png" alt="bg" className="hidden lg:block"/>
  {/* Grid Layout of Images */}
  <div className="grid grid-cols-2 sm:grid-cols-2 gap-4 w-[85%] sm:w-[600px] md:w-[800px] mt-6 mx-auto">
    <img src="lettuceleaf.png" alt="bgg" className="w-full h-auto" />
    <img src="lettuceleaf1.png" alt="bgg" className="w-full h-auto" />
    <img src="lettuceleaf2.png" alt="bgg" className="w-full h-auto" />
    <img src="lettuceleaf3.png" alt="bgg" className="w-full h-auto" />
    <img src="lettuceleaf4.png" alt="bgg" className="w-full h-auto" />
    <img src="lettuceleaf5.png" alt="bgg" className="w-full h-auto" />
    <img src="lettuceleaf6.png" alt="bgg" className="w-full h-auto" />
    <img src="lettuceleaf7.png" alt="bgg" className="w-full h-auto" />
  </div>
</div>


    {/* 5th page close */}

    {/* 6th page */}
    <div className="flex justify-center">
  <h1 className='text-orange-500 font-bold text-[24px] sm:text-[30px] md:text-[35px] flex justify-center items-center mt-16 sm:mt-28'>
    Me<p className='text-white'>et Our Chef</p>
  </h1>
</div>

<div className="flex justify-center gap-6 mt-10 flex-wrap">
  <img src="chef1 (1).png" alt="bgg" className="w-[150px] sm:w-[180px] md:w-[200px] h-auto" />
  <img src="chef1 (2).png" alt="bgg" className="w-[150px] sm:w-[180px] md:w-[200px] h-auto" />
  <img src="chef1 (3).png" alt="bgg" className="w-[150px] sm:w-[180px] md:w-[200px] h-auto" />
  <img src="chef1 (4).png" alt="bgg" className="w-[150px] sm:w-[180px] md:w-[200px] h-auto" />
</div>

<button className="text-white border border-orange-500 flex justify-center m-auto mt-8 rounded-3xl p-[7px] px-6 text-[12px] sm:text-[14px] md:text-[16px]">
  See More
</button>

    {/* 6th page close */}


    {/* 7th page */}
    <div className="text-white flex justify-center sm:ml-12 md:ml-24 mt-16 sm:mt-20">
  <h1 className="text-[24px] sm:text-[30px] md:text-[35px] font-bold text-center">
    What our clients are saying
  </h1>
</div>

<div className="flex justify-center mt-10 sm:mt-12">
  <img 
    src="review.png"  alt="bg"  className="w-[300px] sm:w-[400px] md:w-[500px] h-auto" 
  />
</div>


    {/* 7th page close */}


    {/* 8th page */}

    <div className="mt-20">
  <img 
    src="bigimg.png" alt="bg" className="w-full sm:w-[1000px] md:w-[1350px] h-auto" 
  />
</div>


    {/* 8th page close */}


    {/* 9th page */}

    <div className="flex justify-center">
  <h1 className="text-orange-500 font-bold text-[30px] flex justify-center items-center mt-28">
    La<p className="text-white ">test News & Blog</p>
  </h1>
</div>

<div className="flex flex-wrap justify-center gap-6 mt-10">
  <img src="Blog Card 1.png" alt="bgg" className="w-[300px] h-[420px] sm:w-[250px] md:w-[300px]" />
  <img src="Blog Card 3.png" alt="bgg" className="w-[300px] h-[420px] sm:w-[250px] md:w-[300px]" />
  <img src="Blog Card 2.png" alt="bgg" className="w-[300px] h-[420px] sm:w-[250px] md:w-[300px]" />
</div>


    {/* 9th page close */}




      <Footer/>
      </div>
      
    </div>
  );
}
