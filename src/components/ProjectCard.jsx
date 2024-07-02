import React from "react";
import { FaGithub ,FaExternalLinkAlt} from "react-icons/fa";

export default function ProjectCard(data) {
    // console.log(data.data.name)
  return (
    <div>
      <div className="card card-compact bg-blue-800 w-92 md:w-96 shadow-xl hover:scale-105 duration-500 mt-10 text-white mx-4 md:mx-6 hover:bg-blue-700 h-[400px]">
        <figure className=" hover:opacity-50 min-h-52">
          <img
          className="object-cover"
            src={data.data.img}
            alt="Shoes"
          />
        </figure>
        <div className="card-body ">
          <h2 className="card-title">{data.data.name}</h2>
          <p>{data.data.discription} 
          </p>
          <div className="card-actions justify-end">
          <a href={data.data.giturl} className=" bg-black text-white px-2 mx-2 py-2 text-xl rounded-md hover:scale-105"><FaGithub /></a>
          <a href={data.data.url} className=" bg-black text-white px-2 py-2 text-xl rounded-md hover:scale-105"><FaExternalLinkAlt /></a>
          </div>
        </div>
      </div>
    </div>
  );
}
