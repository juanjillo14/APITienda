const mongoose = require('mongoose');
require('dotenv').config();

const URI = `mongodb+srv://juanADSO:${process.env.PASS}@adso2903013.u5ldj.mongodb.net/${process.env.BD}`

mongoose.connect(URI)
module.exports = mongoose;