const express = require('express')

const app = express()

const port = 5000

const verif=(req,res,next)=>{
    const today = new Date()
    const day = today.getDay()
    const hours = today.getHours()

    if(day == 0 || day == 6 || hours>17 || hours<9 ){
        return res.send('<h1>Fermée</h1>')
    }
    next()
}

app.use(verif)

app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/Public/Home.html')
})
app.get('/OurServices',(req,res)=>{
    res.sendFile(__dirname+'/Public/OurServices.html')
})
app.get('/ContactUs',(req,res)=>{
    res.sendFile(__dirname+'/Public/ContactUs.html')
})
app.get('/Style.css',(req,res)=>{
    res.sendFile(__dirname+'/Public/Style.css')
})


app.listen(port, console.log('Server is running'))