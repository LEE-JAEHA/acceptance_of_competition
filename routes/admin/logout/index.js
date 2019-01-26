const express = require('express');
const router = express.Router();

router.route("/admin/logout")
    .get((req, res, next) => {
        req.session.destroy();
        res.redirect("/info");
    })

module.exports = router;