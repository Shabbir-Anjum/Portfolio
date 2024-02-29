import React from "react";
import AnimationControls from "../AnimationControls";

export default function Contact() {
  return (
    <>
      <AnimationControls>
        <div
          id="contact"
          className="md:w-[80%] overflow-hidden my-40 m-auto p-6 md:ml-12 w-full lg:ml-28"
        >
          <div className="flex flex-col gap-8 items-center justify-center">
            <div className=" text-greenColor">04. What's Next?</div>
            <div className="title text-center text-head_Color">
              Get In Touch
            </div>
            <div className=" text-textColor ">
              I'd love to hear from you! Whether you have a question, a project
              idea, or just want to say hello, feel free to reach out.
            </div>
            <div className=" my-20">
              <a
                href="mailto:marshabbir768@gmail.com"
                className="py-5 px-10 btn  w-52"
              >
                Say Hello
              </a>
            </div>
          </div>
        </div>
      </AnimationControls>
      
    </>
  );
}
