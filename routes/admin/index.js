const express = require('express');
const router = express.Router();
const config = require('../../config/config.json');
const ID = config.adminID;
const PASSWORD = config.adminPassword;

router.route("/admin")
    .get((req, res, next) => {
        res.render("admin/login");
    })
    .post((req, res, next) => {
        var { adminId, adminPassword } = req.body;
        if(adminId==ID && adminPassword==PASSWORD){
            req.session.adminId = adminId;
            return res.redirect("/admin/dashboard");
        }
        else{
            var msg = "아이디 혹은 비밀번호가 틀립니다."
            return res.render("admin/login", { msg });
        }
    })


module.exports = router;