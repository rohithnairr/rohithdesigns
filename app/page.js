import Image from "next/image";

import card0 from "./images/card0.svg"
import card1 from "./images/card1.svg"
import card2 from "./images/card2.svg"
import card3 from "./images/card3.svg"
import card4 from "./images/card4.svg"
import card5 from "./images/interactive.svg"
import card6 from "./images/fluck.svg"
import card7 from "./images/card7.svg"
import card8 from "./images/lumemedia.svg"
import Footer from "./components/footer";
import tv from "./images/tv.svg"

import Blog from "./components/blogs"

import Navigation from "./components/navbar";

import second from './images/second.png'


export default function Home() {
  return (
    <>



      <div className="container mx-auto p-4 lg:p-8 font-jakarta bg-blue-gray-100 text-black ">
        <Navigation />

        <div className="grid grid-cols-1 mt-8 text-grey-700 text-center py-32">
          <h1 className="font-jakarta lg:text-5xl text-4xl font-bold max-w-3xl  mx-auto text-center">Let me tell you a story of some lines and <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 inline-block text-transparent bg-clip-text"> colours.</span></h1>
          <p className="font-jakarta lg:text-xl text-sm font-light max-w-xl pt-8 text-center text-gray-600  mx-auto">A Chronicle of Design Passion: Tales from the Journey of a Seasoned Product Designer and UX/UI Enthusiast</p>
        </div>

        <div className="grid lg:grid-cols-4 md:grid-cols-4  bg-white p-4 rounded-lg">
          <div> <p className=" font-bold text-3xl py-8 text-center">4+ <br /><span className="font-light text-base">Years of Experience</span></p></div>
          <div> <p className=" font-bold text-3xl py-8 text-center">29+ <br /><span className="font-light text-base">UX/UI Projects</span></p></div>
          <div> <p className=" font-bold text-3xl py-8 text-center">14+ <br /><span className="font-light text-base">Development Projects</span></p></div>
          <div> <p className=" font-bold text-3xl py-8 text-center">8+ <br /><span className="font-light text-base">Achievements</span></p></div>

        </div>


        <div className="" id="Casestudies">
          <h2 className="text-3xl  font-bold text-left mt-24">Stories</h2>
        </div>

        <div className='grid lg:grid-cols-3 gap-2  sm:grid-cols-1 md:grid-cols-2 lg:mt-12 mt-4 text-white'  >
        <div className="animate-fade-bottom animate-duration-[1000ms]"><a href="./fluck"><Image src={card6} className="w-full" /></a></div>
        <div className="animate-fade-bottom animate-duration-[1000ms]"><a href="./doof"><Image src={card0} className="w-full" /></a></div>
          <div className="animate-fade-bottom animate-duration-[1000ms]"><a href="./mindbridge"><Image src={card1} className="w-full" /></a></div>
          <div className="animate-fade-bottom animate-duration-[1000ms]"><a href="./crowdafrik"><Image src={card7} className="w-full" /></a></div>
          <div className="animate-fade-bottom animate-duration-[1000ms]"><a href="./lumemedia"><Image src={card8} className="w-full" /></a></div>

         
          <div className="animate-fade-bottom animate-duration-[1000ms]"><a href="https://medium.com/@rohithnairreghu/go-card-design-journey-5ee628a6f398"><Image src={card2} className="w-full" /></a></div>
          <div className="animate-fade-bottom animate-duration-[1000ms]"><a href="https://medium.com/@rohithnairreghu/careershastra-a27acefe94fe"><Image src={card3} className="w-full" /></a></div>
          <div className="animate-fade-bottom animate-duration-[1000ms]"><a href="./lume"><Image src={card4} className="w-full" /></a></div>
          <div className="animate-fade-bottom animate-duration-[1000ms]"><a href="./tv"><Image src={tv} className="w-full" /></a></div>
          <div className="animate-fade-bottom animate-duration-[1000ms]"><a href="./motion"><Image src={card5} className="w-full" /></a></div>
        </div>


        <div className='grid lg:grid-cols-2 gap-4  sm:grid-cols-1 md:grid-cols-2 lg:mt-32 mt-4 text-white'  >
          <div className="pt-12">

            <h2 className="text-3xl text-black font-bold">Experience</h2>

            <div className="my-12">
              <h3 className="text-l lg:text-xl text-gray-800 font-bold">UI Engineer | Product Designer</h3>
              <p className="text-base lg:text-l text-gray-800 font-normal mt-2">FluckAi Limited, London</p>
              <p className="text-base lg:text-l text-gray-800 font-normal mt-2">Decemeber 2023 - Present</p>
            </div>

            <div className="my-12">
              <h3 className="text-l lg:text-xl text-gray-800 font-bold">UI Engineer | Product Designer</h3>
              <p className="text-base lg:text-l text-gray-800 font-normal mt-2">CrowdAfrik Limited, London</p>
              <p className="text-base lg:text-l text-gray-800 font-normal mt-2">July 2023 - Present</p>
            </div>
           
            <div className="my-12">
              <h3 className="text-l lg:text-xl text-gray-800 font-bold">UI Engineer | Digital Designer </h3>
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
              <p className="text-base lg:text-l text-gray-800 font-normal mt-2">2016- 2020</p>
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
