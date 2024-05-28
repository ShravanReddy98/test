import express from "express";

const app=express()
const Port=3000

app.get("/",(req,res)=>{
    res.send("hello there");
})

app.listen(Port,()=>{
    console.log("server is running");
})