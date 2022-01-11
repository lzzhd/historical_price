var express = require('express');
var app = express();
var bodyParder = require('body-parser');
app.use(bodyParder.json({limit: '100mb'}));
app.use(bodyParder.urlencoded({limit: '100mb', extended: true}));

//设置跨域访问
app.all('*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1');
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});


app.post('/data', function (req, res) {
    key = req.body.key;
    if (key == '1') {
        get_time = req.body.date,
            get_reqid = req.body.reqid,
            ck_key_ = req.body.ck_key,
            get_checkCode = req.body.checkcode,
            res.json({
                data: require('./k_').k(get_time, get_reqid, get_checkCode, ck_key_)
            })
    } else {
        y = req.body.y,
            m = req.body.m,
            d = req.body.d,
            res.json({
                data: require('./k_').get_time(y, m, d)
            })
    }


})

app.post('/data/utc', function (req, res) {
    y = req.body.y,
    m = req.body.m,
    d = req.body.d,
    res.json({
        data: Date.UTC(y, m, d)
    })

})

// 设置端口
var server = app.listen(4000, function () {

    var host = server.address().address;

    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
})


