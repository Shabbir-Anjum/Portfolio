import React, { useState } from "react";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faArrowUpRightFromSquare,
  faFolder,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import OtherProjectData from "./OtherProjectData";

export default function OtherProject() {
  const [showall, setshowall]= useState(false);
  const [items, setitems]= useState(OtherProjectData.slice(0, 6))
  const handleData=()=>{
    if(showall){
      setitems(OtherProjectData.slice(0,6)); 
    }
    else{
      setitems(OtherProjectData);
      
    }
    setshowall(!showall);
  }
  return (
    <div id='blog' className="md:w-[80%] overflow-hidden my-40 m-auto p-6 md:ml-12 w-full lg:ml-28">
      <div className="title text-center text-head_Color">Other Projects</div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:grid-cols-3 my-20">
        {items.map((value, index) => (
          <div className="p-6 bg-navbgColor rounded-md">
            <div className="flex justify-between">
              <div className=" text-greenColor">
                <FontAwesomeIcon icon={faFolder} />
              </div>
              <div>
                <FontAwesomeIcon icon={faGithub} />
              </div>
            </div>
            <div className="py-6 text-head_Color text-2xl font-bold">
              {value.title}
            </div>
            <p className="py-6 text-textColor">
              {value.projectInfo}
            </p>
            <div>{value.tools}</div>
          </div>
        ))}
      </div>
    <div className="mx-auto  w-36">
      <button onClick={handleData} className="p-4 btn w-36 ">
        {showall? 'Show less' : 'Show All'}
      </button>
    </div>
    </div>
  );
}
