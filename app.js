const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const validateToken = require('./services/validate-token');
const connectToMongoDB = require('./services/db_connection');
const app = express();

connectToMongoDB();
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', validateToken, require('./routes/logs.routes'));
app.use('/api', validateToken, require('./routes/main.routes'));

module.exports = app;
