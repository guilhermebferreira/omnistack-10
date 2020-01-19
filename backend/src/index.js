const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');
const dotenv = require('dotenv');

const app = express();

dotenv.config();
console.log('DB Connection');
console.log(`mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PSSWR}@cluster0-elh6i.mongodb.net/test?retryWrites=true&w=majority`);

mongoose.connect(`mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PSSWR}@cluster0-elh6i.mongodb.net/test?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);