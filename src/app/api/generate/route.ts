import { NextResponse } from 'next/server';
import { Configuration, OpenAIApi } from 'openai';

const config = new Configuration({ apiKey: process.env.OPENAI_API_KEY });
const openai = new OpenAIApi(config);

export async function POST(req: Request) {
  const { name, headline, skills } = await req.json();
  const prompt = `
Generate a resume for:
Name: ${name}
Headline: ${headline}
Skills: ${skills.join(', ')}
Return JSON: {"summary": "...", "skills": ["..."], "experience": ["..."]}
`;
  const res = await openai.createCompletion({
    model: "text-davinci-003",
    prompt,
    max_tokens: 500,
    temperature: 0.7
  });
  const text = res.data.choices[0].text || "{}";
  try {
    return NextResponse.json(JSON.parse(text));
  } catch {
    return NextResponse.json({ summary: text, skills: [], experience: [] });
  }
}
