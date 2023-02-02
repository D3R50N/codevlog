const express = require('express');
const router = express.Router();
const path = require('path');
const { get_redirect } = require("../global");

router.use(express.static(path.join(__dirname, "../client/public")));
router.get('/', (req, res) => {
    res.render("index", { redirect: get_redirect(req) });
});

module.exports = router;