const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const http = require('http');
const dotenv = require('dotenv');

const routes = require('./routes');
const {setupWebsocket} = require('./websocket');

const app = express();
const server = http.Server(app);

setupWebsocket(server);

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

server.listen(3333);