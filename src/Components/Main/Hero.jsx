import React from "react";

export default function Hero() {
  return (
    <>
      <div className=" md:w-[70%] flex flex-col gap-10 m-auto p-10 w-full md:ml-28 ">
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
          <a  href="my file">
            Get in Touch
          </a>
        </div>
      </div>
    </>
  );
}
