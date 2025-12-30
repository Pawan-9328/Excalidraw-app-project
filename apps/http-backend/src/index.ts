import express from "express";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "./config";

const app = express();


app.post("/signup", (req, res) => {
  //db call 
   res.json({
     userId: "123"
   })


})

app.post("/signin", (req, res) => {


  const userId = 1;
  const token = jwt.sign({
    userId
  }, JWT_SECRET);

  res.json({
    token
  })
})

app.post("/room", (req, res) => {
  //db call 
  res.json({
    roomId: 123
  })


})





const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`HTTP backend running on port ${PORT}`);
});


