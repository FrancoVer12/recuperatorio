const express = require("express");
const app = express();
const path = require("path");
const router = require('./routes/mainRouter');

//const moviesRoutes = require('./routes/moviesRoutes');
//const genresRoutes = require('./routes/genresRoutes');

app.use('/', router)

//app.use(moviesRoutes);
//app.use(genresRoutes);

app.use(express.static('public'));

app.set('view engine', 'ejs');
app.set('views',path.join(__dirname, './views'));

app.listen(8001, () => console.log("Servidor corriendo"));



