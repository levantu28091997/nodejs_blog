const Cource = require('../models/Cource');
const {
    mongooseToObject,
    mutipleMongooseToObject,
} = require('../../util/mongooes');

class SiteController {
    async home(req, res, next) {
        await Cource.find({})
            .then((cources) => {
                res.render('home', {
                    cources: mutipleMongooseToObject(cources),
                });
            })
            .catch((err) => {
                next(err);
            });
    }
}

module.exports = new SiteController();
