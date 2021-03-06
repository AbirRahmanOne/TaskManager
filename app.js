const express = require('express') ;
const connectDB = require('./config/db');
const taskRouters = require('./routes/taskRoutes');
const dotenv = require('dotenv') ;

const app = express() ;
dotenv.config() ;


// db connections 
connectDB() ;

//body-parser
app.use(express.json()) ;


let port = process.env.PORT ; 
if(port == null || port == ""){
    port = 8000;
}

// endpoint 
app.use('/task', taskRouters);

app.get('/',(req,res)=>{
    res.send('Task Manager Api Endpoint');
})


app.listen(port, ()=>{
    console.log(`Task Manager app listening at http://localhost:${port}`)
});
