// components/recentworks.jsx
import React from "react";
import Image from "next/image";
import { client } from "../configSanity";


async function getData() {
  const query = `*[_type== 'blogs']{
    description,heading,link,_id,
    "imageUrl": image.asset->url }`;
  const data = await client.fetch(query);

  return data;
}

const Blogs = async () => {
  const data = (await getData()) || [];

  return (
    <div className="mt-4 grid lg:grid-cols-3 gap-4 md:grid-cols-2 grid-cols-1 ">
      {data.map((blog) => (
     
        <div key={blog._id}>
            
          <div className="mt-20" >
          {blog.imageUrl && (
            <Image className="w-auto h-70" style={{ height: '70%', width: '100%' }}
           width={1400}
           height={300}
      
              src={blog.imageUrl}
              alt={blog.heading}
            />)}
            <h1 className="font-normal font-Jakarta mt-8 text-xl">{blog.heading}</h1>
            <p className="font-light font-Jakarta mt-2 mb-4 text-xl text-slate-700">{blog.description}</p>
            <a href={blog.link} className="text-base text-blue-500 font-thin underline" >Read More &#8594;</a>
            
          </div>
        </div>
      ))}
    </div>
    
  );
};

export default Blogs;
