const express = require('express');
const router = express.Router();
const config = require('../../config/config.json');
const adminId = config.adminID;
const adminPassword = config.adminPassword;

router.route("/admin")
    .get((req, res, next) => {
        res.render("admin/index");
    })


module.exports = router;