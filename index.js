const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const appConfig = require('./app.config');

const { log, error, warn } = require("console");

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static("./client/public"))
app.set("views", "./client/views/")
app.set("view engine","ejs")


app.listen(appConfig.port, (err) => {
    if (err) error('Error when starting server');
    else
        log(`Server on http://localhost:${appConfig.port}`);
})

app.get("/", (req, res) => {
    res.render('index.ejs');
})