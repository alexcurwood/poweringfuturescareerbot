import { NextResponse, NextRequest } from "next/server";

export async function POST(req) {
  const json = await req.json();

  const bodyContent = `Here are some questions and answers to help you recommend me a career: Q1: ${json.answers[0].question}? Answer: ${json.answers[0].answer}. Q2: ${json.answers[1].question}? Answer: ${json.answers[1].answer}. Q3: ${json.answers[2].question}? Answer: ${json.answers[2].answer}.  Q4: ${json.answers[3].question}? Answer: ${json.answers[3].answer}.`;

  let message;

  const url = "https://api.openai.com/v1/chat/completions";
  const headers = {
    Authorization: "Bearer " + process.env.NEXT_PUBLIC_API_KEY,
    "Content-Type": "application/json",
  };
  const data = {
    model: "gpt-4",
    messages: [
      {
        role: "system",
        content:
          "You are helping me find a career, recommend a job and why it suits me",
      },
      { role: "user", content: bodyContent },
    ],
  };

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }

    const responseData = await response.json();
    console.log(responseData);
    message = responseData.choices[0].message.content;
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(`Error: ${error.message}`);
  }

  return NextResponse.json(message);
}
