import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FeaturedData from "./FeaturedData";
import React from "react";
import AnimationControls from "../AnimationControls";

export default function FeaturedProject() {
  return (
    <>
      <div id="work" className="md:w-[80%] overflow-hidden m-auto p-6 md:ml-12 w-full lg:ml-28 ">
        <AnimationControls>
        <div className=" whitespace-nowrap py-10">
          <span className="text-greenColor">03.</span>
          <h2 className="text-3xl font-bold text-head_Color px-3 inline-block">
            Somethings I've built
          </h2>
          <hr className="md:w-[40%] inline-block ml-16 w-[50%]" />
        </div>
        </AnimationControls>
        {/*Card */}
        {FeaturedData.map((value, index)=>(
          <div key={index} className={` ${value.id==2 ? 'justify-start' : ' justify-end '} relative md:flex items-center my-12 `}>
          
          <div className="md:py-24 lg:py-16">
          <AnimationControls>
            <div className=" w-full h-72 md:h-48 xxl:w-[580px] xxxl:w-[800px] xl:w-[500px] lg:h-56 md:w-80 lg:w-96 relative  md:bg-imageColor opacity-30 md:hover:bg-current ease-in-out duration-400  transition-all">
              <img
                src="/src/images/Shabbiranjum.jpg"
                alt="error"
                className="w-full h-full absolute object-cover md:mix-blend-overlay"
              />
            </div>
            </AnimationControls>
            
            <div className={`  ${value.id==2 ? 'right-0 text-end' : ' md:left-3 '}  absolute left:3 top-2  p-8 md:p-0 text-head_Color `}>
            <AnimationControls>
              <div className=" text-greenColor md:px-8"> Featured Project</div>
              </AnimationControls>
              <AnimationControls>
              <div className=" text-head_Color text-2xl font-bold md:px-8"> {value.title}</div>
               </AnimationControls>
               <AnimationControls>
              <div className="pt-32 md:pt-56 md:px-8 md:py-1">{value.tools}</div>
              </AnimationControls>
              <AnimationControls>
              <div className="md:mx-6">
                <FontAwesomeIcon icon={faGithub} className="px-2"/>
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="px-2"/>
              </div>
              </AnimationControls>
            </div>
           
            <div className={`${value.id==2 ? 'md:right-0 text-end' : 'md:left-2'} py-3 absolute md:w-[300px] mini:mx-8 mini:full sm:mx-8 text-head_Color top-24  xxl:[650px] xxxl:w-[740px] lg:px-8 lg:w-96 xl:w-[500px]  md:p-3 md:bg-navbgColor md:rounded-lg`}>
            <AnimationControls>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
                nihil maxime vero consequuntur neque sit? Magni quibusdam libero
                iusto optio non maiores nostrum aspernatur
                </AnimationControls>
              </div>
            
          </div>
         
        </div>
        ))}
      </div>
    </>
  );
}
