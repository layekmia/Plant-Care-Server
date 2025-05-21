const expres = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = expres();

app.use(expres.json())
app.use(cors());

const mongodb_URI = process.env.MONGODB_URI;
const PORT = process.env.PORT;
