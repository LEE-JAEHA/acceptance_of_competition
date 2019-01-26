const express = require('express');
const router = express.Router();
const help = require('../../../models/help');

router.route("/admin/tou")
    .get((req, res, next) => {
        if(!req.session.adminId){
            return res.redirect("/admin");
        }
        help.findOne({
            where: {
                helpName: "tou"
            }
        }).then((tou) => {
            if(!tou){
                help.create({
                    helpName: "tou",
                    content: "동의서가 비었습니다."
                }).then(() => {
                    return res.redirect("/admin/tou");
                })
            }
            res.render('admin/tou/index', { tou });
        }).catch((err) => {
            next(err);
        })
    })
    .post((req, res, next) => {
        if(!req.session.adminId){
            return res.redirect("/admin");
        }
        var tou = req.body.tou;
        help.update({
            content: tou
        }, {
            where: {
                helpName: "tou"
            }
        }).then(() => {
            console.log("terms of use updated!");
            res.redirect("/admin/tou");
        })
    })

module.exports = router;