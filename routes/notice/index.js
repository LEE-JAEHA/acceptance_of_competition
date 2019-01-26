const express = require('express');
const router = express.Router();
const notice = require('../../models/notice');

router.route("/notice")
    .get((req, res, next) => {
        notice.findAll()
            .then((notices) => {
                res.render('notice/index', { notices })
            })
            .catch((err) => {
                next(err);
            })
    })

module.exports = router;