const Dev = require('../models/Dev');
const parseStringAsArray = require('../utils/parseStringAsArray');

module.exports = {
    async index(request, response) {
        // buscar todos os devs num raio de 10km
        // filtrar por tecnologia
        const {latitude, longitude, techs} = request.query;

        const techsArray = parseStringAsArray(techs);

        const  devs = await Dev.find({
            techs: {
                 $in: techsArray ,
            },
            location: {
                $near: {
                    $geometry:{
                        type: 'Point',
                        coordinates: [longitude, latitude]
                    },
                    $maxDistance: 100000, //em metros
                },
            },
        });

        return response.json({ devs });
    }
};
