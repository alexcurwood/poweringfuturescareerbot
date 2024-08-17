"use client";
import { useState } from "react";

export default function Home() {
  const [clickThrough, setClickThrough] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [displayData, setDisplayData] = useState(false);
  const [data, setData] = useState("");
  const [answers, setAnswers] = useState([]);

  function handleClickThrough() {
    setClickThrough(true);
  }
  async function handleClick() {
    console.log(answers);
    const response = await fetch("http://localhost:3000/api/answers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ answers }),
    });
    const data = await response.json();
    setData(data);
    setDisplayData(true);
  }

  const questionsAndAnswers = [
    {
      question: "What are your favourite subjects at school?",
      answers: [
        "Math",
        "Science",
        "History",
        "English",
        "Art",
        "Physical Education",
        "Music",
        "Geography",
        "Computer Science",
        "Foreign Languages",
      ],
    },
    {
      question: "Which skills are you confident in?",
      answers: [
        "Problem-Solving",
        "Communication",
        "Teamwork",
        "Time Management",
        "Critical Thinking",
        "Technical Skills",
        "Leadership",
        "Creativity",
        "Writing",
        "Research",
      ],
    },
    {
      question: "What skills are you interested in learning?",
      answers: [
        "Coding",
        "Public Speaking",
        "Project Management",
        "Graphic Design",
        "Data Analysis",
        "Foreign Language",
        "Marketing",
        "Photography",
        "Negotiation",
        "Networking",
      ],
    },
    {
      question:
        "Do you prefer to be given instructions or to have the freedom to decide what you work on yourself?",
      answers: [
        "Given Instructions",
        "Freedom to Decide",
        "A Mix of Both",
        "Depends on the Task",
      ],
    },
  ];

  function handleAnswer(questionToPush, answerToPush) {
    if (currentQuestion < questionsAndAnswers.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    }
    setAnswers((prev) => [
      ...prev,
      { question: questionToPush, answer: answerToPush },
    ]);
    console.log(answers);
  }

  return (
    <main className="flex-1 flex flex-col bg-slate-800 text-gray-300">
      {/* HEADER */}
      <section className="bg-black flex justify-between items-center bg-slate-900">
        <div className="hover:bg-gray-400 rounded p-2">
          <img src="./logo.png" alt="logo" className="h-12 p-2"></img>
        </div>
        <h3 className="hover:bg-gray-400 rounded p-2">Jobs Tracker</h3>
      </section>
      {/* MAIN BODY */}
      <section
        className="bg-cover pb-80 h-[800px]"
        style={{ backgroundImage: "url('/background.png')" }}
      >
        {clickThrough ? (
          <section className="w-screen flex justify-center items-center h-full">
            <section className="text-black w-[350px] mt-16 bg-slate-700 text-white rounded">
              <div className=" p-2">
                {questionsAndAnswers[currentQuestion].question}
              </div>
              <div className="p-2">
                {questionsAndAnswers[currentQuestion].answers.map(
                  (answer, index) => (
                    <div
                      key={index}
                      className="p-1 bg-white text-slate-900 m-2 rounded-lg border-2 hover:bg-slate-500"
                      onClick={() =>
                        handleAnswer(
                          questionsAndAnswers[currentQuestion].question,
                          answer
                        )
                      }
                    >
                      {answer}
                    </div>
                  )
                )}
              </div>
            </section>
          </section>
        ) : (
          <section className="flex flex-col items-center text-center h-full">
            <h1 className="text-[54px] mt-16">
              POWERING FUTURES:
              <br></br>
              NEXT STEPS
            </h1>
            <div className="text-[25px] mt-16">
              WHAT DO YOU WANT TO DO NEXT?
            </div>
            <div
              className="mt-8 bg-orange-400 hover:bg-orange-700 rounded p-2"
              onClick={() => handleClickThrough()}
            >
              Try our online quiz.
            </div>
          </section>
        )}
        {currentQuestion == questionsAndAnswers.length - 1 ? (
          <div className="w-full flex flex-col items-center">
            <button
              className="bg-orange-400 hover:bg-orange-700 text-white p-2 rounded"
              onClick={handleClick}
            >
              Submit Answers
            </button>
            {displayData && <>{data}</>}
          </div>
        ) : (
          <></>
        )}
      </section>
    </main>
  );
}
