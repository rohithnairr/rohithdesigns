import Image from "next/image";
import image1 from "./images/image1.png"
import crowdafrik from "./images/crowdafrik.png"
import indegene from "./images/indegene.png"
import techenut from "./images/techenut.png"
import glass from "./images/glass.png"
import circle from "./images/circle.png"
import triangle from "./images/traingle.png"
import square from "./images/square.png"
import Works from "./components/recentworks"
import Blog from "./components/blogs"
import Footer from "./components/footer"

export default function Home() {
  return (
    <>

      <div className='container mx-auto p-4'>

        <div className='grid lg:grid-cols-2 gap-4 mt-16 sm:grid-cols-1 md:grid-cols-2  text-grey-900'>
          <div className='mt-0 lg:mt-10 md:mt-20' data-aos="fade-right">
            <h1 className="font-bold text-gray-900  text-4xl lg:text-5xl font-Jakarta pb-4 ">Hey !</h1>
            <h1 className="font-bold text-gray-900 text-4xl lg:text-5xl font-Jakarta">I’m Rohith Nair</h1>
            <h2 className="text-2xl text-gray-900 pt-2 d font-Jakarta">Product Designer || Developer </h2>
            <p className="pt-5 pb-14 text-gray-900 max-w-l font-thin font-Jakarta text-l">With four years of experience in the field of designing and development, I'm committed to uniting people and technology, harnessing its potential to empower individuals, and driving positive change in society.</p>
            <a className="text-xl mt-8 font-Jakarta font-semibold bg-black text-white px-8 py-4" href="mailto:rohithnairreghu@gmail.com">Contact &#8594;</a>
          </div>

        </div>

        <div className="mt-40 font-Jakarta font-bold text-gray-900 text-3xl">
          <h1> Recent works</h1>
          <Works />
        </div>

        <div className='grid lg:grid-cols-4 gap-4  sm:grid-cols-1 md:grid-cols-2 mt-48 text-white'  >
          <div className="pt-12"><Image
            className="max-w-sm h-auto mx-auto"
            src={crowdafrik}
            alt={'main image'}
          /></div>
          <div className="pt-12"><Image
            className="max-w-sm h-auto mx-auto lg:mt-8"
            src={indegene}
            alt={'main image'}
          /></div>
          <div className="pt-12"><Image
            className="max-w-sm h-auto mx-auto lg:mt-8"
            src={techenut}
            alt={'main image'}
          /></div>
          <div className="pt-12"><Image
            className="max-w-sm h-auto mx-auto lg:mt-4"
            src={glass}
            alt={'main image'}
          /></div>
        </div>

        <div className="grid lg:grid-cols-4 gap-4 sm:grid-cols-1 md:grid-cols-2 bg-gray-900 p-4 mt-72 text-white ">
          <div className="my-8">
            <h3 className="text-white font-Jakarta font-semibold text-5xl text-center">4+</h3>
            <p className="text-white text-center font-light mt-4 text-l"> Years Of Experience</p>
          </div>
          <div className="my-8">
            <h3 className="text-white font-Jakarta font-semibold text-5xl text-center">50+</h3>
            <p className="text-white text-center font-light mt-4 text-l">Design Projects</p>
          </div>
          <div className="my-8">
            <h3 className="text-white font-Jakarta font-semibold text-5xl text-center">30+</h3>
            <p className="text-white text-center font-light mt-4 text-l">Development Projects</p>
          </div>
          <div className="my-8">
            <h3 className="text-white font-Jakarta font-semibold text-5xl text-center">20+</h3>
            <p className="text-white text-center font-light mt-4 text-l">Collaborations</p>
          </div>
        </div>


        <div className="mt-40 font-Jakarta font-bold text-3xl">
          <h1> Blogs</h1>
          <Blog />
        </div>

      </div>
      <Footer />
    </>

  )
}
