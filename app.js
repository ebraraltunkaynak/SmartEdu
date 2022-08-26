const express = require('express');
const mongoose = require('mongoose')
const session =require('express-session')
const pageRoute= require('./routes/pageRoute');
const courseRoute=require('./routes/courseRoute')

const categoryRoute=require('./routes/categoryRoute')
const userRoute= require('./routes/userRoute')
const app = express();


//connect db
mongoose.connect('mongodb://localhost:27017/smartedu-db',{
  
}).then(()=>{
  console.log('database bağlantısı başarılı')
});

// GLOBAL Variable

global.userIN=null;
//template engine
app.set("view engine","ejs");


//middleware

app.use(express.static('public'));
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(session({
  secret: 'my_keyboard_dog',
  resave: false,
  saveUninitialized: true
}))
//routes
app.use('*',(req,res,next) =>{
  userIn =req.session.userID;
  next();
})
app.use('/', pageRoute);
app.use('/courses', courseRoute);
app.use('/categories', categoryRoute);
app.use('/users', userRoute);



const port = 5000;
app.listen(port, () => {
  console.log(`Uygulama ${port} portunda çalışıyor.`);
});
