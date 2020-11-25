const express = require('express');
const mongoose = require('mongoose');

const routes = require('./routes');

const app =  express();

mongoose.connect('mongodb+srv://Samnas:19111911@webscrap.c7xyt.mongodb.net/train?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(express.json()); //informa que o express ira ultilizar formato JSON
app.use(routes); // routes.use(routes); precisa vir depois do app.use(express.json());


app.listen(9000);