import React from "react";
import { TypeAnimation } from "react-type-animation";

export default function Main() {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/Resumeog.pdf';
    link.download = 'Resumeog';
    link.click();
  };
  return (
    <div>
      <div className="relative object-contain" style={{ height: "77vh" }}>
        <img
          className="h-full w-full -z-50 object-cover opacity-75"
          src="https://img.freepik.com/free-photo/elevated-view-laptop-earphones-crumpled-papers-pencil-blank-spiral-notepad-frame-black-background_23-2148080331.jpg"
          alt=""
        />
        <div className="h-full w-full absolute bg-blue-900 bg-opacity-65 top-0">
          <h1 className="text-4xl md:text-7xl mt-40 md:mt-56 px-16 font-mono text-black font-bold h-[140px]">
            Hey, I'm <br />
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Gaurav ",
                3000, // wait 1s before replacing "Mice" with "Hamsters"
                "Frontend developer",
                1000,
                "Web developer",
                1000,
                // 'We produce food for Chinchillas',
                // 1000
              ]}
              wrapper="span"
              speed={40}
              style={{ fontSize: "1em", display: "inline-block" }}
              repeat={Infinity}
            />
          </h1>
          <div className="mx-20 mt-10 text-white">
            {" "}
            <button  onClick={handleDownload} className=" bg-gradient-to-l from-blue-700 to-blue-800 px-3 py-3 cursor-pointer rounded-md me-16 hover:scale-105" >Resume</button>
            <button className="bg-gradient-to-l mt-5 from-blue-700 to-blue-800 px-3 py-3 cursor-pointer rounded-md hover:scale-105"><a href="#contact">Hire me</a></button>

          </div>
        </div>
      </div>
    </div>
  );
}
