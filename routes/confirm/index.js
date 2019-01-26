const express = require('express');
const router = express.Router();
const { navigationName } = require('../../navigation');
const help = require('../../models/help');

// li class active
router.use(navigationName("confirm"));

router.route("/confirm")
    .get((req, res, next) => {
        res.render("confirm/index");
    })

module.exports = router;