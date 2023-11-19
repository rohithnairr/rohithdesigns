import Image from "next/image";
import image1 from "./images/image1.png"
import crowdafrik from "./images/crowdafrik.png"
import indegene from "./images/indegene.png"
import techenut from "./images/lume.png"
import glass from "./images/glass.png"
import circle from "./images/circle.png"
import triangle from "./images/traingle.png"
import square from "./images/square.png"
import Works from "./components/recentworks"
import Blog from "./components/blogs"
import Footer from "./components/footer"
import Navigation from "./components/navbar";
import dev from './images/development.png'
import design from './images/design.png'
import motion from './images/motion.png'
import graphic from './images/graphic.png'
import video from './images/video.png'
import photo from './images/photo.png'
import lume from './images/lumedigital.png'
import mindbridge from './images/mindbridge-p.png'
import raft from './images/raft.png'
import process from './images/process.png'
import process_one from './images/process_one.png'
import process_two from './images/process_two.png'
import process_three from './images/process_three.png'
import process_four from './images/process_four.png'
import Gui from "./components/gui"

export default function Home() {
  return (
    <>

      <div className="container mx-auto p-4 lg:p-12 font-jakarta">
        <Navigation />

        <div className="grid grid-cols-1 gap-4 mt-16 text-grey-900">
          <div className="mt-8 lg:mt-32 md:mt-20" data-aos="fade-right">
            <div className="bg-gradient-to-r from-rose-700 to-orange-500 text-transparent bg-clip-text">
              <h1 className="font-extrabold  text-4xl lg:text-7xl text-center  pb-10 animate-fade-up animate-duration-[3000ms]  font-jakarta">Let me tell you a story.</h1>
            </div>
            <p className="pb-5 text-gray-100  text-center font-thin font-jakarta  text-base lg:text-2xl animate-fade-up animate-duration-[3000ms] ">Product Designer || Front-End Developer</p>
            <p className=" pb-10 text-gray-400 max-w-lg mx-auto font-jakarta text-center font-thin  text-base animate-fade-up animate-duration-[3000ms] ">A passionate Designer and developer with years of experience in creating intuitive user friendly designs.</p>
            <div className="center-container">
              <a className="text-base mt-8 text-center  font-bold text-white px-8 py-4 gradient-border inline-block animate-fade-up animate-duration-[3000ms]  " href="mailto:rohithnairreghu@gmail.com">Connect with me &nbsp;	&#128640;</a>
            </div>
          </div>

        </div>


        <div className="" id="Casestudies">
          <div className="bg-gradient-to-r from-rose-400 to-orange-500 text-transparent bg-clip-text">
            <h2 className="text-4xl font-bold text-center mt-24">Case Studies</h2>
          </div>
          <div className='grid grid-cols-1 mt-24 text-white'  >
            <div className="mx-auto"><Image
              className="mx-auto w-full"
              src={process}
              alt={'main image'}
            /></div>
          </div>

          <Works />
        </div>

        <div className="mt-40 font-Jakarta font-bold text-3xl " id="gui" >
          <div className="bg-gradient-to-r from-rose-400 to-orange-500 text-transparent bg-clip-text">
            <h2 className="text-4xl font-bold text-center mt-24">GUI</h2>
          </div>
          <Gui />
        </div>

        <div className='grid lg:grid-cols-2 gap-4  sm:grid-cols-1 md:grid-cols-2 lg:mt-52 mt-44 text-white'  >
          <div className="pt-12">
            <div className="bg-gradient-to-r from-rose-400 to-orange-500 text-transparent bg-clip-text">
              <h2 className="text-4xl font-bold">Experience</h2>
            </div>
            <div className="my-12">
              <h3 className="text-l lg:text-xl font-bold">Senior product Designer | Front-End Developer</h3>
              <p className="text-base lg:text-l text-gray-400 font-normal mt-2">CrowdAfrik Private Limited, London</p>
              <p className="text-base lg:text-l text-gray-400 font-normal mt-2">June 2023 - Present</p>
            </div>
            <div className="my-12">
              <h3 className="text-l lg:text-xl font-bold">Mid-Senior UI/UX Designer </h3>
              <p className="text-base lg:text-l text-gray-400 font-normal mt-2">The Elmex Technologies, London</p>
              <p className="text-base lg:text-l text-gray-400 font-normal mt-2">November 2022 - June 2023</p>
            </div>
            <div className="my-12">
              <h3 className="text-l lg:text-xl font-bold">UI/UX Developer </h3>
              <p className="text-base lg:text-l text-gray-400 font-normal mt-2">Indegene Private Limited, India</p>
              <p className="text-base lg:text-l text-gray-400 font-normal mt-2">June 2021 - July 2023</p>
            </div>
            <div className="my-12">
              <h3 className="text-l lg:text-xl font-bold">Product Designer</h3>
              <p className="text-base lg:text-l text-gray-400 font-normal mt-2">The Float Business Accelerator, India</p>
              <p className="text-base lg:text-l text-gray-400 font-normal mt-2">2020 - 2021</p>
            </div>

          </div>
          <div className="pt-12">
            <div className="bg-gradient-to-r from-rose-400 to-orange-500 text-transparent bg-clip-text">
              <h2 className="text-4xl font-bold">Education</h2>
            </div>
            <div className="my-12">
              <h3 className="text-l lg:text-xl font-bold">Master’s in Web Design and Content Planning</h3>
              <p className="text-base lg:text-l text-gray-400 font-normal mt-2">University of Greenwich, United Kingdom</p>
              <p className="text-base lg:text-l text-gray-400 font-normal mt-2">2022- 2023</p>
            </div>
            <div className="my-12">
              <h3 className="text-l lg:text-xl font-bold">Bachelor’s in Computer Engineering</h3>
              <p className="text-base lg:text-l text-gray-400 font-normal mt-2">Amrita School of Engineering, India</p>
              <p className="text-base lg:text-l text-gray-400 font-normal mt-2">2022- 2023</p>
            </div>
          </div>
        </div>


        <div className="mt-40 font-Jakarta font-bold text-3xl">
          <div className="bg-gradient-to-r from-rose-400 to-orange-500 text-transparent bg-clip-text">
            <h2 className="text-4xl font-bold text-center mt-24">Blogs</h2>
          </div>
          <Blog />
        </div>



     

        

      </div>
      <Footer />
    </>

  )
}
