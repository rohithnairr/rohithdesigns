import Image from "next/image";

import card1 from "./images/card1.svg"
import card2 from "./images/card2.svg"
import card3 from "./images/card3.svg"
import card4 from "./images/card4.svg"
import card5 from "./images/interactive.svg"
import card6 from "./images/fluck.svg"
import Footer from "./components/footer";
import tv from "./images/tv.svg"

import Blog from "./components/blogs"

import Navigation from "./components/navbar";

import second from './images/second.png'


export default function Home() {
  return (
    <>

    

      <div className="container mx-auto p-4 lg:p-8 font-jakarta bg-white text-black">
        <Navigation />

        <div className="grid lg:grid-cols-3 gap-4 grid-cols-1 mt-8 text-grey-900">
          <div className="col-span-2 text-black p-12 rounded-xl bg-gradient-to-r from-indigo-100 via-transparent to-blue-100 animate-fade-right animate-duration-[2000ms]" >
            <h1 className="text-3xl">Hey, I‘m Rohith Nair.<br />
              <span className="font-regular"><b>UI/UX Designer and Front-End Developer</b></span></h1>
              
            <p className="mt-16 font-thin max-w-lg ">I care a lot about using design  for positive impact and enjoy creative user-centric, delightful and human experience.</p>
            <a className="text-base mt-12  text-center py-4 px-12 bg-black font-bold text-white rounded-3xl  inline-block " href='#'>Contact &#8594;</a>
            <div className="inline">
              
            </div>
         
          </div>
          <div className="bg-transparent  text-white  rounded-xl  animate-fade-left animate-duration-[2000ms]">
           <Image src={second}/>
          </div>



        </div>


        <div className="" id="Casestudies">
            <h2 className="text-3xl  font-bold text-left mt-24">Stories</h2> 
        </div>

        <div className='grid lg:grid-cols-2 gap-2  sm:grid-cols-1 md:grid-cols-2 lg:mt-12 mt-4 text-white'  >
        
          <div className="animate-fade-right animate-duration-[2000ms]"><a href="./mindbridge"><Image src={card1} className="w-full"/></a></div>
          <div className="animate-fade-right animate-duration-[2000ms]"><a href="./fluck"><Image src={card6} className="w-full"/></a></div>
          <div className="animate-fade-left animate-duration-[2000ms]"><a href="https://medium.com/@rohithnairreghu/go-card-design-journey-5ee628a6f398"><Image src={card2} className="w-full"/></a></div>
          <div className="animate-fade-right animate-duration-[2000ms]"><a href="https://medium.com/@rohithnairreghu/careershastra-a27acefe94fe"><Image src={card3} className="w-full"/></a></div>
          <div className="animate-fade-left animate-duration-[2000ms]"><a href="./lume"><Image src={card4} className="w-full"/></a></div>
          <div className="animate-fade-left animate-duration-[2000ms]"><a href="./tv"><Image src={tv} className="w-full"/></a></div>
          <div className="animate-fade-left animate-duration-[2000ms]"><a href="./motion"><Image src={card5} className="w-full"/></a></div>
        </div>
        

        <div className='grid lg:grid-cols-2 gap-4  sm:grid-cols-1 md:grid-cols-2 lg:mt-32 mt-4 text-white'  >
          <div className="pt-12">
           
              <h2 className="text-3xl text-black font-bold">Experience</h2>
         
            <div className="my-12">
              <h3 className="text-l lg:text-xl text-gray-800 font-bold">Senior product Designer | Front-End Developer</h3>
              <p className="text-base lg:text-l text-gray-800 font-normal mt-2">CrowdAfrik Private Limited, London</p>
              <p className="text-base lg:text-l text-gray-800 font-normal mt-2">June 2023 - Present</p>
            </div>
            <div className="my-12">
              <h3 className="text-l lg:text-xl text-gray-800 font-bold">Mid-Senior UI/UX Designer </h3>
              <p className="text-base lg:text-l text-gray-800 font-normal mt-2">The Elmex Technologies, London</p>
              <p className="text-base lg:text-l text-gray-800 font-normal mt-2">November 2022 - June 2023</p>
            </div>
            <div className="my-12">
              <h3 className="text-l lg:text-xl text-gray-800 font-bold">UI/UX Developer </h3>
              <p className="text-base lg:text-l text-gray-800 font-normal mt-2">Indegene Private Limited, India</p>
              <p className="text-base lg:text-l text-gray-800 font-normal mt-2">June 2021 - July 2023</p>
            </div>
            <div className="my-12">
              <h3 className="text-l lg:text-xl text-gray-800  font-bold">Product Designer</h3>
              <p className="text-base lg:text-l text-gray-800 font-normal mt-2">The Float Business Accelerator, India</p>
              <p className="text-base lg:text-l text-gray-800 font-normal mt-2">2020 - 2021</p>
            </div>

          </div>
          <div className="pt-12">
            
              <h2 className="text-3xl text-black font-bold">Education</h2>
          
            <div className="my-12">
              <h3 className="text-l lg:text-xl text-gray-800 font-bold">Master’s in Web Design and Content Planning</h3>
              <p className="text-base lg:text-l text-gray-800 font-normal mt-2">University of Greenwich, United Kingdom</p>
              <p className="text-base lg:text-l text-gray-800 font-normal mt-2">2022- 2023</p>
            </div>
            <div className="my-12">
              <h3 className="text-l lg:text-xl text-gray-800 font-bold">Bachelor’s in Computer Engineering</h3>
              <p className="text-base lg:text-l text-gray-800 font-normal mt-2">Amrita School of Engineering, India</p>
              <p className="text-base lg:text-l text-gray-800 font-normal mt-2">2022- 2023</p>
            </div>
          </div>
        </div>


        <div className="mt-20 font-Jakarta font-bold text-3xl">
          
            <h2 className="text-3xl font-bold text-left mt-12">Blogs</h2>
       
          <Blog />
        </div>







      </div>
      <Footer />
     
    </>

  )
}
