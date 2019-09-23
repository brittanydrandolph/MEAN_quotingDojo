// IMPORTS: All things modules I installed into the terminal 
const express = require("express");
const app = express();
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
const session = require("express-session")
const flash = require("express-flash")
const moment = require("moment")

//CONFIGURATIONS 
app.use(flash());
app.use(express.static(__dirname + "/static"));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({useNewUrlParser: true}));
app.use(session({
    secret: "absdfa9wefbwefwfeg",
    resave: false,
    saveUninitialized: true,
    cookie : { maxAge:60000 }
}))

//DATABASE
mongoose.connect("mongodb://localhost/quoting_dojo");
require("./server/configs/mongoose");

//ROUTES
require('./server/configs/routes.js')(app)

app.listen(8000, () => console.log("listening on port 8000"));