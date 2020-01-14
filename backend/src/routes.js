const { Router } = require('express');
const axios = require('axios');
const routes = Router();
const Dev = require('./models/Dev');

// Métodos HTTP: GET, POST, PUT, DELETE

// Tipos de parâmetros:
// Query Params: request.query (Filtros, ordenação, paginação
// Route Params: request.params (Identificar um recurso na alteração ou remoção)
// Body: request.body (Dados para criação ou alteração de um registro)

routes.post('/devs', async (request, response) => {
    console.log(request.body);

    const { github_username, techs} = request.body;

    const apiresponse = await axios.get(`https://api.github.com/users/${github_username}` );

    const { name = login, avatar_url, bio} = apiresponse.data;

    console.log(name, avatar_url, bio, techs);
    const techsArray = techs.split(',').map(tech => tech.trim());

    const dev = await Dev.create({
        github_username,
        name,
        avatar_url,
        bio,
        techs: techsArray,
    });

    return response.json(dev);
});

module.exports = routes;