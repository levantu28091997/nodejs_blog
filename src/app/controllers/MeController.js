const Cource = require('../models/Cource');
const { mutipleMongooseToObject } = require('../../util/mongooes');

class MeController {
    async storedCources(req, res, next) {
        await Cource.find({})
            .then((cources) => {
                res.render('me/stored-cources', {
                    cources: mutipleMongooseToObject(cources),
                });
            })
            .catch((err) => {
                next(err);
            });
    }
}

module.exports = new MeController();
