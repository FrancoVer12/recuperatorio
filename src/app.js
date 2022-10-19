const express = require("express");
const app = express();
const path = require("path");
const methodOverride = require('method-override');



const session = require('express-session');
const cookieParser = require('cookie-parser');

const acceso = require('./middlewares/acceso');

app.use(express.static(path.resolve(__dirname, '..', 'public')));

app.set('view engine', 'ejs');
app.set('views',path.join(__dirname, './views'));

app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'));

app.use(session({
    secret : 'topSecret!',
    resave: true,
    saveUninitialized: true,
}))
app.use(cookieParser());

app.use(acceso);


//app.use(express.json())


const router = require('./routes/mainRouter');
const userRoutes = require('./routes/usersRoutes');
//const adminRoutes = require('./routes/adminRoutes')

app.use('/', router)
app.use('/user', userRoutes);
//app.use('/admin', adminRoutes)








app.listen(8001, () => console.log("Servidor corriendo"));



