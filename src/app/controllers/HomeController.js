const Cource = require('../models/Cource');
const { mutipleMongooseToObject } = require('../../util/mongooes');

class HomeController {
    async home(req, res, next) {
        await Cource.find({})
            .then((cources) => {
                res.jsonSuccess(mutipleMongooseToObject(cources));
            })
            .catch((err) => {
                next(err);
            });
    }
}

module.exports = new HomeController();
