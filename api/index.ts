const express = require("express");
const axios = require("axios");
const fs = require("node:fs");
const app = express();

// app.get("/", (req, res) => res.send("Express on Vercel"));

app.get("/", async (req, res) => {
  const payload = {
    prompt: "cat who is fan of music dressed in shirt of Ariana Grande and has posters of Taylor Swift in his room",
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
    fs.writeFileSync("./lighthouse.webp", Buffer.from(response.data));
    res.send("Express on Vercel")
  } else {
    throw new Error(`${response.status}: ${response.data.toString()}`);
  }
});

app.listen(3003, () => console.log("Server ready on port 3000."));

module.exports = app;
