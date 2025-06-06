import express from "express"

const port = 5000;
const app = express()

app.get("/",(req,res) => {
  res.send("hello i am a guy")
})

app.listen(port,() => {
  console.log(`the server is listen ${port}`)
})