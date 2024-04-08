const User = require('../models/user.model');

const addUserData = async (req, res) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({
            error: 'Missing form property',
        });
    }

    const newUser = new User({ name, email, message });

    try {
        await newUser.save();
        res.status(201).json({ message: 'Form successfully submitted!' });
    } catch (error) {
        res.status(400).json({ message: 'Unable to submit form!' });
    }
};
module.exports = addUserData;
