const express = require('express');
const router = express.Router();
const config = require('../../../config/config.json');
const ID = config.adminID;
// const PASSWORD = config.adminPassword;

router.route("/admin/dashboard")
    .get((req, res, next) => {
        if(req.session.adminId != ID){
            req.session.destroy();
            return res.redirect("/admin");
        } else {
            res.render("admin/dashboard/index");
        }
        
    })

module.exports = router;