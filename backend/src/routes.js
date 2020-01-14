const { Router } = require('express');
const axios = require('axios');
const routes = Router();

// Métodos HTTP: GET, POST, PUT, DELETE

// Tipos de parâmetros:
// Query Params: request.query (Filtros, ordenação, paginação
// Route Params: request.params (Identificar um recurso na alteração ou remoção)
// Body: request.body (Dados para criação ou alteração de um registro)

routes.post('/devs', async (request, response) => {
    console.log(request.body);
    const { name, avatar_url, bio, github_username, techs} = request.body;

    const apiresponse = await axios.get(`https://api.github.com/users/${github_username}` );
    console.log(apiresponse.data);
    return response.json({ message: 'Hello OmniStack' });
});

module.exports = routes;