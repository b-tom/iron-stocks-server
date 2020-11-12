const express = require('express');
const router = express.Router();

const Symbol = require('../models/Symbol.model');

// GET all symbols
router.get('/api/symbols', (req, res, next) => {
    Symbol.find().limit(3)
        .then(symbolDoc => {
            res.status(200).json({ symbol:symbolDoc })
        })
        .catch(err => next(err));
});

module.exports = router;