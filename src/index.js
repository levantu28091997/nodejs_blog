const path = require('path');
const express = require('express');
const morgan = require('morgan');
const routes = require('./routes');
const db = require('./config/db');
const methodOverride = require('method-override');
const responseTemplateUtil = require('./util/responseTemplateUtil');
const app = express();
const port = 3000;

// HTTP Logger
app.use(morgan('combined'));

// Public Folder
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Response Json Template
app.use((req, res, next) => {
    res.jsonError = responseTemplateUtil.jsonError.bind(res);
    res.jsonSuccess = responseTemplateUtil.jsonSuccess.bind(res);
    next();
});

// conect db
db.connect();

// Method Override
app.use(methodOverride('_method'));

// settup routes
app.use('/api', routes);

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
