
import Footer from "../components/footer"
import Navigation from "../components/navbar";
import banner from "./images/banner.png"
import mockup from "./images/mockup.png"
import Image from "next/image";
import process from "../images/Process.svg"
import questions from "./images/questions.webp"
import pain from "./images/painpoint.webp"
import solution from "./images/solution.png"
import ia from "./images/ia.webp"
import design from "./images/design.webp"
import screen from "./images/screen.png"
import screen1 from "./images/screen1.png"
import screen2 from "./images/screen2.png"
import persona1 from "./images/persona1.webp"
import persona2 from "./images/persona2.webp"
import Wireframe from "./images/wireframe.webp"

export default function Mindbridge() {
  return (
    <>

      <div className="container mx-auto p-4 lg:p-12 font-jakarta animate-fade-up">
        <Navigation />
        <div className="mt-16">
          <Image className="w-auto h-70 rounded-xl mx-auto" style={{ height: 'auto', width: '70%' }}
            src={banner}
            alt="lume"
          />
        </div>
        <div className='grid grid-cols-1 text-grey-900'>
          <div className='mt-0 lg:mt-10  md:mt-20 animate-fade-up ' data-aos="fade-right">
            <h1 className="font-bold text-2xl  font-Jakarta pb-4 ">MindBridge</h1>
            <p className="font-light text-gray-900 text-base  font-Jakarta">The Mindbridge mobile application is a pioneering solution with the ambitious goal of transforming the landscape of mental health care by offering immediate and hassle-free access to leading psychiatrists in India. This comprehensive UI/UX case study is dedicated to a thorough exploration of the app’s design and the user experience it delivers, shedding light on the thoughtfully crafted interface and its impact on facilitating accessible, secure, and convenient mental health support for users in need.</p>
            <p className="font-light text-gray-900 text-base mt-4  font-Jakarta"><b>Role</b> : UI/UX Designer & Developer</p>

            <div className="center-contnr">
              <a className="text-base mt-8  text-center py-4 px-12 bg-black font-bold text-white rounded-3xl  inline-block " href="https://medium.com/@rohithnairreghu/mindbridge-44fa335c8bd0">Read full research &#8594;</a>
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
            <h1 className="font-bold text-xl font-Jakarta pb-4 animate-fade-up">Introduction</h1>
            <p className="font-light text-l font-Jakarta pb-4 ">
            The Mindbridge mobile application is a pioneering solution with the ambitious goal of transforming the landscape of mental health care by offering immediate and hassle-free access to leading psychiatrists in India. This comprehensive UI/UX case study is dedicated to a thorough exploration of the app’s design and the user experience it delivers, shedding light on the thoughtfully crafted interface and its impact on facilitating accessible, secure, and convenient mental health support for users in need.</p>
          </div>
        </div>


        <div className='grid grid-cols-1 text-grey-900 animate-fade-up'>
          <div className='mt-8 lg:mt-24 md:mt-20' data-aos="fade-right">
            <p className="font-light text-gray-900 text-base  font-Jakarta"><span className="font-bold">Client</span> : MindBridge</p>
            <p className="font-light text-gray-900 text-base mt-4  font-Jakarta"><span className="font-bold">Industry</span> : Health Care</p>
            <p className="font-light text-gray-900 text-base mt-4  font-Jakarta"><span className="font-bold">Challenges</span> : Create some user friendly interfaces for a mental health care.</p>
          </div>
        </div>

        <h1 className="font-bold text-xl font-Jakarta pb-8 mt-24 ">Outcome</h1>
        <div className='grid lg:grid-cols-2 gap-4 sm:grid-cols-1 md:grid-cols-2  text-grey-900'>
          <div>
         
          <h1 className="font-bold text-2xl font-Jakarta pb-4 ">19%</h1>
          <p className="font-light text-gray-900 text-base  font-Jakarta"> Increase in the conversion rate</p>


          </div>
          <div className='' data-aos="fade-right">
          <h1 className="font-bold text-2xl font-Jakarta pb-4 ">23%</h1>
          <p className="font-light text-gray-900 text-base  font-Jakarta"> Increase in the User Engagement Rate</p>
          </div>
        </div>


        <div className='grid grid-cols-1 text-grey-900 animate-fade-up'>
          <div className='mt-8 lg:mt-24 md:mt-20' data-aos="fade-right">
            <h1 className="font-bold text-xl font-Jakarta pb-8 ">Objectives</h1>
            <p className="font-light text-gray-900 text-base  font-Jakarta"> &#128170; Enhance User Experience </p>
            <p className="font-light text-gray-900 text-base mt-4  font-Jakarta">&#x2705; Modernize Visual Identity</p>
            <p className="font-light text-gray-900 text-base mt-4  font-Jakarta">&#128681; Optimize for Conversion</p>
            <p className="font-light text-gray-900 text-base mt-4  font-Jakarta">&#127775; Maintain Brand Consistency</p>
          </div>
        </div>

        <div className='grid grid-cols-1 text-grey-900 animate-fade-up'>
          <div className='mt-8 lg:mt-24 md:mt-20' data-aos="fade-right">
            <h1 className="font-bold text-xl font-Jakarta pb-4 ">Design Process:</h1>

            <div className="mx-auto"><Image
              className="mx-auto w-fit mb-16"
              src={process}
              alt={'main image'}
            /></div>
            <div>
              <p className="font-bold text-gray-900 text-lg  font-Jakarta">Understanding the Problem</p>
              <p className="font-light text-gray-900 text-base mt-8  font-Jakarta">Globally, accessing timely and effective mental health care remains a significant challenge, characterized by long waiting times and convoluted appointment processes. The absence of a user-friendly and accessible platform for individuals to connect with top psychiatrists hinders their ability to seek immediate support for their mental health concerns. To bridge this gap, there is an urgent need for an innovative mobile application that not only provides on-demand access to renowned psychiatrists but also ensures the utmost privacy and security, thereby revolutionizing mental health care delivery worldwide. This problem statement forms the foundation for the development of the Mindbridge application.</p>
              
              <p className="font-bold text-gray-900 text-lg mt-12  font-Jakarta">Solution</p>
              <p className="font-light text-gray-900 text-base mt-8  font-Jakarta">To address the global challenge of accessing timely and effective mental health care, we propose the creation of the Mindbridge mobile application. Mindbridge aims to revolutionize mental health care by providing a comprehensive solution that offers on-demand access to top psychiatrists worldwide, overcoming the barriers of long waiting times and complex appointment processes. The application will be designed with a user-friendly interface, ensuring ease of use for individuals seeking immediate support for their mental health concerns.</p>
             
              <p className="font-bold text-gray-900 text-lg mt-12  font-Jakarta">User Research</p>
              <p className="font-light text-gray-900 text-base mt-8  font-Jakarta">Conducting a range of user research methods is imperative for an app like Mindbridge, which seeks to offer immediate access to top psychiatrists while emphasizing user-friendliness, privacy, and security. I have already conducted research that has yielded valuable data and steered our project in the right direction.</p>

              <p className="font-bold text-gray-900 text-lg mt-12  font-Jakarta">User Surveys</p>
              <p className="font-light text-gray-900 text-base mt-8  font-Jakarta">I initiated a comprehensive user survey as the foundational cornerstone of our research efforts, serving as the essential starting point to establish a baseline understanding for the Mindbridge app. This survey not only paved the way for subsequent in-depth research phases but also yielded valuable quantitative data that is instrumental in making informed decisions, particularly in shaping the main features and functionalities of the app. The insights gathered from this survey are invaluable in guiding the strategic direction of our mission to transform mental health care.</p>

              <div>
                <p className="font-light text-gray-900 text-base mt-16  font-Jakarta">The questions in the forms are :</p>
                <Image className="w-auto mt-16 h-70 mx-auto" style={{ height: 'auto', width: '70%' }}
                  src={questions}
                  alt="lume"
                />
               <ul>
        <li>1. How satisfied are you with the accessibility of mental health care services in your area?</li>
        <li>2. What features would you consider most important in a mental health app? (Select up to three)</li>
        <li>3. How important is the security and privacy of your data when using a mental health app?</li>
        <li>4. How quickly would you prefer to connect with a mental health professional in times of need?</li>
        <li>5. Would you be more likely to use a mental health app that provides 24/7 access to professionals, even during weekends and holidays?</li>
        <li>6. What are the main challenges you face when seeking mental health care? (Select up to three)</li>
      
        <li>
          <p>7. Is there anything else you would like to share about your mental health care needs, preferences, or experiences? [Open-ended]</p>
          {/* Add an open-ended text input here */}
        </li>
      </ul>

      <p className="font-bold text-gray-900 text-lg mt-12  font-Jakarta">User personas</p>
              <p className="font-light text-gray-900 text-base mt-8 mb-8 font-Jakarta">I’ve gathered data on user personas from individuals with diverse backgrounds and perspectives, allowing me to gain valuable insights into their behavior, preferences, and needs. This comprehensive dataset has been instrumental in uncovering patterns and trends that inform the design and development of the Mindbridge app.
</p>
<div className="grid lg:grid-cols-2 grid-cols-1 gap-2 mb-16 animate-fade-up" >
  <div>
<Image className="w-auto mt-16 h-70 mx-auto" style={{ height: 'auto', width: '100%' }}
                  src={persona1}
                  alt="lume"
                />
                </div>
                <div>
<Image className="w-auto mt-16 h-70 mx-auto" style={{ height: 'auto', width: '100%' }}
                  src={persona2}
                  alt="lume"
                />
                </div>
                </div>

              </div>
            </div>
          </div>
        </div>

        <div  className='grid grid-cols-1 text-grey-900 animate-fade-up'>
        <p className="font-bold text-gray-900 text-lg  font-Jakarta">Define</p>
        <p className="font-bold text-gray-900 text-base mt-8  font-Jakarta">Pain Points & Key Features</p>
        <p className="font-light text-gray-900 text-base mt-8  font-Jakarta">Based on interviews and research to understand the goals, needs and the pain points of the users.</p>
        </div>

        <div  className='grid  grid-cols-1 mx-auto '>
        <div>
        <Image className="w-auto mx-auto h-70  mt-16" style={{ height: 'auto', width: '70%' }}
                  src={pain}
                  alt="lume"
                />
        </div>
        
        </div>



        <div className='grid grid-cols-1 text-grey-900 animate-fade-up'>
          <div className='mt-8 lg:mt-24 md:mt-20' data-aos="fade-right">
    
            <div>
              <p className="font-bold text-gray-900 text-lg  font-Jakarta">Ideate</p>
              <p className="font-light text-gray-900 text-base mt-8  font-Jakarta">Following in-depth research, a set of tailored solutions has been crafted to address identified challenges. This is underpinned by a refined information architecture, optimizing processes and resource utilization, ensuring adaptability and scalability. The result is a comprehensive solution poised for current challenges and future growth.</p>
              <div>

                <Image className="w-auto h-70 mx-auto mt-24" style={{ height: 'auto', width: '60%' }}
                  src={ia}
                  alt="lume"
                />
              </div>
            </div>
          </div>
        </div>



        <div className='grid grid-cols-1 text-grey-900 animate-fade-up'>
          <div className='mt-8 lg:mt-24 md:mt-20' data-aos="fade-right">
    
            <div>
              <p className="font-bold text-gray-900 text-lg  font-Jakarta">Design</p>

              <p className="font-light text-gray-900 text-base mt-8  font-Jakarta">Wireframe</p>
              <div>

                <Image className="w-auto h-70 mx-auto mt-4" style={{ height: 'auto', width: '70%' }}
                  src={Wireframe}
                  alt="wireframe"
                />
              </div>
              <p className="font-light text-gray-900 text-base mt-16  font-Jakarta">Design System</p>
              <div>

                <Image className="w-auto h-70 mx-auto mt-8 " style={{ height: 'auto', width: '100%' }}
                  src={design}
                  alt="lume"
                />
              </div>
            </div>
          </div>
        </div>

        <div className='grid grid-cols-1 text-grey-900 animate-fade-up'>
          <div className='mt-8 lg:mt-24 md:mt-20' data-aos="fade-right">
    
            <div>
              <p className="font-bold text-gray-900 text-lg  font-Jakarta">Screens</p>
             
              <div>

                <Image className="w-auto h-70 mx-auto mt-24" style={{ height: 'auto', width: '70%' }}
                  src={screen}
                  alt="lume"
                />
                  <Image className="w-auto h-70 mx-auto mt-24" style={{ height: 'auto', width: '70%' }}
                  src={screen1}
                  alt="lume"
                />
                   <Image className="w-auto h-70 mx-auto mt-24" style={{ height: 'auto', width: '70%' }}
                  src={screen2}
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
