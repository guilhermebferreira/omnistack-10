const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const app = express();

dotenv.config();

mongoose.connect('mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PSSWR}@cluster0-elh6i.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(express.json());
// Métodos HTTP: GET, POST, PUT, DELETE

// Tipos de parâmetros:
// Query Params: request.query (Filtros, ordenação, paginação
// Route Params: request.params (Identificar um recurso na alteração ou remoção)
// Body: request.body (Dados para criação ou alteração de um registro)
app.get('/', (request, response) => {
    return response.json({message: 'Hello Omnistack 10'});
});

app.listen(3333);