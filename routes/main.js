__path = process.cwd()

var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    res.sendFile(__path + '/views/test.html')
})

router.get('/config', (req, res) => {
    config = {
        status: true,
        result: {
            prefix : '/',
            namabot: 'Jojo',
            namaowner: 'Arasya',
            instagram: 'sofunsyabi.id',
            youtube : 'https://youtube.com/channel/UCZzt-Qw0zTYc8UP-LL2G5fA'
        }
    }
    res.json(config)
})

module.exports = router
