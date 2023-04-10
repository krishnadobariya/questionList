import React from "react";
import CustomerSurvey from "../Components/CustomerSurvey";
import Greet from "../Components/Greet";
import Thank from "../Components/Thank";
import Survey from "../Context/Survey";
import { SurveyContext } from "../Context/Survey";
import { useContext } from "react";

function Home() {
  const { start, exit } = useContext(SurveyContext);
  return (
    <>
      {
      exit === false ? 
        <>
        {
        start === true ? 
        <CustomerSurvey /> 
        : 
        <Greet />
        }
        </>
       : <Thank />
      }
    </>
  );
}

export default Home;
