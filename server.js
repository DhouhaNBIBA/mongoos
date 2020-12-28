const express=require("express") ;
const mongoose=require('mongoose') ;


mongoose.connect('mongodb+srv://user1:1234cp@cluster1.i3lm2.mongodb.net/first_bd?retryWrites=true&w=majority',
{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
  },
(err)=>{
    if(err) {
        console.log(err)
    }
    else {
        console.log("Database connected successfully !")
    }
}) ;

const app=express() ;

app.use(express.json()) ;
app.use('/api/persons',require('./routes/personsRoutes'))

app.listen(8080,(err)=>{
    if(err)  {
        console.log(err)
    } 
    else {
        console.log("Server is listening on port 8080")
    }
}) ;