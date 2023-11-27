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
    <div className="mt-4 grid grid-cols-1 ">
      {data.map((blog) => ( 
        <div key={blog._id}>    
          <div className="mt-20 pb-8 border-b-4" >
            <h1 className="font-bold font-Jakarta mt-8 text-xl">{blog.heading}</h1>
            <p className="font-light font-Jakarta mt-2 mb-4 text-base text-slate-900">A small readable content of the latest dynamic routing in Next.JS..</p>
            <div className="center-contnr">
              <a className="text-base mt-2  text-center py-4 px-12 bg-black font-bold text-white rounded-3xl  inline-block "  href={blog.link}>Read More &#8594;</a>
            </div>
          </div>
        </div>
      ))}
    </div>
    
  );
};

export default Blogs;
