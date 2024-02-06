import {
  faCodepen,
  faGithub,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function Hero() {
  return (
    <>
      <div id=" " className=" md:w-[70%] flex flex-col gap-10 m-auto p-10 md:ml-12 w-full lg:ml-28">
        <div className="text-greenColor">Hi, my name is</div>
        <div className="title text-head_Color">
          <h1> Shabbir Anjum</h1>
        </div>
        <div className="title">
          <h2> A Front_End Developer</h2>
        </div>
        <div>
          <p>
            I am a highly skilled React.js developer with a solid background in
            web development. Throughout my career, I have successfully created
            user-friendly web applications and have a strong passion for
            innovation and delivering excellence. I am enthusiastic about
            working on dynamic projects, helping them flourish, and staying
            ahead in the constantly evolving world of web development.
            Additionally, I possess expertise in converting Figma designs into
            responsive code.
          </p>
        </div>

        <div className="btn w-36  px-2 py-3">
          <a href="my file">Get in Touch</a>
        </div>
        {/* Veritical Left Side content */}
        <div className=" fixed left-8 lg:left-14 bottom-0 text-white hidden md:block">
          <div className="py-2">
            <a href="#">
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </div>
          <div className="py-1">
            <a href="#">
              <FontAwesomeIcon icon={faCodepen} />
            </a>
          </div>
          <div className="py-1">
            <a href="#">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </div>
          <div className="py-2">
            <a href="#">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
          </div>
          <div className=" border-l-2  h-36 ml-1 "></div>
        </div>

        {/* Veritical Left Side content */}
        <div className="fixed right-0  bottom-48 text-white hidden md:block">
  <div className="flex items-center">
    <div className="py-12 transform rotate-90 origin-center">
      <a href="#" className="whitespace-nowrap">
        marshabbir768@gmail.com
      </a>
    </div>
  </div>
</div>
<div className=" fixed right-24  bottom-0 border text-white hidden md:block border-l-2 h-36 ml-1"></div>
      </div>
    </>
  );
}
