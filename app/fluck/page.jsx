
import Footer from "../components/footer"
import Navigation from "../components/navbar";
import banner from "./images/top.png"
import mockup from "./images/mockup.png"
import Image from "next/image";
import process from "../images/Process.svg"
import questions from "./images/questions.png"
import pain from "./images/painpoint.png"
import empathy from "./images/empathy.png"
import ia from "./images/ia.png"
import design from "./images/design.svg"
import screen from "./images/screen1.png"


import persona1 from "./images/persona1.png"
import persona2 from "./images/persona2.png"
import Wireframe from "./images/wireframe.png"

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
            <h1 className="font-bold text-2xl  font-Jakarta pb-4 ">FLUCK</h1>
            <p className="font-light text-gray-900 text-base  font-Jakarta">FLUCK, the app that redefines nearby transactions, seamlessly combines convenience, security, and social engagement. This innovative payment platform simplifies bill splitting, enables instant payments, and provides personalized deals based on your location. With features like private transactions and integrated chat, FLUCK not only streamlines financial interactions but also enhances the social aspect of payments. Say goodbye to the complexities of splitting bills and welcome the ease and connectivity of FLUCK—a new era in proximity-based payments.</p>
            <p className="font-light text-gray-900 text-base mt-4  font-Jakarta"><b>Role</b> : Product Designer</p>

  

            
          </div>
        </div>

        <div className='grid lg:grid-cols-2 gap-4 mt-32 sm:grid-cols-1 md:grid-cols-2  text-grey-900'>
          <div>
            <Image className="w-auto h-70 mx-auto" style={{ height: 'auto', width: '40%' }}
              src={mockup}
              alt="lume"
            />
          </div>
          <div className='mt-0 lg:mt-10 md:mt-20' data-aos="fade-right">
            <h1 className="font-bold text-xl font-Jakarta pb-4 animate-fade-up">Introduction</h1>
            <p className="font-light text-l font-Jakarta pb-4 ">
            FLUCK is a cutting-edge proximity-based financial application designed to revolutionize the way people handle transactions with friends and contacts in their vicinity. With a focus on privacy, security, and seamless user experience, FLUCK brings a new dimension to social financial interactions.</p>
          </div>
        </div>


        <div className='grid grid-cols-1 text-grey-900 animate-fade-up'>
          <div className='mt-8 lg:mt-24 md:mt-20' data-aos="fade-right">
            <p className="font-light text-gray-900 text-base  font-Jakarta"><span className="font-bold">Client</span> : CrowdAfrik</p>
            <p className="font-light text-gray-900 text-base mt-4  font-Jakarta"><span className="font-bold">Industry</span> : Fintech</p>
            <p className="font-light text-gray-900 text-base mt-4  font-Jakarta"><span className="font-bold">Challenges</span> : Creating aethetic and intuitive designs to integrate different financial analytical tools</p>
          </div>
        </div>

        <div className='grid grid-cols-1 text-grey-900 animate-fade-up'>
          <div className='mt-8 lg:mt-24 md:mt-20' data-aos="fade-right">
            <h1 className="font-bold text-xl font-Jakarta pb-8 ">Objectives</h1>
            <p className="font-light text-gray-900 text-base  font-Jakarta"> &#128170; Create Intuitive Designs</p>
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
              <p className="font-light text-gray-900 text-base mt-8  font-Jakarta">The challenge arises when individuals attempt to transfer money to friends in close proximity, accompanied by a notable lack of privacy. Many users express a common desire for privacy when engaging with financial apps, particularly in social settings. The issue extends beyond mere convenience, as the perceived privacy gap raises concerns about security. Opening a financial app in the presence of friends or within one's social circle becomes a delicate matter, highlighting the critical need for enhanced privacy features to address these security concerns.</p>
              
              <p className="font-bold text-gray-900 text-lg mt-12  font-Jakarta">Solution</p>
              <p className="font-light text-gray-900 text-base mt-8  font-Jakarta">FLUCK revolutionizes nearby financial transactions by introducing a range of privacy-centric features. "Privacy Mode" ensures discreet transactions in social settings, complemented by "Stealth Notifications" for quiet acknowledgments. Customizable privacy shields and a biometric lock provide users with control and an added layer of security. The "Transaction Blur" feature enhances visual privacy, and an "Incognito Mode" caters to those seeking complete transaction anonymity. FLUCK's user education campaign emphasizes privacy and security, while continuous updates and robust encryption set a new standard for secure, private financial interactions among friends and contacts nearby.</p>
             
              <p className="font-bold text-gray-900 text-lg mt-12  font-Jakarta">User Research</p>
              <p className="font-light text-gray-900 text-base mt-8  font-Jakarta">Employing a diverse set of user research methods is crucial for FLUCK, an app dedicated to facilitating seamless proximity-based financial transactions with an emphasis on user-friendliness, privacy, and security. I have already conducted comprehensive research, yielding valuable insights that are guiding our project in the right direction. This approach ensures that FLUCK meets user needs effectively and provides a secure and intuitive experience for handling financial interactions in close proximity.</p>

              <p className="font-bold text-gray-900 text-lg mt-12  font-Jakarta">Competitors Analysis</p>
              <p className="font-light text-gray-900 text-base mt-8  font-Jakarta">In a landscape dominated by established players like Gpay,Monzo,Revolute,Splitwise and Apple Pay, FLUCK emerges as a distinctive contender, introducing innovative features such as customizable privacy controls, engaging gamification elements, and educational initiatives. FLUCK's emphasis on user empowerment and privacy positions it uniquely in the competitive arena, fostering a new era of secure and enjoyable financial interactions with friends in close proximity.</p>

              <div>
                <p className="font-light text-gray-900 text-base mt-16  font-Jakarta">Competitors Analysis</p>
                <Image className="w-auto mt-16 h-70 mx-auto" style={{ height: 'auto', width: '70%' }}
                  src={questions}
                  alt="lume"
                />
        <p className="font-bold text-gray-900 text-lg mt-12  font-Jakarta">Empathy Map</p>
       <p className="font-light text-gray-900 text-base mt-16  font-Jakarta">This empathy map illustrates the emotional and experiential aspects of using FLUCK from the user's perspective, helping to understand their feelings, motivations, and pain points throughout their journey with the app.</p>
                <Image className="w-auto mt-16 h-70 mx-auto" style={{ height: 'auto', width: '70%' }}
                  src={empathy}
                  alt="lume"
                />
      <p className="font-bold text-gray-900 text-lg mt-12  font-Jakarta">User personas</p>
              <p className="font-light text-gray-900 text-base mt-8 mb-8 font-Jakarta">By delving into the intricacies of each user persona, I have successfully pinpointed their distinct needs and pain points. These revelations are not just informative but serve as a guiding light in the development of the FLUCK application. They inform us about what the app should encompass, how it should behave, and what features need to be prioritized to meet the diverse requirements and expectations of our user base. In essence, the user personas provide a detailed roadmap for the app's behavior, ensuring that it resonates with the real-life needs and experiences of our potential users.
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
              <p className=" text-gray-900 text-xl mt-16 font-bold font-Jakarta">Design System</p>
              <div>

                <Image className="w-auto h-70  mt-8 " style={{ height: 'auto', width: '70%' }}
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

                <Image className="w-auto h-70 mx-auto mt-24" style={{ height: 'auto', width: '100%' }}
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
