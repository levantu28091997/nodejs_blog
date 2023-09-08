class SearchController {
    index(req, res) {
        res.render('search');
    }

    submit(req, res) {
        res.send('oooo');
    }
}

module.exports = new SearchController();
