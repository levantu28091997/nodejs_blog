const path = require('path');
const express = require('express');
const morgan = require('morgan');
const { engine } = require('express-handlebars');
const routes = require('./routes');
const db = require('./config/db');
const app = express();
const port = 3000;

// HTTP Logger
// app.use(morgan('combined'))

// Public Folder
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// conect db
db.connect();

// handlebars template engine
app.engine('hbs', engine({ extname: '.hbs' }));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

// settup routes
routes(app);

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
