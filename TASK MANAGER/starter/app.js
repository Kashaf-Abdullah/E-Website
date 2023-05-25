const express=require('express')
const app=express()
const tasks=require('./routes/tasks')
const connectDB=require('./db/connect.js')
require('dotenv').config()

const notFound=require('./middleware/not-found')
//middleware

app.use(express.static('./public'))     //To serve static files such as images, CSS files, and JavaScript files, use the express.static built-in middleware function in Express.
app.use(express.json())

//routes
app.get('/hello',(req,res)=>{
    res.send('TASK MANAGER APP')
})


app.use('/api/v1/tasks',tasks)
app.use(notFound)



// app.get('/api/v1/tasks')                       -get all the task
// app.post('/api/v1/tasks')                     -get a new task
// app.get('/api/v1/tasks/:id')                  -get single task
// app.patch('/api/v1/tasks/:id')                -update task
// app.delete('/api/v1/tasks/:id')               -delete task



const port =3000;

const start=async()=>{
    try{
        await connectDB(process.env.MONGO_URI)        
        app.listen(port, console.log(`server is listening at ${port}`))

    }    
    
        catch(err){
    console.log(err)
}    
}    

start()