const Cource = require('../models/Cource');
const {
    mongooseToObject,
    mutipleMongooseToObject,
} = require('../../util/mongooes');

class CourcesController {
    // [GET] /cources/create
    create(req, res, next) {
        res.render('cources/create');
    }

    // [POST] /cources/store
    store(req, res, next) {
        const formData = { ...req.body };
        formData.image = `https://i.ytimg.com/vi/${req.body.videoId}/hq720.jpg`;
        const cource = new Cource(formData);
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
    show(req, res, next) {
        Cource.findOne({ slug: req.params.slug })
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
    edit(req, res, next) {
        Cource.findById(req.params.id)
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
    update(req, res, next) {
        Cource.updateOne({ _id: req.params.id }, req.body)
            .then(() => {
                res.redirect('/me/stored/cources');
            })
            .catch((err) => {
                next(err);
            });
    }

    // [DELETE] /cources/:id
    destroy(req, res, next) {
        Cource.delete({ _id: req.params.id })
            .then(() => {
                res.redirect('back');
            })
            .catch((err) => {
                next(err);
            });
    }

    // [PATCH] /cources/:id/restore
    restore(req, res, next) {
        console.log(req.params.id);
        Cource.restore({ _id: req.params.id })
            .then(() => {
                res.redirect('back');
            })
            .catch((err) => {
                next(err);
            });
    }

    // [DELETE] /cources/:id/remove
    remove(req, res, next) {
        Cource.deleteOne({ _id: req.params.id })
            .then(() => {
                res.redirect('back');
            })
            .catch((err) => {
                next(err);
            });
    }

    // [POST] /cources/handle-form-action
    handleFormAction(req, res, next) {
        console.log(req.body.courcesId);
        switch (req.body.action) {
            case 'delete':
                Cource.delete({ _id: { $in: req.body.courcesId } })
                    .then(() => {
                        res.redirect('back');
                    })
                    .catch((err) => {
                        next(err);
                    });

                break;

            default:
                res.json('successfull!');
                break;
        }
    }
}

module.exports = new CourcesController();
