const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser'); 
const mongoose = require('mongoose');

const bodypartRoutes = require('./api/routes/bodypart');
const chestRoutes = require('./api/routes/chest');

mongoose.connect('mongodb+srv://dralan:dralan@full-body-workout-ibqqf.mongodb.net/test?retryWrites=true',
{ useNewUrlParser: true });

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use('/bodypart', bodypartRoutes );
app.use('/chest', chestRoutes);
app.use((req , res, next)=>{
    const error = new Error('Not Found');
    error.status =404;
    next(error);
});

app.use((error, req, res, next)=>{
    res.status(error.status || 500);
    res.json({
        error:{
            message : error.message
        }
    });
});

module.exports = app;