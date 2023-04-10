import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { SurveyContext } from "../Context/Survey";

export default function Greet () {
  const { setStart } = useContext(SurveyContext)
  return (
    <>
      <div className=" bg-[#F4F0EC]">
        <div className="w-4/5 h-[100vh] mx-auto data-container flex  items-center justify-center ">
          <div className="greeting-part ">
            <div className="">
              <h1 className="text-[4rem] text-[#292F36] font-bold">
                WELCOME!!
              </h1>
            </div>
            <div className="">
              We need your feedback for better improvment of our Products and
              Survices. you can give your suggestions by cliking the button.
            </div>
            <div>
              <button onClick={() => setStart(true)} className="btn bg-sky-500 text-white rounded-full p-4 mt-5 px-8 text-[1.rem] hover:bg-sky-700">
                Start Survey
              </button>
            </div>
          </div>
          <div className="image-part item-center justify-center ">
            <picture className="">
              <img src="./images/Survey-01.png" alt="" />
            </picture>
          </div>
        </div>
      </div>
    </>
  );
};


