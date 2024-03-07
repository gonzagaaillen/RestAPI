const express = require('express');
const mongoose = require('mongoose');
const app = express();

mongoose.connect('mongodb+srv://ustp:VZm8Zo385wuDEyPy@gonzaga.g1ncfep.mongodb.net/?retryWrites=true&w=majority').then(() =>{
  console.log('MongoDB Connected...');
})
.catch((err) =>{
  console.log('Error connecting to MongoDB:', err);
});

const EmployeeRoute = require('./Routes/Employee.route');
app.use(('/employee'), EmployeeRoute);

const UserRoute = require('./Routes/Users.route');
app.use(('/user'), UserRoute);

app.listen(3000, ()=>{
  console.log('Listening on port 3000...');
});