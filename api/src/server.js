'use strict';

const express = require('express');
const app = express();
app.use(express.json());


app.use('/', require('./posts.controller'));


app.listen(3200, () => console.log("Running on port 3200"));