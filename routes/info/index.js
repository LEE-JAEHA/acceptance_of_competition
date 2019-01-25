const express = require('express');
const router = express.Router();
const { navigationName } = require('../../navigation');
const help = require('../../models/help');

// li class active
router.use(navigationName("info"));

router.route("/info")
    .get((req, res, next) => {
        help.findOne({
            where: {
                helpName: "summary"
            }
        }).then((summary) => {
            res.render('info/index', {summary});
        }).catch((err) => {
            console.log(err);
        })
    })

module.exports = router;