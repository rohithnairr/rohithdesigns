// components/recentworks.jsx
import React from "react";
import Image from "next/image";
import { client } from "../configSanity";
import lume from "../images/lumepng.png"




const Gui = async () => {
  

  return (
    <div className="mt-4 grid lg:grid-cols-3 gap-4 md:grid-cols-2 grid-cols-1 ">
        <div> 
          <div className="mt-20" >    
            <Image className="w-auto h-70" style={{ height: '70%', width: '100%' }}
           width={1400}
           height={300}
              src={lume}
              alt="lume"
            />
            <h1 className="font-bold font-Jakarta mt-8 text-xl">Lume Digital</h1>
            <p className="font-light font-Jakarta mt-2 mb-4 text-base text-slate-300">For elevating the business</p>
            <div className="center-contnr">
              <a className="text-base mt-4  text-center py-4 px-4 font-bold text-white gradient-border inline-block " href="./lume">Read More &#8594;</a>
            </div>      
          </div>
        </div>

   

   
    </div>
    
  );
};

export default Gui;
