const express = require('express');
const router = express.Router();
const help = require('../../../models/help');

router.route("/admin/copyright")
    .get((req, res, next) => {
        if(!req.session.adminId){
            return res.redirect("/admin");
        }
        help.findOne({
            where: {
                helpName: "copyright"
            }
        }).then((copyright) => {
            if(!copyright){
                help.create({
                    helpName: "copyright",
                    content: "안내문이 비었습니다."
                }).then(() => {
                    return res.redirect("/admin/copyright");
                })
            }
            res.render('admin/copyright/index', { copyright });
        }).catch((err) => {
            next(err);
        })
    })
    .post((req, res, next) => {
        if(!req.session.adminId){
            return res.redirect("/admin");
        }
        var copyright = req.body.copyright;
        help.update({
            content: copyright
        }, {
            where: {
                helpName: "copyright"
            }
        }).then(() => {
            console.log("copyright of use updated!");
            res.redirect("/admin/copyright");
        })
    })

module.exports = router;