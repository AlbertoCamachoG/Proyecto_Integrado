const express = require('express');

const router = express.Router();

router.get('/',(req,res)=>{
    res.send('hello');
})

const allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', '*');
    res.header('Access-Control-Allow-Headers', '*');
    next();
}

app.use(allowCrossDomain);

module.exports = router;