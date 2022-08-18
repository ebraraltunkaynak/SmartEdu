const express = require('express');
const mongoose = require('mongoose')
const pageRoute= require('./routes/pageRoute');
const courseRoute=require('./routes/courseRoute')

const app = express();


//connect db
mongoose.connect('mongodb://localhost:27017/smartedu-db',{
  
}).then(()=>{
  console.log('database bağlantısı başarılı')
});
//template engine
app.set("view engine","ejs");


//middleware
app.use(express.static('public'));
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

//routes
app.use('/', pageRoute);
app.use('/courses', courseRoute);


const port = 5000;
app.listen(port, () => {
  console.log(`Uygulama ${port} portunda çalışıyor.`);
});
