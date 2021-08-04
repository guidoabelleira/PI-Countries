const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.send('entro countries')
})

module.exports = router;