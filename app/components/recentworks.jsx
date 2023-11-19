// components/recentworks.jsx
import React from "react";
import Image from "next/image";
import { client } from "../configSanity";

import Link from "next/link";

async function getData() {
  const query = `*[_type== 'designs'] | order(_id desc) {
    description,heading,link,_id,
    "imageUrl": image.asset->url }`;
  const data = await client.fetch(query);

  return data;
}

const Works = async () => {
  const data = (await getData()) || [];
  return (

    <div className="mt-16 grid  grid-cols-1">
      {data.map((design) => (

        <div key={design._id} className="flex mb-12 flex-col items-center bg-transparent shadow md:flex-row  hover:bg-gray-900 borders">
          {design.imageUrl && (
            <Image className="object-cover w-full  h-auto max-w-sm  md:rounded-none" style={{ height: '100%', width: '100%' }}
              width={700}
              height={700}
              src={design.imageUrl}
              alt={design.heading}
            />)}

          <div className="flex flex-col p-4 ">
            <h5 className="mb-2 text-xl font-bold tracking-tight text-left text-gray-100 ">{design.heading}</h5>
            <p className="mb-3 text-base text-left font-light text-gray-700 dark:text-gray-400">{design.description}</p>
            <p className="mb-3 text-base text-left font-light text-gray-700 dark:text-gray-400">Role : Product Designer</p>
            <div className="center-contnr">
              <a className="text-base mt-4  text-center py-4 px-4 font-bold text-white gradient-border inline-block " href={design.link}>Read the story&nbsp;	&#128640;</a>
            </div>
          </div>
        </div>

      ))}
    </div>



  );
};

export default Works;

