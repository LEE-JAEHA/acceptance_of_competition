const express = require('express');
const router = express.Router();
const qna = require('../../models/qna');

router.route("/qna")
    .get((req, res, next) => {
        qna.findAll()
            .then((qnas) => {
                res.render('qna/index', {qnas});
            })
            .catch((err) => {
                next(err);
            })
    })

module.exports = router;