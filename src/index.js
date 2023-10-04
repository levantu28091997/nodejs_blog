const path = require('path');
const express = require('express');
const morgan = require('morgan');
const { engine } = require('express-handlebars');
const routes = require('./routes');
const db = require('./config/db');
const methodOverride = require('method-override');
const SortMiddleware = require('./app/middlewares/SortMiddleware');
const app = express();
const port = 3000;

// HTTP Logger
// app.use(morgan('combined'))

// Handle middleware
app.use(SortMiddleware);

// Public Folder
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// app.use(function(req, res, next){
//   if (req.query?.ve && ["vip", "thuong"].includes(req.query?.ve)) {
//     return next();
//   }

//   return res.status(403).json({
//     error: 403,
//     message: "Access denied!",
//   });
// })

// app.get(
//   "/check",
//   function (req, res, next) {
//     next();
//   },
//   function (req, res, next) {
//     if (req.query?.ve && ["vip", "thuong"].includes(req.query?.ve)) {
//       return res.status(200).json({
//         message: "Successfull!",
//         data: req.query?.ve,
//       });
//     }

//     return res.status(403).json({
//       error: 403,
//       message: "Access denied!",
//     });
//   }
// );

// conect db
db.connect();

// handlebars template engine
app.engine(
    'hbs',
    engine({
        extname: '.hbs',
        helpers: {
            sum(a, b) {
                return a + b;
            },
            sortByField(column, type, currentFieldSort) {
                const icons = {
                    asc: 'chevrons-up',
                    desc: 'chevrons-down',
                    default: 'sliders',
                };

                const types = {
                    asc: 'desc',
                    desc: 'asc',
                    default: 'desc',
                };

                let typeSelect = type;

                console.log(currentFieldSort, column);

                if (currentFieldSort !== column) {
                    typeSelect = 'default';
                }

                return `
            <a href="?_sort&column=${column}&type=${types[typeSelect]}">
              <img src="/vendor/feather/${icons[typeSelect]}.svg" class="ml-1" width="18" height="18" alt="Icon">
            </a>
        `;
            },
        },
    }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

// Method Override
app.use(methodOverride('_method'));

// settup routes
routes(app);

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
