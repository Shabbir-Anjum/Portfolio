import React from "react";
import AnimationControls from "../AnimationControls";

export default function About() {
  return (
    <>

      <div
        id="about"
        className="md:w-[80%] m-auto p-6 md:ml-12  py-32 w-full lg:ml-28 overflow-hidden"
      >
        <div className=" whitespace-nowrap py-10">
          <AnimationControls>
            <span className="text-greenColor">01.</span>
            <h2 className="text-3xl font-bold text-head_Color px-3 inline-block">
              About
            </h2>
            <hr className="md:w-[40%] inline-block ml-16 w-[50%]" />
          </AnimationControls>
        </div>
        <div className="flex flex-col md:flex-row justify-center gap-4 mt-5 items-center">
          <AnimationControls>
            <div>
              <p>
                As a skilled React.js developer, I love creating user-friendly
                websites and applications. With a solid background in web
                development, I'm passionate about innovation and delivering
                top-notch work. I'm great at turning Figma designs into
                functional code that works on all devices. I graduated with a
                Bachelor's degree in Computer Science from<a
                      href='https://gcuf.edu.pk/' target="_blank"
                      className=" text-greenColor pl-1"
                    >
                      @
                      <span className="hover:border-b hover:border-greenColor">
                        Government College University Faisalabad
                      </span>
                    </a> where I learned a lot about programming
                and web development. I'm proficient in technologies like
                React.js, Next.js, JavaScript, HTML, CSS, Node.js, and MongoDB.
                I'm also good at managing APIs and converting designs into code.
                I've worked as a Student Developer at GCUF, where I learned a
                lot about web development, and now I'm freelancing on <a
                      href='https://www.fiverr.com/shabbir768?up_rollout=true' target="_blank"
                      className=" text-greenColor pl-1"
                    >
                      @
                      <span className="hover:border-b hover:border-greenColor">
                        FIVER
                      </span>
                    </a>.
                I'm also learning advanced web development at<a
                      href='https://pk.worldorgs.com/catalog/faisalabad/accountant/saylani-mass-training-faisalabad' target="_blank"
                      className=" text-greenColor pl-1"
                    >
                      @
                      <span className="hover:border-b hover:border-greenColor">
                        SMIT
                      </span>
                    </a>. Some
                projects I've worked on include a simple automobile company
                website and Helper Hub, a platform connecting job seekers with
                employers. Outside of work, I enjoy testing websites on
                different browsers, contributing to open-source projects, and
                learning new things through online courses.
              </p>
            </div>
          </AnimationControls>
  
          <div className="border inline-block p-6 hover:transform hover:scale-95 transition-all">
          <AnimationControls>
              <div className=" w-64 h-96 relative bg-imageColor hover:bg-current ">
                <img
                  src="/src/images/Shabbiranjum.jpg"
                  alt="error"
                  className="w-full h-full absolute object-cover object-center mix-blend-overlay"
                />
              </div>
              </AnimationControls>
          </div>
      
        </div>
      </div>

    </>
  );
}
