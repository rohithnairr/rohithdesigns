
import Footer from "../components/footer"
import Navigation from "../components/navbar";
import banner from "./images/banner.png"
import mockup from "./images/mockup.png"
import Image from "next/image";
import process from "../images/process.png"
import personas from "./images/personaspng.png"
import pain from "./images/pain.png"
import solution from "./images/solution.png"
import ia from "./images/ia.png"
import design from "./images/design.png"
import screen from "./images/mockupweb.png"

export default function Mindbridge() {
  return (
    <>

      <div className="container mx-auto p-4 lg:p-12 font-jakarta">
        <Navigation />
        <div className="mt-36">
          <Image className="w-auto h-70" style={{ height: 'auto', width: '100%' }}
            src={banner}
            alt="lume"
          />
        </div>
        <div className='grid grid-cols-1 text-grey-900'>
          <div className='mt-0 lg:mt-10 mt-10 md:mt-20' data-aos="fade-right">
            <h1 className="font-bold text-2xl  font-Jakarta pb-4 ">Lume Digital</h1>
            <p className="font-light text-gray-100 text-base  font-Jakarta">Drive success by unlocking your brand full potential with data-driven strategies and creative campaigns</p>
            <p className="font-light text-gray-100 text-base mt-4  font-Jakarta"><b>Role</b> : UI/UX Designer & Developer</p>
            <div className="center-contnr">
              <a className="text-base mt-4  text-center py-4 px-4 font-bold text-white gradient-border inline-block " href="https://www.lume-digital.co.uk">Visit Website &#8594;</a>
            </div>

          </div>
        </div>

        <div className='grid lg:grid-cols-2 gap-4 mt-32 sm:grid-cols-1 md:grid-cols-2  text-grey-900'>
          <div>
            <Image className="w-auto h-70 mx-auto" style={{ height: 'auto', width: '70%' }}
              src={mockup}
              alt="lume"
            />
          </div>
          <div className='mt-0 lg:mt-10 md:mt-20' data-aos="fade-right">
            <h1 className="font-bold text-xl font-Jakarta pb-4 ">Introduction</h1>
            <p className="font-light text-l font-Jakarta pb-4 ">
              Lume Digital is a UK-based digital marketing agency that has been providing innovative and result-oriented digital solutions to businesses across various industries. With a focus on leveraging the power of the digital landscape, Lume Digital has carved a niche for itself in the competitive market.</p>
          </div>
        </div>


        <div className='grid grid-cols-1 text-grey-900'>
          <div className='mt-8 lg:mt-24 md:mt-20' data-aos="fade-right">
            <p className="font-light text-gray-100 text-base  font-Jakarta"><span className="font-bold">Client</span> : Lume Digital</p>
            <p className="font-light text-gray-100 text-base mt-4  font-Jakarta"><span className="font-bold">Industry</span> : Digital Marketing</p>
            <p className="font-light text-gray-100 text-base mt-4  font-Jakarta"><span className="font-bold">Challenges</span> :  Outdated website design, poor user experience, and a need for a visually appealing and modern online presence.</p>
          </div>
        </div>

        <div className='grid grid-cols-1 text-grey-900'>
          <div className='mt-8 lg:mt-24 md:mt-20' data-aos="fade-right">
            <h1 className="font-bold text-xl font-Jakarta pb-8 ">Objectives</h1>
            <p className="font-light text-gray-100 text-base  font-Jakarta"> &#128170; Enhance User Experience </p>
            <p className="font-light text-gray-100 text-base mt-4  font-Jakarta">&#x2705; Modernize Visual Identity</p>
            <p className="font-light text-gray-100 text-base mt-4  font-Jakarta">&#128681; Optimize for Conversion</p>
            <p className="font-light text-gray-100 text-base mt-4  font-Jakarta">&#127775; Maintain Brand Consistency</p>
          </div>
        </div>

        <div className='grid grid-cols-1 text-grey-900'>
          <div className='mt-8 lg:mt-24 md:mt-20' data-aos="fade-right">
            <h1 className="font-bold text-xl font-Jakarta pb-4 ">Design Process:</h1>

            <div className="mx-auto"><Image
              className="mx-auto w-fit mb-16"
              src={process}
              alt={'main image'}
            /></div>
            <div>
              <p className="font-bold text-gray-100 text-lg  font-Jakarta">Research and Discovery</p>
              <p className="font-light text-gray-100 text-base mt-8  font-Jakarta">The extensive research and discovery phase established a solid foundation for the design process. Lume Digital's commitment to understanding Company's brand, audience, and market dynamics ensured that the subsequent design decisions were not only visually appealing but also strategically aligned with the client's goals and user expectations.</p>
              <div>
                <p className="font-light text-gray-100 text-base mt-16  font-Jakarta">I’ve conducted half moderated face-to-face interviews to understand the goals, needs and pain points of the users.</p>
                <Image className="w-auto h-70 mx-auto" style={{ height: 'auto', width: '100%' }}
                  src={personas}
                  alt="lume"
                />
              </div>
            </div>
          </div>
        </div>

        <div  className='grid grid-cols-1 text-grey-900'>
        <p className="font-bold text-gray-100 text-lg  font-Jakarta">Define</p>
        <p className="font-bold text-gray-100 text-base mt-8  font-Jakarta">Pain Points & Key Features</p>
        <p className="font-light text-gray-100 text-base mt-8  font-Jakarta">Based on interviews and research to understand the goals, needs and the pain points of the users.</p>
        </div>

        <div  className='grid lg:grid-cols-2 gap-4 md:grid-cols-2 grid-cols-1 mx-auto '>
        <div>
        <Image className="w-auto h-70 mx-auto" style={{ height: 'auto', width: '100%' }}
                  src={pain}
                  alt="lume"
                />
        </div>
        <div>
        <Image className="w-auto h-70 mx-auto" style={{ height: 'auto', width: '100%' }}
                  src={solution}
                  alt="lume"
                />
        </div>
        </div>



        <div className='grid grid-cols-1 text-grey-900'>
          <div className='mt-8 lg:mt-24 md:mt-20' data-aos="fade-right">
    
            <div>
              <p className="font-bold text-gray-100 text-lg  font-Jakarta">Ideate</p>
              <p className="font-light text-gray-100 text-base mt-8  font-Jakarta">Following in-depth research, a set of tailored solutions has been crafted to address identified challenges. This is underpinned by a refined information architecture, optimizing processes and resource utilization, ensuring adaptability and scalability. The result is a comprehensive solution poised for current challenges and future growth.</p>
              <div>

                <Image className="w-auto h-70 mx-auto mt-24" style={{ height: 'auto', width: '60%' }}
                  src={ia}
                  alt="lume"
                />
              </div>
            </div>
          </div>
        </div>



        <div className='grid grid-cols-1 text-grey-900'>
          <div className='mt-8 lg:mt-24 md:mt-20' data-aos="fade-right">
    
            <div>
              <p className="font-bold text-gray-100 text-lg  font-Jakarta">Design</p>
              <p className="font-light text-gray-100 text-base mt-8  font-Jakarta">Design System</p>
              <div>

                <Image className="w-auto h-70 mx-auto mt-24" style={{ height: 'auto', width: '100%' }}
                  src={design}
                  alt="lume"
                />
              </div>
            </div>
          </div>
        </div>

        <div className='grid grid-cols-1 text-grey-900'>
          <div className='mt-8 lg:mt-24 md:mt-20' data-aos="fade-right">
    
            <div>
              <p className="font-bold text-gray-100 text-lg  font-Jakarta">Screens</p>
             
              <div>

                <Image className="w-auto h-70 mx-auto mt-24" style={{ height: 'auto', width: '70%' }}
                  src={screen}
                  alt="lume"
                />
              </div>
            </div>
          </div>
        </div>


      </div>
      <Footer />
    </>

  )
}
