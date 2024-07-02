import React from "react";
import { LiaExternalLinkAltSolid } from "react-icons/lia";


export default function About() {
  return (
    <div>
      <section
        id="about"
        className="w-full bg-gradient-to-b from-blue-900 to-blue-400"
      >
        <h1 className="text-4xl text-center from-neutral-700 to-slate-500 font-serif font-bold pt-14">
          About
        </h1>
        
        <div className="md:flex block mt-14 justify-around mx-9 md:mx-0 pb-10 text-white">
       
            <div className="card bg-blue-900 md:w-[500px] hover:scale-105 duration-300">
              <div className="card-body">
                <h2 className="card-title">Education</h2>
                <ul className="space-y-3">
                <li>Gujarat technology University</li>
                    <span>B.E (CSE) {" "}(CGPA: 7.98)</span>
                  <li>Bhaktaashram ashramshala eng. med. school</li>
                  <span> HSC {" "}(70%)</span><br />
                  <span> SSC {" "}(83%)</span>
                </ul>
              </div>
            </div>
          
         
            <div className="card bg-blue-900 mt-10 md:mt-0 md:w-[500px] hover:scale-105 duration-300">
              <div className="card-body">
                <h2 className="card-title">Experiance</h2>
                <ul className="space-y-3">
                  <li className=" cursor-pointer">WAPPZO INFOTECH PVT. LTD. <a href="https://www.wappzo.com/"><LiaExternalLinkAltSolid /></a></li>
                  <span className="text-black font-semibold"> frontend intern (5-month)</span>
                  <li className=" cursor-pointer">MSEHDROID TECHNOLOGY <a href="https://www.meshdroid.com/"><LiaExternalLinkAltSolid /></a></li>
                  <span className="text-black font-semibold">web developer intern (1-month)</span>

                </ul>
              </div>
            </div>
        
          {/* <div className="col-span-4">
            <div className="card bg-blue-900">
              <div className="card-body">
                <h2 className="card-title">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>
          </div> */}
        </div>
        
      </section>
    </div>
  );
}
