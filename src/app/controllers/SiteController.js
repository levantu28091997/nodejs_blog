const Cource = require('../models/Cource');

class SiteController {
    async home(req, res) {
        // res.render('home');
        await Cource.find({})
            .then((cources) => {
                res.status(200).json({ data: cources });
            })
            .catch((err) => {
                res.status(400).json({ error: 'ERROR!!' });
            });
    }
}

module.exports = new SiteController();
