
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
import heatmap from "./images/heatmap.png"
import screen1 from "./images/screen1.png"
import screen2 from "./images/screen2.png"
import screen3 from "./images/screen3.png"
import screen4 from "./images/screen4.png"
import screen5 from "./images/screen5.png"
import mock from "./images/mock.png"



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
            <h1 className="font-bold text-2xl  font-Jakarta pb-4 ">CrowdAfrik App</h1>
            <p className="font-light text-gray-900 text-base  font-Jakarta">Crowdafrik is a pioneering fintech application dedicated to empowering the African community by enhancing their lifestyles and providing vital support for various entrepreneurial ventures. Through innovative features and targeted funding initiatives, Crowdafrik aims to uplift individuals and businesses across Africa, fostering economic growth and prosperity. Whether it's facilitating access to funding for promising startups or enabling individuals to support local businesses, Crowdafrik serves as a catalyst for positive change and sustainable development throughout the continent.</p>
            <p className="font-light text-gray-900 text-base mt-4  font-Jakarta"><b>Role</b> : Product Designer/ UX Designer</p>

  

            
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
            Crowdafrik stands at the forefront of fintech innovation, dedicated to uplifting the African community and transforming lives by addressing critical challenges such as poverty and supporting agriculture. With a mission to empower individuals and businesses, Crowdafrik pioneers groundbreaking features and targeted funding initiatives to foster economic growth and prosperity across Africa. By facilitating access to funding for promising startups, supporting local businesses, and driving initiatives to bolster agriculture, Crowdafrik serves as a catalyst for positive change and sustainable development throughout the continent. Through its innovative solutions and unwavering commitment, Crowdafrik strives to eradicate poverty, empower communities, and build a brighter future for Africa.</p>
          </div>
        </div>


        <div className='grid grid-cols-1 text-grey-900 animate-fade-up'>
          <div className='mt-8 lg:mt-24 md:mt-20' data-aos="fade-right">
            <p className="font-light text-gray-900 text-base  font-Jakarta"><span className="font-bold">Client</span> : CrowdAfrik</p>
            <p className="font-light text-gray-900 text-base mt-4  font-Jakarta"><span className="font-bold">Industry</span> : Fintech</p>
            <p className="font-light text-gray-900 text-base mt-4  font-Jakarta"><span className="font-bold">Challenges</span> : Redesigning the existing application to gain more customer engagement and conversion rate</p>
          </div>
        </div>

        <div className='grid grid-cols-1 text-grey-900 animate-fade-up'>
          <div className='mt-8 lg:mt-24 md:mt-20' data-aos="fade-right">
            <h1 className="font-bold text-xl font-Jakarta pb-8 ">Objectives</h1>
            <p className="font-light text-gray-900 text-base  font-Jakarta"> &#128170; Redesign and Create Intuitive Designs</p>
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
              <p className="font-light text-gray-900 text-base mt-8  font-Jakarta">Across the continent, aspiring entrepreneurs often face formidable barriers to accessing capital, mentorship, and support services needed to turn their ideas into viable businesses. Traditional financial institutions may be reluctant to lend to startups without a proven track record, leaving many innovative ventures underfunded and unable to scale. Additionally, entrepreneurs may lack access to networks and resources to navigate regulatory hurdles, market challenges, and other complexities inherent in starting and growing a business. Moreover, disparities in access to opportunities disproportionately affect marginalized communities, hindering economic empowerment and social mobility.</p>
              
              <p className="font-bold text-gray-900 text-lg mt-12  font-Jakarta">Solution</p>
              <p className="font-light text-gray-900 text-base mt-8  font-Jakarta">Crowdafrik revolutionizes African entrepreneurship by democratizing funding access. Through crowdfunding, it connects startups with investors, fueling innovation. Community engagement fosters collaboration, mentorship, and knowledge-sharing, enriching the entrepreneurial ecosystem. Crowdafrik's commitment to social impact ensures funded projects drive job creation, economic empowerment, and sustainable development. By leveraging technology and community, Crowdafrik unlocks opportunities, drives innovation, and empowers individuals to succeed.</p>
             
              <p className="font-bold text-gray-900 text-lg mt-12  font-Jakarta">User Research</p>
              <p className="font-light text-gray-900 text-base mt-8  font-Jakarta">To address the high bounce rate issue on the Crowdafrik app's landing page, I conducted rapid user research to swiftly pinpoint the problem and implement effective solutions. Through user interviews and feedback collection, I identified the key pain points causing users to leave the landing page prematurely. Armed with these insights, I focused on enhancing the app with more attractive and engaging features to captivate users and encourage them to explore further. By swiftly addressing the identified issues and incorporating user-centric improvements, we aimed to reduce bounce rates and create a more compelling user experience on Crowdafrik.</p>

              <p className="font-bold text-gray-900 text-lg mt-12  font-Jakarta">User interview</p>
              <p className="font-light text-gray-900 text-base mt-8  font-Jakarta">Having conducted user interviews and gathered extensive feedback, the aim was to unearth insights regarding the underlying reasons for the high bounce rate on the Crowdafrik app's landing page. The emphasis was on understanding user behaviors, preferences, and pain points to inform the redesign process effectively. By delving into user experiences and perceptions, the goal was to pinpoint specific issues hindering user engagement and retention. This approach ensured that redesign efforts would be guided by user-centric principles, addressing the root causes of the high bounce rate and enhancing the overall user experience.</p>
              <p className="font-light text-gray-900 text-base mt-8  font-Jakarta">The Questions are :</p>
              <ul>
                <li className="font-light text-gray-900 text-base mt-8  font-Jakarta"> &#x2022; Can you walk me through your experience using the Crowdafrik app? What were your initial impressions?</li>
                <li className="font-light text-gray-900 text-base mt-4  font-Jakarta"> &#x2022; What specific features or aspects of the Crowdafrik app do you find most valuable or engaging?</li>
                <li className="font-light text-gray-900 text-base mt-4  font-Jakarta"> &#x2022; What challenges or frustrations have you encountered while using the Crowdafrik app, particularly on the landing page?</li>
                <li className="font-light text-gray-900 text-base mt-4  font-Jakarta"> &#x2022; Can you tell me more about why you left the Crowdafrik app's landing page without further exploration? What factors influenced your decision?</li>
                <li className="font-light text-gray-900 text-base mt-4  font-Jakarta"> &#x2022; How would you describe the overall usability and navigation of the Crowdafrik app? Are there any areas you find particularly confusing or difficult to use?</li>
                <li className="font-light text-gray-900 text-base mt-4  font-Jakarta"> &#x2022; What improvements or enhancements would you like to see on the Crowdafrik app's landing page to make it more appealing and engaging?</li>
                <li className="font-light text-gray-900 text-base mt-4  font-Jakarta"> &#x2022; Have you encountered any technical issues or bugs while using the Crowdafrik app? If so, can you provide details?</li>
                <li className="font-light text-gray-900 text-base mt-4  font-Jakarta"> &#x2022; How often do you use crowdfunding platforms like Crowdafrik, and what factors influence your decision to use them?</li>
                <li className="font-light text-gray-900 text-base mt-4  font-Jakarta"> &#x2022; Can you share any suggestions or ideas for new features or functionality that you believe would enhance your experience on the Crowdafrik app?</li>
                <li className="font-light text-gray-900 text-base mt-4  font-Jakarta"> &#x2022; In your opinion, what sets Crowdafrik apart from other crowdfunding platforms? What aspects do you think Crowdafrik does particularly well, and where do you see room for improvement?</li>
              </ul>
              <div>
                
        <p className="font-bold text-gray-900 text-lg mt-12  font-Jakarta">Empathy Map</p>
       <p className="font-light text-gray-900 text-base mt-16  font-Jakarta">In Crowdafrik, an empathy map serves as a valuable tool to gain deeper insights into the experiences, emotions, and behaviors of users engaging with the platform. Here's how the empathy map can be utilized in Crowdafrik:</p>
       <ul>
                <li className="font-light text-gray-900 text-base mt-8  font-Jakarta"> &#x2022; Understanding User Needs</li>
                <li className="font-light text-gray-900 text-base mt-4  font-Jakarta"> &#x2022; Identifying Pain Points</li>
                <li className="font-light text-gray-900 text-base mt-4  font-Jakarta"> &#x2022; Informing Design and Communication</li>
                <li className="font-light text-gray-900 text-base mt-4  font-Jakarta"> &#x2022; Driving Engagement and Retention</li>
              </ul>
                <Image className="w-auto mt-16 h-70 mx-auto" style={{ height: 'auto', width: '70%' }}
                  src={empathy}
                  alt="lume"
                />
      <p className="font-bold text-gray-900 text-lg mt-12  font-Jakarta">User personas</p>
              <p className="font-light text-gray-900 text-base mt-8 mb-8 font-Jakarta">I've gathered data on user personas from individuals with diverse backgrounds and perspectives, allowing me to gain valuable insights into their behavior, preferences, and needs. This comprehensive dataset has been instrumental in uncovering patterns and trends that inform the design and development of the Crowdafrik app.
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
        <p className="font-light text-gray-900 text-base mt-8  font-Jakarta">In the Define stage of our research, we delved deeper into understanding the fundamental aspects that would shape the Crowdafrik app. This phase involved a comprehensive exploration of user needs and the pain points they encounter in their  journey. Here's what we discovered:</p>
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

              <p className="font-light text-gray-900 text-base mt-8  font-Jakarta">Crafting the Blueprint with Wireframes</p>
              <p className="font-light text-gray-900 text-base mt-8  font-Jakarta">Following the define and Ideation stages, we transitioned into the Design phase, where we embarked on the task of creating wireframes. Wireframes serve as the foundational blueprints of the CrowdAfrik app, delineating its structure, layout, and functionality.</p>
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

        <div>
              <p className="font-bold text-gray-900 text-lg mt-44 font-Jakarta">Heat Map</p>
              <p className="font-light text-gray-900 text-base mt-8  font-Jakarta">In the redesign of the Crowdafrik app, heat maps can play a crucial role in optimizing the user experience and enhancing engagement. Here's how heat maps can be utilized effectively in the app redesign process:</p>
              <ul>
                <li className="font-light text-gray-900 text-base mt-8  font-Jakarta"> &#x2022; <b>Homepage Optimization:</b> Heat maps can be used to analyze user interactions with the homepage, including clicks, scrolls, and mouse movements. By identifying which sections of the homepage receive the most engagement, such as featured projects, calls-to-action, or navigation links, designers can prioritize content and layout changes to maximize user engagement and conversion rates.</li>
                <li className="font-light text-gray-900 text-base mt-4  font-Jakarta"> &#x2022; <b>Campaign Page Enhancement:</b> Heat maps can provide insights into how users interact with individual campaign pages, including where they focus their attention, which elements they click on, and how far they scroll down the page. Designers can use this information to optimize campaign page layouts, ensuring that key information, such as project descriptions, funding goals, and rewards, is prominently displayed and easily accessible to users.</li>
                <li className="font-light text-gray-900 text-base mt-4  font-Jakarta"> &#x2022; <b>Navigation Refinement:</b> Heat maps can reveal how users navigate through the app, including which menu items, buttons, or links they click on most frequently. Designers can use this data to identify navigation bottlenecks or usability issues, such as confusing navigation labels or buried menu items, and make improvements to the app's navigation structure and layout for a more intuitive user experience.</li>
                <li className="font-light text-gray-900 text-base mt-4  font-Jakarta"> &#x2022; Driving Engagement and Retention</li>
              </ul>
              <div>

                <Image className="w-auto h-70 mx-auto mt-24" style={{ height: 'auto', width: '60%' }}
                  src={heatmap}
                  alt="lume"
                />
              </div>
            </div>
        <div className='grid grid-cols-1 text-grey-900 animate-fade-up'>
          <div className='mt-8 lg:mt-24 md:mt-20' data-aos="fade-right">
    
            <div>
              <p className="font-bold text-gray-900 text-lg  font-Jakarta">Screens</p>
             
              <div>

              <Image className="w-auto h-70 rounded-xl mx-auto" style={{ height: 'auto', width: '60%' }}
            src={screen1}
            alt="lume"
          />
          <Image className="w-auto h-70 rounded-xl mt-12 mx-auto" style={{ height: 'auto', width: '60%' }}
            src={screen2}
            alt="lume"
          />
          <Image className="w-auto h-70 rounded-xl mt-12 mx-auto" style={{ height: 'auto', width: '60%' }}
            src={screen3}
            alt="lume"
          />
          <Image className="w-auto h-70 rounded-xl mt-12 mx-auto" style={{ height: 'auto', width: '60%' }}
            src={screen4}
            alt="lume"
          />
          <Image className="w-auto h-70 rounded-xl mt-12 mx-auto" style={{ height: 'auto', width: '60%' }}
            src={screen5}
            alt="lume"
          />

<p className="font-light text-gray-900 text-base  font-Jakarta">After implementing the latest changes and features, we rolled out a test beta version of the application to our customers to gather feedback and reviews on the updated design. We were thrilled to receive an overwhelmingly positive response, with a remarkable 42% rating the changes as amazing. Additionally, we observed a significant decrease in bounce rates and a notable increase in conversion rates, indicating a positive reception of the new design among users. As a result, we are excited to announce that the new design will soon replace the old app.</p>

<p className="font-light text-gray-900 text-base mt-8  font-Jakarta">Throughout this journey, I've been inspired by various individuals and impressed by diverse opinions. I've learned invaluable lessons in problem-solving, especially the transformative power of collaboration and communication. These experiences have reinforced the importance of listening to our users and working together to create meaningful solutions that drive positive outcomes.</p>
             


<p className="font-bold text-gray-900 text-lg  mt-16 lg:mt-28  font-Jakarta">Thank You.</p>


<Image className="w-auto h-70 rounded-xl mt-12 mx-auto" style={{ height: 'auto', width: '100%' }}
            src={mock}
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
