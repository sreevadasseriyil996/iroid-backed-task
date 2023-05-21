const express=require('express')
const cors=require('cors')
const server=express()
const logic=require('./services/logic')


server.use(cors({
    origin:'http://localhost:3000'
}))
server.use(express.json())
server.listen(8000,()=>{
    console.log('server started at 8000');
})

//register

server.post('/register',(req,res)=>{
    
logic.register(req.body.uname,req.body.email,req.body.password )
.then((result)=>{
    res.status(result.statusCode).json(result)
})

})

server.post('/login',(req,res)=>{
    
    logic.login(req.body.email,req.body.password )
    .then((result)=>{
        res.status(result.statusCode).json(result)
    })
    
    })