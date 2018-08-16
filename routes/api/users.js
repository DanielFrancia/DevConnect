const express = require('express');
const router = express.Router();

// @route           GET api/users/test
// @description     Test users route
// @access          PUBLIC
router.get('test', (req,res) => res.json({ msg: 'Users works'}))

module.exports = router;