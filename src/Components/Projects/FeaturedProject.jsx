import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function FeaturedProject() {
  return (
    <>
      <div className="md:w-[80%] overflow-hidden m-auto p-6 md:10 w-full md:ml-28 ">
        <div className=" whitespace-nowrap py-10">
          <span className="text-greenColor">03.</span>
          <h2 className="text-3xl font-bold text-head_Color px-3 inline-block">
            Somethings I've built
          </h2>
          <hr className="md:w-[40%] inline-block ml-16 w-[50%]" />
        </div>



        <div className=" relative md:flex items-center  justify-end ">
          <div className="md:py-24 lg:py-16">
            <div className=" w-full h-72 md:h-48 xxl:w-[680px] xl:w-[500px] lg:h-56 md:w-80 lg:w-96 relative  md:bg-imageColor opacity-30 md:hover:bg-current ease-in-out duration-400  transition-all">
              <img
                src="/src/images/Shabbiranjum.jpg"
                alt="error"
                className="w-full h-full absolute object-cover md:mix-blend-overlay"
              />
            </div>
            <div className="absolute left-2 top-2 p-8 md:p-0 text-head_Color">
              <div className=" text-greenColor md:px-8"> Featured Project</div>
              <div className=" text-head_Color text-3xl font-bold md:px-8"> News App</div>
              <div className="py-3 md:absolute md:w-[300px] xxl:[550px] lg:px-8 lg:w-96 xl:w-[500px] top-20 left-8 md:p-3 md:bg-navbgColor md:rounded-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
                nihil maxime vero consequuntur neque sit? Magni quibusdam libero
                iusto optio non maiores nostrum aspernatur
              </div>
              <div className="md:pt-56 md:px-8">HTML, CSS, Javascript, React.js</div>
              <div className="m-5">
                <FontAwesomeIcon icon={faGithub} className="px-4"/>
                <FontAwesomeIcon icon={faArrowUpRightFromSquare}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
