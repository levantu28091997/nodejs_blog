const newsRoutes = require('./news');
const searchRoutes = require('./search');
const courcesRoutes = require('./cources');
const meRoutes = require('./me');
const siteRoutes = require('./site');

function routes(app) {
    app.use('/news', newsRoutes);
    app.use('/search', searchRoutes);
    app.use('/cources', courcesRoutes);
    app.use('/me', meRoutes);
    app.use('/', siteRoutes);
}

module.exports = routes;
