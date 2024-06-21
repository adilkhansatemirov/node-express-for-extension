const express = require("express");
const axios = require("axios");
const fs = require("node:fs");
const OpenAI = require("openai");
const { put } = require("@vercel/blob");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

// app.get("/", (req, res) => res.send("Express on Vercel"));

app.post("/", async (req, res) => {
  console.log("req.body", req.body);
  // const payload = {
  //   prompt: `cat who is fan of music dressed in shirt of '${req.body.artists[0]}' and has posters of '${req.body.artists[0]}' in his room`,
  //   output_format: "webp",
  // };

  // const completion = await openai.chat.completions.create({
  //   messages: [{ role: "user", content: "Who is the GOAT in football" }],
  //   model: "gpt-3.5-turbo",
  // });

  // console.log(completion.choices[0]);

  // const response = await axios.postForm(
  //   `https://api.stability.ai/v2beta/stable-image/generate/core`,
  //   axios.toFormData(payload, new FormData()),
  //   {
  //     validateStatus: undefined,
  //     responseType: "arraybuffer",
  //     headers: {
  //       Authorization: `Bearer sk-fODBeeh9zhUA4em1M0TWVrwhpIAFIf97MPeiLz6co2vAUymH`,
  //       Accept: "image/*",
  //     },
  //   }
  // );

  // if (response.status === 200) {
  //   const { url } = await put('test.webp', Buffer.from(response.data), { access: 'public', token: 'vercel_blob_rw_ydxEZ2W6gI80kQxw_0z4FaZPVoTW9i55Hu9dVFRx39NXnl6' });
  //   res.json({ url })
  // } else {
  //   throw new Error(`${response.status}: ${response.data.toString()}`);
  // }

  const url =
    "https://ydxez2w6gi80kqxw.public.blob.vercel-storage.com/test-6S8smbLDMjiE7zhz8cqHaq7W5kkiWU.webp";

  res.json({ url });
});

app.listen(3000, () => console.log("Server ready on port 3000."));

module.exports = app;

// const artists = {}

// for (let index = 0; index < 12; index++) {
//     const song = lastLikedSongs[index];
//     song.artists.forEach(artist => {
//         if (artists[artist]) {
//             artists[artist] += 1
//         } else {
//             artists[artist] = 1
//         }
//     })
// }

// function getTopTwoStrings(obj) {
//     const entries = Object.entries(obj);
//     entries.sort((a, b) => b[1] - a[1]);
//     const topTwoEntries = entries.slice(0, 2);
//     const [first, second] = topTwoEntries.map(entry => entry[0]);
//     return [first, second];
// }

// const result = getTopTwoStrings(artists)

// console.log('artists', artists);
