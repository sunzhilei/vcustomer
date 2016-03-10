let express = require('express')

let router = express.Router();

let media = require('./service/media.js');
let resUtil = require("./../util/resUtil.js");

let bodyParser = require("body-parser");
router.use(bodyParser.urlencoded({extended: false}));

let fs = require('fs');
let path = require('path');
let multer = require('multer');

/**
 * 为指定用户获取素材列表
 */
router.get('/getMediaList', (req, res) => {
    media.queryMediaListByAccountUUID(req.session.account.uuid).then(rows => {
        resUtil.resultData(0, rows, req, res);
    }, e => {
        console.error(e);
        resUtil.resultFail("系统异常，稍后重试！", req, res);
    })
});

/**
 * 为指定用户上传素材文件
 */
let storage = multer.diskStorage({
    //设置上传后文件路径，uploads文件夹会自动创建。
    destination: function (req, file, cb) {
        cb(null, './upload/images/')
    },
    //给上传文件重命名，获取添加后缀名
    filename: function (req, file, cb) {

        let dirPath = './upload/images/' + req.session.account.uuid + '/';
        if (!fs.existsSync(dirPath)) {
            fs.mkdirSync(dirPath, fs.X_OK);
        }

        let format = (file.originalname).split(".");
        let path = req.session.account.uuid + '/' + Date.now() + "." + format[format.length - 1]
        cb(null, path);
    }
});
let upload = multer({storage: storage}).single('file');
router.post('/fileUpload', (req, res) => {
    upload(req, res, function (err) {
        if (err) {
            resUtil.resultFail("上传发生错误，请重新尝试", req, res);
            return;
        }

        let reqFile = req.file;
        if (reqFile) {
            if (reqFile.size > 20971520) {
                resUtil.resultFail("请上传20M以下的文件", req, res);
            } else {
                media.insertMedia(req.session.account.uuid, reqFile.originalname, reqFile.filename).then(result => {
                    resUtil.resultSuccess({url: 'http://' + req.headers.host + '/' + reqFile.filename}, req, res);
                }, e => {
                    console.error(e);
                    resUtil.resultFail("系统异常，稍后重试！", req, res);
                })
            }
        }
    })
});

module.exports = router;