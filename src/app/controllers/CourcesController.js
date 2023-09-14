const Cource = require('../models/Cource');
const {
    mongooseToObject,
    mutipleMongooseToObject,
} = require('../../util/mongooes');

class CourcesController {
    // [GET] /cources/create
    async create(req, res, next) {
        res.render('cources/create');
    }

    // [POST] /cources/store
    async store(req, res, next) {
        const formData = req.body;
        formData.image = `https://i.ytimg.com/vi/${req.body.videoId}/hq720.jpg`;
        const cource = new Cource(req.body);
        cource
            .save()
            .then(() => {
                res.redirect('/');
            })
            .catch((err) => {
                console.log(err);
                next(err);
            });
    }

    // [GET] /cources/:slug
    async show(req, res, next) {
        await Cource.findOne({ slug: req.params.slug })
            .then((cource) => {
                res.render('cources/detail', {
                    cource: mongooseToObject(cource),
                });
            })
            .catch((err) => {
                next(err);
            });
    }

    // [GET] /cources/:id/edit
    async edit(req, res, next) {
        await Cource.findById(req.params.id)
            .then((cource) => {
                res.render('cources/edit', {
                    cource: mongooseToObject(cource),
                });
            })
            .catch((err) => {
                next(err);
            });
    }

    // [PUT] /cources/:id
    async update(req, res, next) {
        await Cource.updateOne({ _id: req.params.id }, req.body)
            .then(() => {
                res.redirect('/me/stored/cources');
            })
            .catch((err) => {
                next(err);
            });
    }
}

module.exports = new CourcesController();
