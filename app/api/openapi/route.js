// pages/api/openai.js
import { OpenAI } from "openai";

const openai = new OpenAI(process.env.NEXT_PUBLIC_OPENAI_API_KEY);

export default async function handler(req, res) {
  if (req.method === "POST") {
    const prompt = req.body.prompt;
    const maxTokens = req.body.maxTokens || 60;

    try {
      const gptResponse = await openai.createCompletion({
        engine: "davinci-codex",
        prompt,
        maxTokens,
        n: 3, // Generate 3 completions
      });

      res.status(200).json(gptResponse.data);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
