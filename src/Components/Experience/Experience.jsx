import { faCaretRight, faCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import ExData from "./ExperienceData";
import AnimationControls from "../AnimationControls";

export default function Experience() {
  
  const [exp, setexp] = useState("smit");

  return (
    <>
      <div id="experience" className="md:w-[80%] p-6 md:ml-12 w-full lg:ml-28 overflow-hidden">
        <AnimationControls>
        <div className=" whitespace-nowrap py-10">
          <span className="text-greenColor">02.</span>
          <h2 className="text-3xl font-bold text-head_Color px-3 inline-block">
            Where I've Worked
          </h2>
          <hr className="md:w-[40%] inline-block ml-16 w-[50%]" />
        </div>

        <div className="flex flex-col md:flex-row gap-20">
          <div className="">
            <ul className="flex justify-center md:flex-col cursor-pointer ">
              <li
                className={`${
                  exp == "smit" ? "bg-navbgColor border-greenColor " : "border-textColor "
                } experience_nav`}
                onClick={() => setexp("smit")}
              >
                SMIT
              </li>
              <li
                className={`${
                  exp == "FIVER" ? "bg-navbgColor border-greenColor " : "border-textColor "
                } experience_nav`}
                onClick={() => setexp("FIVER")}
              >
                FIVER
              </li>
              <li
                className={`${
                  exp == "GCUF" ? "bg-navbgColor border-greenColor " : "border-textColor "
                } experience_nav`}
                onClick={() => setexp("GCUF")}
              >
                GCUF
              </li>
            </ul>
          </div>
          {ExData.map((value, key) => {
            if (value.id === exp) {
              return (
                <div key={key}>
                  <div className="text-xl">
                    {value.title}
                    <a
                      href={value.src} target="_blank"
                      className=" text-greenColor pl-1"
                    >
                      {value.link}
                      <span className="hover:border-b hover:border-greenColor">
                        {value.company}
                      </span>
                    </a>
                    <div>{value.date}</div>
                    {value.content.map((item, index) => (
                      <ul class="list-non" key={index}>
                        <li class="flex items-center mb-2">
                          <FontAwesomeIcon
                            icon={faCaretRight}
                            className=" text-greenColor"
                          />
                          {item}
                        </li>
                      </ul>
                    ))}
                  </div>
                </div>
              
              );
            }
            return null;
          })}
          
        </div>
        </AnimationControls>
      </div>
    </>
  );
}
