const newsRoutes = require('./news');
const searchRoutes = require('./search');
const siteRoutes = require('./site');

function routes(app) {
    app.use('/news', newsRoutes);
    app.use('/search', searchRoutes);
    app.use('/', siteRoutes);
}

module.exports = routes;
