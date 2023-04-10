import React, { useContext, useState, useRef } from "react";
import { SurveyContext } from "../Context/Survey";
import Thank from "./Thank";

export default function CustomerSurvey() {
  const [current, setCurrent] = useState(0);

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <Box current={current} handler={setCurrent} />
    </div>
  );
}

const Box = ({ current, handler }) => {
  const { questions, setExit, count, setCount } = useContext(SurveyContext);
  const [ans, setAns] = useState("");

  let storage = {};
  let index = 0;

  while (localStorage.key(index) !== null) {
    const key = localStorage.key(index);
    storage[key] = localStorage.getItem(key);
    index += 1;
  }
  console.log("====================================");
  console.log("storage", storage);
  console.log("====================================");

  const selectAnswer = (ans) => {
    setAns(ans);
    localStorage.setItem(`question_${current}`, ans);
  };

  const nextHandler = () => {
    if (current === questions.length - 1) {
      setExit(true);
    } else {
      handler(current + 1);
      setAns("");
    }
    if (questions[current].count === ans) {
      setCount(count + 1);
    }
    setAns("");
  };

  const prevHandler = () => {
    if (current > 0) {
      handler(current - 1);
      setAns("");
    }
  };

  return (
    <>
      <div className="xl:w-[40%] sm:w-[90%] min-h-[200px] border shadow-lg rounded-md overflow-hidden">
        <p className="text-center p-3 font-bold text-[2rem]">Customer Survey</p>
        <h1 className="text-end p-5">{current + 1}/5</h1>
        <div className="p-2 text-2xl flex justify-between">
          {questions[current].question}
        </div>
        {console.log(
          "questions[current].question",
          questions[current].question
        )}
        {questions[current].type === "input" ? (
          <>
            <input
              // ref={data}
              type="text"
              className="p-2 rounded-full  outline-none border-gray-300 focus:border-gray-500 min-w-[500px]  border mb-[4rem] ml-[0.5rem]"
              placeholder="Enter your answer here"
              onChange={(e) =>
                localStorage.setItem("question_4", e.target.value)
              }
            />
          </>
        ) : (
          <div className="grid grid-cols-5 text-center  my-3">
            {questions[current].a && (
              <div
                className={`p-2  rounded-full font-bold ${
                  storage[`question_${questions[current].id}`] === "1"
                    ? "bg-[#c0bcb9] text-white"
                    : ""
                }  duration-200 cursor-pointer`}
                onClick={() => selectAnswer("1")}
              >
                {questions[current].a}
              </div>
            )}
            {questions[current].b && (
              <div
                className={`p-2 rounded-full  font-bold ${
                  storage[`question_${questions[current].id}`] === "2"
                    ? "bg-[#c0bcb9] text-white"
                    : ""
                }  duration-200 cursor-pointer`}
                onClick={() => selectAnswer("2")}
              >
                {questions[current].b}
              </div>
            )}
            {questions[current].c && (
              <div
                className={`p-2 rounded-full  font-bold ${
                  storage[`question_${questions[current].id}`] === "3"
                    ? "bg-[#c0bcb9] text-white"
                    : ""
                } duration-200 cursor-pointer`}
                onClick={() => selectAnswer("3")}
              >
                {questions[current].c}
              </div>
            )}
            {questions[current].d && (
              <div
                className={`p-2 rounded-full  font-bold ${
                  storage[`question_${questions[current].id}`] === "4"
                    ? "bg-[#c0bcb9] text-white"
                    : ""
                }  duration-200 cursor-pointer`}
                onClick={() => selectAnswer("4")}
              >
                {questions[current].d}
              </div>
            )}
            {questions[current].e && (
              <div
                className={`p-2 rounded-full font-bold  ${
                  storage[`question_${questions[current].id}`] === "5"
                    ? "bg-[#c0bcb9] text-white"
                    : ""
                }  duration-200 cursor-pointer`}
                onClick={() => selectAnswer("5")}
              >
                {questions[current].e}
              </div>
            )}

            {questions[current].f && (
              <div
                className={`p-2 rounded-full font-bold  ${
                  storage[`question_${questions[current].id}`] === "6"
                    ? "bg-[#c0bcb9] text-white"
                    : ""
                }  duration-200 cursor-pointer`}
                onClick={() => selectAnswer("6")}
              >
                {questions[current].f}
              </div>
            )}

            {questions[current].g && (
              <div
                className={`p-2 rounded-full font-bold  ${
                  storage[`question_${questions[current].id}`] === "7"
                    ? "bg-[#c0bcb9] text-white"
                    : ""
                }  cursor-pointer`}
                onClick={() => selectAnswer("7")}
              >
                {questions[current].g}
              </div>
            )}
            {questions[current].h && (
              <div
                className={`p-2 rounded-full font-bold  ${
                  storage[`question_${questions[current].id}`] === "8"
                    ? "bg-[#c0bcb9] text-white"
                    : ""
                } cursor-pointer`}
                onClick={() => selectAnswer("8")}
              >
                {questions[current].h}
              </div>
            )}
            {questions[current].i && (
              <div
                className={`p-2 rounded-full font-bold   ${
                  storage[`question_${questions[current].id}`] === "9"
                    ? "bg-[#c0bcb9] "
                    : ""
                }  cursor-pointer`}
                onClick={() => selectAnswer("9")}
              >
                {questions[current].i}
              </div>
            )}

            {questions[current].j && (
              <div
                className={`p-2 rounded-full  font-bold ${
                  storage[`question_${questions[current].id}`] === "10"
                    ? "bg-[#c0bcb9] text-white"
                    : ""
                }  cursor-pointer`}
                onClick={() => selectAnswer("10")}
              >
                {questions[current].j}
              </div>
            )}
          </div>
        )}

        <div className="flex justify-between">
          <div
            className="h-[40px] bg-[#c0bcb9] text-black font-bold px-3 cursor-pointer py-2"
            onClick={prevHandler}
          >
            Prev
          </div>

          <div
            className="h-[40px] bg-[#c0bcb9] text-black font-bold px-3 cursor-pointer py-2"
            onClick={nextHandler}
          >
            Next
          </div>
        </div>
      </div>
    </>
  );
};
