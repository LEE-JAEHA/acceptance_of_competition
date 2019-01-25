const express = require('express');
const router = express.Router();
const { navigationName } = require('../../navigation');

// li class active
router.use(navigationName("info"));

router.route("/info")
    .get((req, res, next) => {
        res.render("info/index");
    })

module.exports = router;