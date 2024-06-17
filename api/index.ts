const express = require("express");
const axios = require("axios");
const fs = require("node:fs");
import OpenAI from "openai";
import { put } from "@vercel/blob";
const app = express();

app.use(express.json());

// app.get("/", (req, res) => res.send("Express on Vercel"));

app.post("/", async (req, res) => {
  const payload = {
    prompt: "cat who is fan of music dressed in shirt of '21 Savage' and has posters of 'Taylor Swift' in his room",
    output_format: "webp",
  };

  console.log('req.body', req.body);

  // const response = await axios.postForm(
  //   `https://api.stability.ai/v2beta/stable-image/generate/core`,
  //   axios.toFormData(payload, new FormData()),
  //   {
  //     validateStatus: undefined,
  //     responseType: "arraybuffer",
  //     headers: {
  //       Authorization: `Bearer sk-VdNECUMuny512NCbs6hXg6DwiVIAeR2hi8IbirmdMRdFgc04`,
  //       Accept: "image/*",
  //     },
  //   }
  // );

  // if (response.status === 200) {
    
  //   // fs.writeFileSync("./public/new-image.webp", Buffer.from(response.data));
  //   const { url } = await put('test.webp', Buffer.from(response.data), { access: 'public' });
  //   res.send(`Express on Vercel = ${url}`)
  // } else {
  //   throw new Error(`${response.status}: ${response.data.toString()}`);
  // }

  res.setHeader('Access-Control-Allow-Origin', '*')
  res.send('test')

  

  // const completion = await openai.chat.completions.create({
  //   messages: [{ role: "user", content: "Who is the GOAT in football" }],
  //   model: "gpt-3.5-turbo",
  // });

  // console.log(completion.choices[0]);

  // res.send(completion.choices[0])
});

app.listen(3000, () => console.log("Server ready on port 3000."));

module.exports = app;
