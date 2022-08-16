const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const connectToMongoDB = require('./services/db_connection');
const app = express();

connectToMongoDB();
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', require('./routes/logs.routes'));
app.use('/api', require('./routes/main.routes'));

module.exports = app;
