const express = require('express');
const router = express.Router();

// @route           GET api/profile/test
// @description     Test profile route
// @access          PUBLIC
router.get('test', (req,res) => res.json({ msg: 'Profile works'}))

module.exports = router;