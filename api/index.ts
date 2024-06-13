const express = require("express");
const axios = require("axios");
const fs = require("node:fs");
import { put } from "@vercel/blob";
const app = express();

// app.get("/", (req, res) => res.send("Express on Vercel"));

app.get("/", async (req, res) => {
  const payload = {
    prompt: "cat who is fan of music dressed in shirt of 21 Savage and has posters of Taylor Swift in his room",
    output_format: "webp",
  };

  const response = await axios.postForm(
    `https://api.stability.ai/v2beta/stable-image/generate/core`,
    axios.toFormData(payload, new FormData()),
    {
      validateStatus: undefined,
      responseType: "arraybuffer",
      headers: {
        Authorization: `Bearer sk-VdNECUMuny512NCbs6hXg6DwiVIAeR2hi8IbirmdMRdFgc04`,
        Accept: "image/*",
      },
    }
  );

  if (response.status === 200) {
    
    // fs.writeFileSync("./public/new-image.webp", Buffer.from(response.data));
    const { url } = await put('test.webp', Buffer.from(response.data), { access: 'public' });
    res.send(`Express on Vercel = ${url}`)
  } else {
    throw new Error(`${response.status}: ${response.data.toString()}`);
  }
});

app.listen(3003, () => console.log("Server ready on port 3000."));

module.exports = app;
