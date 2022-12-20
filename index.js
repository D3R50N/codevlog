const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const appConfig = require('./app.config');
const path = require('path');
const {
    I18n
} = require('i18n');
const i18n = new I18n({
    locales: ['en', 'fr'],
    directory: path.join(__dirname, 'locales')
})

const fs = require('fs');
const {
    log,
    error,
    clear,
    warn
} = require("console");

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "client/public")))
app.set("views", path.join(__dirname, "client/views/"))
app.set("view engine", "ejs")


app.listen(appConfig.port, (err) => {
    clear();
    if (err) error('Error when starting server');
    else
        log(`Server on http://localhost:${appConfig.port}`);
})

app.get("/:lang", (req, res) => {
    if (req.params.lang != "en" && req.params.lang != "fr") return res.redirect("/" + localeLang());
    i18n.init(req, res);
    res.setLocale(req.params.lang);
    res.render('index');
})

app.get("/", (req, res) => {
    
    res.redirect("/" + localeLang());
})

function localeLang() {
    let locale = Intl.DateTimeFormat().resolvedOptions().locale;
    return locale.split("-")[0];
}