
const axios = require('axios');
const Dev = require('../models/Dev');

module.exports = {

    async store (request, response) {
        console.log(request.body);

        const { github_username, techs, latitude, longitude} = request.body;

        const apiresponse = await axios.get(`https://api.github.com/users/${github_username}` );

        const { name = login, avatar_url, bio} = apiresponse.data;

        console.log(name, avatar_url, bio, techs);
        const techsArray = techs.split(',').map(tech => tech.trim());

        const location = {
            type: 'Point',
            coordinates: [longitude, latitude],
        }

        const dev = await Dev.create({
            github_username,
            name,
            avatar_url,
            bio,
            techs: techsArray,
            location,
        });

        return response.json(dev);
    }

}
