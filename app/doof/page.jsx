
import Footer from "../components/footer"
import Navigation from "../components/navbar";
import banner from "./images/top.webp"
import mockup from "./images/mockup.png"
import Image from "next/image";
import process from "../images/Process.svg"
import brand from "./images/logo.svg"
import processlogo from "./images/logoprocess.svg"
import pain from "./images/pain.png"
import empathy from "./images/empathy.png"
import comp from "./images/comp.png"
import ia from "./images/ia.png"
import typo from "./images/typography.svg"
import color from "./images/colors.svg"
import screen1 from "./images/screensgroup.webp"
import mock from "./images/mock.webp"
import tape from "./images/tape.png"
import tshirt from "./images/tshirt.png"
import packet from "./images/packet.png"
import board from "./images/board.png"
import boardu from "./images/boardd.png"



import persona1 from "./images/persona1.png"
import persona2 from "./images/persona2.png"
import Wireframe from "./images/wireframe.png"

export default function Doof() {
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
          <div className='mt-12 lg:mt-12  md:mt-20 animate-fade-up ' data-aos="fade-right">
            <h1 className="font-bold text-2xl  font-Jakarta pb-4 ">Doof</h1>
            <p className="font-light text-gray-900 text-base  font-Jakarta">Doof is your go-to food delivery app designed to simplify your dining experience. Select your favorite dishes from our curated menus and enjoy speedy delivery straight to your doorstep. Plus, with a vibrant foodie community, Doof is more than just an app – it's a culinary adventure waiting to happen. Download Doof today and discover a world of flavors at your fingertips.</p>
            <p className="font-light text-gray-900 text-base mt-4  font-Jakarta"><b>Role</b> : Product Designer/ UX Designer</p>

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
              Welcome to Doof, your go-to destination for convenient, personalized food delivery. With an array of top-rated restaurants at your fingertips, Doof offers a seamless ordering experience tailored to your tastes and dietary needs. From allergen identification to personalized recommendations, Doof ensures every meal is a delight. Join us and experience the future of food delivery today. Welcome to Doof.</p>
          </div>
        </div>

        <div className='grid grid-cols-1 text-grey-900 animate-fade-up'>
          <div className='mt-8 lg:mt-24 md:mt-20' data-aos="fade-right">
            <p className="font-light text-gray-900 text-base  font-Jakarta"><span className="font-bold">Client</span> : Doof - Lume Digital Limited</p>
            <p className="font-light text-gray-900 text-base mt-4  font-Jakarta"><span className="font-bold">Industry</span> : Food Delivery</p>
            <p className="font-light text-gray-900 text-base mt-4  font-Jakarta"><span className="font-bold">Challenges</span> : Crafting a user-friendly and inclusive food delivery application with cohesive branding</p>
          </div>
        </div>

        <div className='grid grid-cols-1 text-grey-900 animate-fade-up'>
          <div className='mt-8 lg:mt-24 md:mt-20' data-aos="fade-right">
            <h1 className="font-bold text-xl font-Jakarta pb-8 ">Objectives</h1>
            <p className="font-light text-gray-900 text-base  font-Jakarta"> &#128170; Craft Intuitive Designs</p>
            <p className="font-light text-gray-900 text-base mt-4  font-Jakarta">&#x2705; Modernize Visual Identity</p>
            <p className="font-light text-gray-900 text-base mt-4  font-Jakarta">&#128681; Design System</p>
            <p className="font-light text-gray-900 text-base mt-4  font-Jakarta">&#127775;Branding</p>
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
              <p className="font-light text-gray-900 text-base mt-8  font-Jakarta">Many individuals with food allergies or intolerances face significant challenges when ordering food online. The lack of clear allergen information often leads to uncertainty and anxiety, as users struggle to identify safe options that align with their dietary restrictions. Additionally, slow delivery times can exacerbate the frustration, as users wait extended periods for their meals to arrive, diminishing the overall experience, particularly for individuals with busy schedules or those craving a quick and efficient dining solution.</p>

              <p className="font-bold text-gray-900 text-lg mt-12  font-Jakarta">Solution</p>
              <p className="font-light text-gray-900 text-base mt-8  font-Jakarta">Doof revolutionizes food delivery with innovative features. Users can  easily identify allergens in dishes through clear icons and explore  allergen-free options in a dedicated tab. Leveraging advanced logistics,  Doof ensures lightning-fast delivery, minimizing wait times and  maximizing satisfaction. With a seamless platform, it caters to dietary  needs while delivering a quick and convenient dining experience.</p>

              <p className="font-bold text-gray-900 text-lg mt-12  font-Jakarta">User Research</p>
              <p className="font-light text-gray-900 text-base mt-8  font-Jakarta">To ensure Doof meets the needs of its users effectively, extensive user research was conducted to gain insights into their behaviors, preferences, and pain points regarding food delivery services.</p>

              <p className="font-bold text-gray-900 text-lg mt-12  font-Jakarta">User interview</p>
              <p className="font-light text-gray-900 text-base mt-8  font-Jakarta">Based on the user survey conducted for Doof, several key insights have emerged that provide valuable guidance for the future development and improvement of the app:</p>

              <ul>
                <li className="font-light text-gray-900 text-base mt-8  font-Jakarta"> &#x2022; Positive Feedback on Features: Users expressed appreciation for Doof's innovative features, particularly the allergen identification and fast delivery options. These features were highlighted as key factors contributing to a positive user experience</li>
                <li className="font-light text-gray-900 text-base mt-4  font-Jakarta"> &#x2022; Room for Improvement: Despite the positive feedback, users also identified areas for improvement, such as the need for more diverse restaurant options, clearer allergen information, and enhancements to the app's user interface for smoother navigation.</li>
                <li className="font-light text-gray-900 text-base mt-4  font-Jakarta"> &#x2022; Importance of Reliability: Users emphasized the importance of reliability in food delivery services, citing instances where orders were delayed or inaccurate. Ensuring consistent and reliable service emerged as a priority for enhancing user satisfaction.</li>
                <li className="font-light text-gray-900 text-base mt-4  font-Jakarta"> &#x2022; Preference for Personalization: Many users expressed a desire for personalized recommendations and offers tailored to their preferences and dietary restrictions. This suggests an opportunity for Doof to further customize the user experience and provide more targeted recommendations.</li>
                <li className="font-light text-gray-900 text-base mt-4  font-Jakarta"> &#x2022; Overall Satisfaction: Despite some areas for improvement, the majority of users expressed overall satisfaction with Doof's service and indicated a willingness to continue using the app. This positive sentiment bodes well for Doof's future growth and success in the competitive food delivery market.</li>
              </ul>
              <p className="font-light text-gray-900 text-base mt-8  font-Jakarta">In conclusion, the user survey has provided valuable insights into user preferences, pain points, and satisfaction levels with Doof's food delivery app. By addressing the feedback gathered from the survey and prioritizing enhancements that align with user needs, Doof can further improve its app's user experience and solidify its position as a leading choice for convenient, reliable, and personalized food delivery services.</p>

              <div>

                <p className="font-bold text-gray-900 text-lg mt-12  font-Jakarta">Empathy Map</p>
                <p className="font-light text-gray-900 text-base mt-8  font-Jakarta">In Doof, an empathy map serves as a valuable tool to gain deeper insights into the experiences, emotions, and behaviors of users engaging with the platform. Here's how the empathy map can be utilized in Doof:</p>
                <ul>
                  <li className="font-light text-gray-900 text-base mt-8  font-Jakarta"> &#x2022; Understanding User Needs</li>
                  <li className="font-light text-gray-900 text-base mt-4  font-Jakarta"> &#x2022; Identifying Pain Points</li>
                  <li className="font-light text-gray-900 text-base mt-4  font-Jakarta"> &#x2022; Informing Design and Communication</li>
                  <li className="font-light text-gray-900 text-base mt-4  font-Jakarta"> &#x2022; Driving Engagement and Retention</li>
                </ul>
                <Image className="w-auto mt-16 h-70 mx-auto"
                  src={empathy}
                  alt="lume"
                />


                <p className="font-bold text-gray-900 text-lg mt-12 font-Jakarta">Competitors Analysis</p>
                <p className="font-light text-gray-900 text-base mt-8  font-Jakarta">The competitors analysis provides valuable insights into the strengths, weaknesses, opportunities, and threats present in the food delivery market. By examining competitors such as Uber Eats, DoorDash and Grubhub, we can identify areas for differentiation and improvement in our own food delivery app.</p>

                <Image className="w-auto mt-16 h-70 mx-auto"
                  src={comp}
                  alt="lume"
                />




                <p className="font-light text-gray-900 text-base mt-16  font-Jakarta"><b>Conclusion</b> :Strengths such as wide restaurant selection and user-friendly interfaces are common among competitors, but weaknesses such as limited allergen information and occasional delivery issues present opportunities for our app to stand out. By prioritizing features like comprehensive allergen information, fast delivery, and personalized recommendations, we can address user pain points and capitalize on market opportunities.

                  <br /><br />While competition is fierce in the food delivery space, there are also opportunities for collaboration and innovation. By staying attuned to market trends and user preferences, we can continue to refine our app and provide a superior user experience. Ultimately, the competitors analysis serves as a strategic tool to inform our app's development and positioning in the marketplace.</p>


              </div>
            </div>
          </div>
        </div>

        <div className='grid grid-cols-1 text-grey-900 animate-fade-up'>
          <p className="font-bold text-gray-900 text-2xl mt-12 font-Jakarta">Define</p>
          <p className="font-bold text-gray-900 text-lg mt-12  font-Jakarta">User personas</p>
          <p className="font-light text-gray-900 text-base mt-8 mb-8 font-Jakarta">I've gathered data on user personas from individuals with diverse backgrounds and perspectives, allowing me to gain valuable insights into their behavior, preferences, and needs. This comprehensive dataset has been instrumental in uncovering patterns and trends that inform the design and development of the Doof app.
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
          <p className="font-bold text-gray-900 text-base mt-8  font-Jakarta">Pain Points & Key Features</p>
          <p className="font-light text-gray-900 text-base mt-8  font-Jakarta">In the Define stage of our research, we delved deeper into understanding the fundamental aspects that would shape the Doof app. This phase involved a comprehensive exploration of user needs and the pain points they encounter in their  journey. Here's what we discovered:</p>
        </div>

        <div className='grid  grid-cols-1 mx-auto '>
          <div>
            <Image className="w-100 lg:w-auto mx-auto  mt-16" 
              src={pain}
              alt="lume"
            />
          </div>

        </div>



        <div className='grid grid-cols-1 text-grey-900 animate-fade-up'>
          <div className='mt-8 lg:mt-24 md:mt-20' data-aos="fade-right">

            <div>
              <p className="font-bold text-gray-900 text-2xl  font-Jakarta">Ideate</p>
              <p className="font-light text-gray-900 text-base mt-8  font-Jakarta">Following in-depth research, a set of tailored solutions has been crafted to address identified challenges. This is underpinned by a refined information architecture, optimizing processes and resource utilization, ensuring adaptability and scalability. The result is a comprehensive solution poised for current challenges and future growth.</p>
              <div>

                <Image className="w-100 h-70 mx-auto mt-24" 
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
              <p className="font-bold text-gray-900 text-2xl  font-Jakarta">Design</p>

              <p className="font-light text-gray-900 text-base mt-8  font-Jakarta">Crafting the Blueprint with Wireframes</p>
              <p className="font-light text-gray-900 text-base mt-8  font-Jakarta">Following the define and Ideation stages, we transitioned into the Design phase, where we embarked on the task of creating wireframes. Wireframes serve as the foundational blueprints of the Doof app, delineating its structure, layout, and functionality.</p>
              <div>

                <Image className="w-auto h-70 mx-auto mt-4" style={{ height: 'auto', width: '70%' }}
                  src={Wireframe}
                  alt="wireframe"
                />
              </div>
              <p className=" text-gray-900 text-xl mt-16 font-bold  font-Jakarta">Branding and Logo Design</p>
              <div className="grid lg:grid-cols-2 grid-cols-1 gap-2 mb-16 animate-fade-up" >
                <div>
                  <p className=" text-gray-900 text-l mt-16 font-bold mb-16 font-Jakarta">Logo Design</p>
                  <div  className="px-8">

                    <Image className="w-100 h-70  mt-8 mx-auto lg:mx-0 "
                      src={brand}
                      alt="lume"
                    />
                  </div>
                </div>
                <div>
                  <p className=" text-gray-900 text-l mt-16 font-bold mb-16 font-Jakarta">Process</p>
                  <div className="px-8"> 

                    <Image className="w-100 h-70  mt-8 mx-auto lg:mx-0 " 
                      src={processlogo}
                      alt="lume"
                    />
                  </div>
                </div>
              </div>


              <p className=" text-gray-900 text-xl mt-16 font-bold  font-Jakarta">Design System</p>
              <div className="grid lg:grid-cols-2 grid-cols-1 gap-2 mb-16 animate-fade-up" >
                <div>
                  <p className=" text-gray-900 text-l mt-16 font-bold mb-16 font-Jakarta">Typography</p>
                  <div className="px-8">

                    <Image className="w-100 h-30  mt-8 mx-auto lg:mx-0" 
                      src={typo}
                      alt="lume"
                    />
                  </div>
                </div>
                <div>
                  <p className=" text-gray-900 text-l mt-16 font-bold mb-16 font-Jakarta">Colors</p>
                  <div className="px-8">

                    <Image className="w-100 h-70  mt-8 mx-auto lg:mx-0" 
                      src={color}
                      alt="lume"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className='grid grid-cols-1 text-grey-900 animate-fade-up'>
          <div className='mt-8 lg:mt-24 md:mt-20' data-aos="fade-right">

            <div>
              <p className="font-bold text-gray-900 text-lg mb-12 font-Jakarta">Screens</p>

              <div>

                <Image className="w-auto h-70 rounded-xl mx-auto" style={{ height: 'auto', width: '100%' }}
                  src={screen1}
                  alt="lume"
                />
                <p className="font-light text-gray-900 text-base mt-12  font-Jakarta">There are a total of 43 screens, with the remaining screens completed and currently under development. Due to this ongoing development phase, I'm unable to showcase all the UI screens here. The next steps will involve usability testing and A/B testing to ensure optimal user experience.</p>


                <p className="font-bold text-gray-900 text-2xl mt-12  font-Jakarta">Next Step</p>

                <p className="font-light text-gray-900 text-base mt-4  font-Jakarta">After completing usability testing and finalizing the app design, the next steps involve development and implementation, quality assurance testing, app store submission, marketing and promotion, launch event planning, user onboarding and support, analytics and monitoring implementation, and iterative improvement based on user feedback and insights.</p>


                <p className="font-bold text-gray-900 text-2xl mt-12  font-Jakarta">Brandings</p>
                <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 mt-6">
                  <div>
                  <Image className="w-auto h-70 rounded-xl mt-6 mx-auto" style={{ height: 'auto', width: '100%' }}
                  src={tshirt}
                  alt="lume"
                />
                  </div>
                  <div>
                  <Image className="w-auto h-70 rounded-xl mt-6 mx-auto" style={{ height: 'auto', width: '100%' }}
                  src={tape}
                  alt="lume"
                />
                  </div>
                  <div>
                  <Image className="w-auto h-70 rounded-xl mt-6 mx-auto" style={{ height: 'auto', width: '100%' }}
                  src={board}
                  alt="lume"
                />
                  </div>
                  <div>
                  <Image className="w-auto h-70 rounded-xl mt-6 mx-auto" style={{ height: 'auto', width: '100%' }}
                  src={packet}
                  alt="lume"
                />
                  </div>
                  <div>
                  <Image className="w-auto h-70 rounded-xl mt-6 mx-auto" style={{ height: 'auto', width: '100%' }}
                  src={boardu}
                  alt="lume"
                />
                  </div>

                </div>


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
