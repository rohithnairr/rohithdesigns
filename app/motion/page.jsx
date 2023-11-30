
import Footer from "../components/footer"
import Navigation from "../components/navbar";

import mockup from "./images/lume.gif"
import Image from "next/image";


export default function Motion
() {
  return (
    <>

      <div className="container mx-auto p-4 lg:p-12 font-jakarta">
        <Navigation />
        <div className="mt-16">
          <Image className="w-auto h-70 mx-auto rounded-xl" style={{ height: 'auto', width: '70%' }}
            src={mockup}
            alt="lume"
          />
        </div>
        <div className='grid grid-cols-1 text-grey-900'>
          <div className='mt-0 lg:mt-10  md:mt-20' data-aos="fade-right">
            <h1 className="font-bold text-2xl  font-Jakarta pb-4 ">Motion Design & UI interactions</h1>
            <p className="font-light text-gray-900 text-base  font-Jakarta">
This test project aims to demonstrate Figma's powerful features in visual interaction design and motion design, showcasing the platform's robust capabilities for crafting dynamic and engaging user experiences.</p>
            <p className="font-light text-gray-900 text-base mt-4  font-Jakarta"><b>Role</b> : Product Designer</p>
           

          </div>
        </div>

     
      </div>
      <Footer />
    </>

  )
}
