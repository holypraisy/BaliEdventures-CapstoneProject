const express = require('express');
const router = express.Router();
const User = require('../models/userModel');

// Create a new user
router.post('/create-user', async (req, res) => {
    const { name, email, _id } = req.body;

    if (!name || !email || !_id) {
        return res.status(400).send({ error: 'Name, email, and ID are required fields.' });
    }

    try {
        const user = new User({ name, email, _id });
        const savedUser = await user.save();
        res.status(200).send({ data: savedUser });
    } catch (err) {
        res.status(400).send({ error: err.message });
    }
});

module.exports = router;
