const express = require('express');
const router = express.Router();
const help = require('../../../models/help');

router.route("/admin/info")
    .get((req, res, next) => {
        if(!req.session.adminId){
            return res.redirect("/admin");
        }
        help.findOne({
            where: {
                helpName: "info"
            }
        }).then((info) => {
            if(!info){
                help.create({
                    helpName: "info",
                    content: "모집요강이 비었습니다."
                }).then(() => {
                    return res.redirect("/admin/info");
                })
            }
            res.render('admin/info/index', { info });
        }).catch((err) => {
            next(err);
        })
    })

module.exports = router;