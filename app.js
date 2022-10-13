const express = require('express');

const app = express();

const PORT = 9090;

app.set('view engine', 'ejs');
app.use('/views', express.Static(__dirname + '/views'));