import React, { useState, useEffect, useContext } from "react";
import { NavLink } from "react-router-dom";
import { SurveyContext } from "../Context/Survey";

function Thank() {
  const [shouldRefresh, setShouldRefresh] = useState(false);
  const { count } = useContext(SurveyContext);
  const q1 = localStorage.getItem("question_0");
  const q2 = localStorage.getItem("question_1");
  const q3 = localStorage.getItem("question_2");
  const q4 = localStorage.getItem("question_3");
  const avg = parseInt(q1) + parseInt(q2) + parseInt(q3) + parseInt(q4) /4;

  useEffect(() => {
    const timer = setTimeout(() => {
      setShouldRefresh(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  function handleRefreshClick() {
    setShouldRefresh(true);
  }

  if (shouldRefresh) {
    window.location="/";
    localStorage.setItem("question_0","");
    localStorage.setItem("question_1","");
    localStorage.setItem("question_2","");
    localStorage.setItem("question_3","");
  }

  return (
    <>
      <div className="bg-[#F4F0EC]  h-[100vh] mx-auto flex items-center justify-center">
        <div className="data-container">
          <div className=" data-container  items-center justify-center grid text-center">
            <h1 className="text-[4rem] text-[#292F36] font-bold">
              Thank You!!
            </h1>

            <p>Thanks for your feedback.</p>
            <h2 className="text-2xl mt-4"> {avg} total rating</h2>
            {/* <button
              onClick={handleRefreshClick}
              className="btn bg-black text-white rounded-full p-4 mt-5  text-[1.rem] hover:bg-white hover:text-black"
            >
              Go Back
            </button> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Thank;
