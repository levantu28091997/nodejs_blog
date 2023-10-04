const Cource = require('../models/Cource');
const { mutipleMongooseToObject } = require('../../util/mongooes');

class MeController {
    storedCources(req, res, next) {
        let dataCources = Cource.find({});
        if (req.query.hasOwnProperty('_sort')) {
            dataCources.sort({
                [req.query.field]: req.query.type,
            });
        }

        Promise.all([dataCources, Cource.countWithDeleted({ deleted: true })])
            .then(([cources, countDeleted]) => {
                res.render('me/stored-cources', {
                    countDeleted,
                    cources: mutipleMongooseToObject(cources),
                });
            })
            .catch((err) => {
                next(err);
            });
    }

    trashCources(req, res, next) {
        Cource.findWithDeleted({ deleted: true })
            .then((cources) => {
                res.render('me/trash-cources', {
                    cources: mutipleMongooseToObject(cources),
                });
            })
            .catch((err) => {
                next(err);
            });
    }
}

module.exports = new MeController();
