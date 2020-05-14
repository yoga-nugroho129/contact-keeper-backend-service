const express = require('express')

const router = express.Router()

/**
 *  @route        POST api/users
 *  @description  Register a User
 *  @access        Public
 */
router.post('/', (req, res) => {
  res.send('Register a New User')
})

module.exports = router
