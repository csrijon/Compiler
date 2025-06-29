import express, { json } from "express"
import fetch from "node-fetch";
import 'dotenv/config'
import cors from "cors"

const port = 5000;
const app = express()
// app.use(cors())
const corsoption = {
  origin: 'http://localhost:5173'
}
app.use(cors(corsoption))
app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello i am a guy")
})
app.post("/output/code", async (req, res) => {
  const { language_id, code } = req.body;
  if (!language_id || !code) {
    return res.status(400).json({ error: "language_id and code are required" });
  }
    const url = process.env.API_URL
    const option = {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'x-rapidapi-key':process.env.API_KEY,
        'x-rapidapi-host' :process.env.API_HOST
      },
       body: JSON.stringify({
         source_code: code,
      language_id: language_id
       })
    }
   try {
    const responsedata = await fetch(url,option);
    const resdata = await responsedata.json()
    console.log(resdata)
    res.status(200).json(resdata);
   } catch (error) {
   console.error(error);
    res.status(500).json({ error: "Something went wrong" });
   }
});

app.listen(port, () => {
  console.log(`the server is listen ${port}`)
})