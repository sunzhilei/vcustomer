let express = require('express');
let router = express.Router();
/**
 * 跳转到系统后台管理首页
 */
router.get('/', (req, res) => {
    res.render('./client/index');
});

module.exports = router;