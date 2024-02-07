import React from "react";
import AnimationControls from "../AnimationControls";

export default function About() {
  return (
    <>
      <div id="about" className="md:w-[80%] m-auto p-6 md:ml-12 w-full lg:ml-28 overflow-hidden">
      <AnimationControls>
        <div className=" whitespace-nowrap py-10">
          <span className="text-greenColor">01.</span>
          <h2 className="text-3xl font-bold text-head_Color px-3 inline-block">
            About
          </h2>
          <hr className="md:w-[40%] inline-block ml-16 w-[50%]" />
        </div>
        <div className="flex flex-col md:flex-row justify-center gap-4 mt-5 items-center">
        <AnimationControls>
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Explicabo deleniti molestias, quam, quo nisi corporis sapiente,
              suscipit atque doloremque natus illo possimus voluptate ut sunt
              voluptates? Maiores reiciendis dolore expedita? Lorem ipsum dolor,
              sit amet consectetur adipisicing elit. Nam rerum dolorem officiis
              doloribus labore sapiente? Corrupti debitis harum inventore qui
              nemo! Qui libero est nemo doloremque tempore saepe reiciendis
              veritatis. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Amet earum assumenda, ratione pariatur quas eum eos,
              incidunt reiciendis aut eaque, voluptas officia ipsum illum iusto
              voluptate corrupti. Nulla, eligendi temporibus? Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Alias, error. Ex
              praesentium consequuntur hic illo doloribus accusantium
              laboriosam, quis ipsum voluptatibus eos nihil, corporis neque
              totam, suscipit ullam quo quam! Lorem ipsum dolor sit amet,
              consectetur adipisicing elit.
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
        </AnimationControls>
      </div>
    </>
  );
}
