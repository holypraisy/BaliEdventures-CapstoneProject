const express = require('express');
const router = express.Router();
const Location = require('../models/locationModel.js');

// Get all locations
router.get('/locations', async (req, res) => {
    try {
        const locations = await Location.find();
        res.status(200).send({ data: locations });
    } catch (err) {
        res.status(400).send({ error: err.message });
    }
});

// Get locations by categories
router.get('/locations-by-categories', async (req, res) => {
    try {
        const locations = await Location.aggregate([
            { $match: {} },
            {
                $group: {
                    _id: '$category',
                    locations: { $push: '$$ROOT' }
                }
            },
            { $project: { name: '$_id', locations: 1, _id: 0 } }
        ]);
        res.status(200).send({ data: locations });
    } catch (err) {
        res.status(400).send({ error: err.message });
    }
});

module.exports = router;
