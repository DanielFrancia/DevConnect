const express = require('express');
const router = express.Router();

// @route           GET api/post/test
// @description     Test post route
// @access          PUBLIC
router.get('test', (req,res) => res.json({ msg: 'Post works'}))

module.exports = router;