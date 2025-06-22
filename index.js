require('dotenv').config()
const express= require('express')
const app= express()
const port=3000
app.get('/',(req,res)=>{
    res.send("Hello")
})
app.get('/login',(req,res)=>{
    res.send('<h1>plase login</h1>')
})
app.get('/youtube',(req,res)=>{
    res.send('<h1>plase login at youtube</h1>')
})
app.listen(port,()=>{
    console.log(`Exmaple app listening on port ${port}`)
})