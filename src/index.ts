import { OpenAI } from "langchain/llms/openai";
// import { ChatOpenAI } from "langchain/chat_models/openai";

import * as dotenv from "dotenv";
dotenv.config();

export const run = async () => {
  const model = new OpenAI({
    temperature: 0.9,
    maxTokens: 15,
  });

  //Calls out to the model's (OpenAI's) endpoint passing the prompt. This call returns a string
  const res = await model.call(
    "What would be a good company name a company that makes colorful socks?"
  );
  console.log({ res });
};

run();
