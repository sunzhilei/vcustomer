let express = require('express');
let router = express.Router();
/**
 * 跳转到系统后台管理首页
 */
router.get('/:account_uuid', (req, res) => {
    res.render('./client/index', {account_uuid: req.params.account_uuid}, function (err, html) {
        res.send(html);
    });
});

module.exports = router;