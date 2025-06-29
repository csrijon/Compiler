import express from "express"
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

app.get("/",(req,res) => {
  res.send("hello i am a guy")
})
app.post("/output/code", (req, res) => {
  const { language_id, code } = req.body;
 if (!language_id || !code) {
    return res.status(400).json({ error: "language_id and code are required" });
  }
  try {
    const url = 
  } catch (error) {
    
  }
});

app.listen(port,() => {
  console.log(`the server is listen ${port}`)
})