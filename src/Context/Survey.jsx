import React, { useState } from "react";
import { createContext } from "react";

const SurveyContext = createContext();

const questions = [
  {
    id:0,
    question: "How satisfied are you with our products?",
    a: "1",
    b: "2",
    c: "3",
    d: "4",
    e: "5",
    type: "option",
   
  },
  {
    id:1,
    question: "How fair are the prices compared to similar retailers?",
    a: "1",
    b: "2",
    c: "3",
    d: "4",
    e: "5",
    type: "option",
    
  },
  {
    id:2,
    question:
      "How satisfied are you with the value for money of your purchase?",
    a: "1",
    b: "2",
    c: "3",
    d: "4",
    e: "5",
    type: "option",
    
  },
  {
    id:3,
    question:
      "On a scale of 1-10 how would you recommend us to your friends and family?",
    a: "1",
    b: "2",
    c: "3",
    d: "4",
    e: "5",
    f: "6",
    g: "7",
    h: "8",
    i: "9",
    j: "10",
    type: "option",
   
  },
  {
    id:4,
    question: "What could we do to improve our service?",
    k: "",
    type: "input",
  },
];

export default function Survey(props) {
  const [start, setStart] = useState(false);
  const [exit, setExit] = useState(false);
  const [count, setCount] = useState(0);
  return (
    <SurveyContext.Provider
      value={{
        start,
        exit,
        setStart,
        setExit,
        questions,
        count,
        setCount
      }}
    >
      <div>{props.children}</div>
    </SurveyContext.Provider>
  );
}
export { SurveyContext };
