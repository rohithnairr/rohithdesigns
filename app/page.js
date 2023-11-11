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

export default function Home() {
  return (
    <>
      <Navigation />
      <div className="container mx-auto p-4 lg:p-12 animate-fade-up">

        <div className="grid lg:grid-cols-2 gap-4 mt-16 sm:grid-cols-1 md:grid-cols-2  text-grey-900">
          <div className="mt-8 lg:mt-32 md:mt-20" data-aos="fade-right">
            <h1 className="font-bold text-white text-4xl lg:text-5xl font-Jakarta pb-4 animate-flip-up  ">Rohith Nair Reghu</h1>
            <p className="pb-10 text-gray-100 max-w-sm font-thin font-Jakarta text-2xl">Product Designer || Front-End Developer</p>
            <p className=" pb-14 text-gray-100 max-w-lg font-thin font-Jakarta text-l">With four years of experience in the field of designing and development, I'm committed to uniting people and technology, harnessing its potential to empower individuals, and driving positive change in society.</p>

            <a className="text-l mt-8 font-Jakarta font-bold text-white px-8 py-4 bg-gradient-to-r from-red-500 to-orange-500 rounded-3xl" href="mailto:rohithnairreghu@gmail.com">Connect with me &nbsp;	&#128640;</a>
          </div>
          <div className="mt-32 lg:mt-0">
            <Image
              className="max-w-xl max-h-l mx-auto w-fit  md:w-fit lg:w-screen animate-infinite animate-wiggle"
              src={image1}
              alt="image"
            />
          </div>

        </div>



        <div className="grid lg:p-12 p-4 lg:grid-cols-2 gap-4 rounded-xl mt-32 sm:grid-cols-1 md:grid-cols-2 bg-gradient-to-r from-blue-800 to-indigo-900 shadow-2xl text-grey-900">
          <div className="" data-aos="fade-right">
            <div className="carousel rounded-box w-full">
              <div className="carousel-item w-full">
                <Image
                  className="carousel-item w-full "
                  src={lume}
                  alt="image"
                />
              </div>
              <div className="carousel-item w-full">
                <Image
                  className="  "
                  src={mindbridge}
                  alt="image"
                />
              </div>
              <div className="carousel-item w-full">
                <Image
                  className="  "
                  src={raft}
                  alt="image"
                />
              </div>


            </div>

          </div>
          <div className="mt-4 lg:mt-26">
            <h1 className="font-bold text-gray-200 text-4xl lg:text-5xl font-Jakarta pb-4 animate-flip-up  ">Upcoming Works</h1>
    
            <p className=" text-gray-200 max-w-lg font-thin font-Jakarta  text-l">These are the projects I have in the pipeline, and they are currently progressing through various stages of development. They are in the initial phases of ideation, where we are brainstorming and conceptualizing the core ideas. I am also actively involved in the design phase, shaping the products or solutions based on these ideas. Additionally, I am diligently conducting usability tests to ensure that the final outcomes align perfectly with user expectations and needs.</p>
          </div>

        </div>
        <div className="mt-40 font-Jakarta font-bold text-white text-3xl">
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

        <div className="grid lg:grid-cols-4 gap-4 sm:grid-cols-1 md:grid-cols-2 bg-[conic-gradient(at_right,_var(--tw-gradient-stops))] from-indigo-200 via-slate-600 to-indigo-200 p-4 mt-72 rounded-lg text-black ">
          <div className="my-8">
            <h3 className="text-black font-Jakarta font-semibold text-5xl text-center">4+</h3>
            <p className="text-black text-center font-light mt-4 text-l"> Years Of Experience</p>
          </div>
          <div className="my-8">
            <h3 className="text-black font-Jakarta font-semibold text-5xl text-center">50+</h3>
            <p className="text-black text-center font-light mt-4 text-l">Design Projects</p>
          </div>
          <div className="my-8">
            <h3 className="text-black font-Jakarta font-semibold text-5xl text-center">30+</h3>
            <p className="text-black text-center font-light mt-4 text-l">Development Projects</p>
          </div>
          <div className="my-8">
            <h3 className="text-black font-Jakarta font-semibold text-5xl text-center">20+</h3>
            <p className="text-black text-center font-light mt-4 text-l">Collaborations</p>
          </div>
        </div>





        <div className="grid grid-cols-1 lg:mt-16 md:mt-8 sm:mt-4 animate-fade-up" id="services">
          <h2 className="font-bold text-white text-2xl lg:text-4xl font-Jakarta mt-24 pb-4 lg:mt-32 max-w-l animate-fade-up animate-flip-up  ">
            Expertise in
          </h2>
        </div>
        <div className="grid lg:grid-cols-3 gap-4 mt-16 sm:grid-cols-1 md:grid-cols-2  text-grey-900 mx-auto">
          <div className="mx-auto text-center p-8">
            <Image
              className="max-w-l max-h-l mx-auto animate-bounce"
              src={dev}
              alt="image"
            />
            <div className="mx-auto mt-8">
              <h3 className="text-center font-bold text-xl ">Front- End Development</h3>
              <p className="w-base text-center mt-4 font-thin text-gray-200">Highly skilled in cutting-edge front-end technologies, including React.Js, Next.Js, HTML, CSS, and JavaScript.</p>
            </div>

          </div>
          <div className="mx-auto text-center p-8">
            <Image
              className="max-w-l max-h-l mx-auto animate-bounce"
              src={design}
              alt="image"
            />
            <div className="mx-auto mt-8">
              <h3 className="text-center font-bold text-xl">UI/UX Design</h3>
              <p className="w-base text-center mt-4 font-thin text-gray-200">Crafting intuitive UI/UX solutions to enhance your digital experiences, ensuring your users have a seamless journey on your website or app.</p>
            </div>

          </div>
          <div className="mx-auto text-center p-8">
            <Image
              className="max-w-l max-h-l mx-auto animate-bounce"
              src={graphic}
              alt="image"
            />
            <div className="mx-auto mt-8">
              <h3 className="text-center font-bold text-xl">Graphic Design</h3>
              <p className="w-base text-center mt-4 font-thin text-gray-200">Transform your brand&quot;s identity into captivating visual stories with our expert graphic design services, delivering stunning graphics and visuals.</p>
            </div>
          </div>

        </div>
        <div className="grid lg:grid-cols-3 gap-4 mt-8 sm:grid-cols-1 md:grid-cols-2  text-grey-900 mx-auto">
          <div className="mx-auto text-center p-8">
            <Image
              className="max-w-l max-h-l mx-auto animate-bounce"
              src={motion}
              alt="image"
            />
            <div className="mx-auto mt-8">
              <h3 className="text-center font-bold text-xl">User Research</h3>
              <p className="w-base text-center mt-4 font-thin text-gray-200">Unraveling user needs and behaviors to create intuitive and accessible designs.</p>
            </div>

          </div>
          <div className="mx-auto text-center p-8">
            <Image
              className="max-w-l max-h-l mx-auto animate-bounce"
              src={photo}
              alt="image"
            />
            <div className="mx-auto  mt-8">
              <h3 className="text-center font-bold text-xl">Photography</h3>
              <p className="w-base text-center mt-4 font-thin text-gray-200">Photography is my passion, a means to capture fleeting moments and transform travel experiences into enduring memories.</p>
            </div>

          </div>
          <div className="mx-auto text-center p-8">
            <Image
              className="max-w-l max-h-l mx-auto animate-bounce"
              src={video}
              alt="image"
            />
            <div className="mx-auto  mt-8">
              <h3 className="text-center font-bold text-xl">Usability Testing</h3>
              <p className="w-base text-center mt-4 font-thin text-gray-200">The journey of creating an app or website doesn't end with deployment. It's an ongoing process of continuous improvement through user feedback and usability testing.</p>
            </div>
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
