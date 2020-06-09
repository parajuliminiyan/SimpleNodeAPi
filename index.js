const express = require('express');

const app = express();


const mongoose = require('mongoose');
Task = require('./api/models/model');
bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Taskdb');

// app.use((req,res)=> {
//     res.status(404).send({url:req.originalUrl+ ' not found'});
// });

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

var routes = require('./api/routes/routes');
routes(app);

app.listen(3000);
console.log('Server running at 3000');
