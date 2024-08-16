"use client";
import { useState } from "react";
import Image from "next/image";
export default function Home() {
  const [clickThrough, setClickThrough] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  function handleClickThrough() {
    setClickThrough(true);
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
  function handleFetch() {}
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      {/* HEADER */}
      <section></section>
      {clickThrough ? (
        <section section className="text-black w-[200px]">
          <div className="bg-gray-200 p-2">
            {questionsAndAnswers[currentQuestion].question}
          </div>
          <div className="bg-gray-200 p-2">
            {questionsAndAnswers[currentQuestion].answers.map(
              (answer, index) => (
                <div key={index} className="p-1 border-black border-2">
                  {answer}
                </div>
              )
            )}
          </div>
        </section>
      ) : (
        <section className="flex flex-col items-center text-center">
          <h1 className="text-[84px]">
            POWERING FUTURES:
            <br></br>
            NEXT STEPS
          </h1>
          <div className="text-[40px] mt-16">WHAT DO YOU WANT TO DO NEXT?</div>
          <div className="mt-8" onClick={() => handleClickThrough()}>
            Try our online quiz.
          </div>
        </section>
      )}
    </main>
  );
}
