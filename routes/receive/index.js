const express = require('express');
const router = express.Router();
const Op = require('sequelize').Op;
const { navigationName } = require('../../navigation');
const help = require('../../models/help');

// li class active
router.use(navigationName("receive"));

router.route("/receive")
    .get((req, res, next) => {
        help.findAll({
            where: {
                helpName: {
                    [Op.or]: ["termsofuse", "copyright"]
                }
            }
        }).then((infos) => {
            res.render("receive/index", { infos })
        }).catch((err) => {
            next(err);
        })
    })


module.exports = router;