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
  const usercode = Buffer.from(code).toString("base64")
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
         source_code: usercode,
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

app.get("/output/code/:token",async (req,res) => {
  const token = req.params.token
  if (!token) {
    res.status(200)
     return;
  }
  const out_url = `https://judge0-ce.p.rapidapi.com/submissions/${token}?base64_encoded=true&fields=*`;
  const options = {
    method: "POST",
    headers:{
      "x-rapidapi-key": process.env.API_KEY,
      "x-rapidapi-host": process.env.API_HOST
    }
  }
   
  try {
    const outputres = await fetch(out_url,options)
    const outputdata = await outputres.json()
    console.log(outputdata)
    res.status(200).json(outputdata)
  } catch (error) {
    console.log(error)
    res.status(500).json({error: "something wrong "})
  }

})

app.listen(port, () => {
  console.log(`the server is listen ${port}`)
})