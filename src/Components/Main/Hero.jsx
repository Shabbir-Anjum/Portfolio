import {
  faCodepen,
  faGithub,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import AnimationControls from "../AnimationControls";

export default function Hero() {
  return (
    <>
      <div
        id=" "
        className=" md:w-[70%] flex flex-col gap-10 m-auto p-10 md:ml-12 w-full lg:ml-28"
      >
        <AnimationControls>
          <div className="text-greenColor">Hi, my name is</div>
        </AnimationControls>
        <AnimationControls>
          <div className="title text-head_Color">
            <h1> Shabbir Anjum</h1>
          </div>
        </AnimationControls>
        <AnimationControls>
          <div className="title">
            <h2> A Front_End Developer</h2>
          </div>
        </AnimationControls>
        <AnimationControls>
          <div>
            <p>
              I am a highly skilled React.js developer with a solid background
              in web development. Throughout my career, I have successfully
              created user-friendly web applications and have a strong passion
              for innovation and delivering excellence. I am enthusiastic about
              working on dynamic projects, helping them flourish, and staying
              ahead in the constantly evolving world of web development.
              Additionally, I possess expertise in converting Figma designs into
              responsive code.
            </p>
          </div>
        </AnimationControls>
        <AnimationControls>
        <div className=" my-20" >
          <a href="mailto:marshabbir768@gmail.com" target="_blank" className="py-5 px-10 btn  w-52">
            Get In Touch
          </a>
        </div>
        </AnimationControls>
        {/* Veritical Left Side content */}
        <AnimationControls>
        <div className=" fixed left-8 z-10 lg:left-14 bottom-0 text-xl hidden md:block">
          <div className="py-2 hover:text-greenColor">
            <a
              href="https://github.com/Shabbir-Anjum"
              target="_blank"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </div>
          <div className="py-1 hover:text-greenColor">
            <a  href="https://leetcode.cn/u/shabbir-anjum/" target="_blank">
              <FontAwesomeIcon icon={faCodepen} />
            </a>
          </div>
          <div className="py-1 hover:text-greenColor">
            <a href="https://twitter.com/mahr_shabbir" target="_blank">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </div>
          <div className="py-2 hover:text-greenColor" >
            <a href="https://www.linkedin.com/in/shabbir-anjum-942495177/" target="_blank">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
          </div>
          <div className=" border-l-2  h-36 ml-1 "></div>
        </div>
        </AnimationControls>
      </div>
      {/* Veritical Right Side content */}
     
      <AnimationControls>
      <div className="fixed right-0  z-50 bottom-48 text-white hidden md:block" target="_blank">
        <div className="flex items-center">
          <div className="py-10 transform rotate-90  origin-center">
            <a href="mailto:marshabbir768@gmail.com" className="whitespace-nowrap hover:text-greenColor text-sm" target="_blank">
              marshabbir768@gmail.com
            </a>
          </div>
        </div>
      </div>
      <div className=" fixed right-20  bottom-0 border text-white hidden md:block border-l-2 h-36 mr-1"></div>
      </AnimationControls>
     
    </>

  );
}
