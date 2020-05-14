const express = require('express')

const router = express.Router()

/**
 *  @route        GET api/auth
 *  @description  Get Logged in User
 *  @access       Private
 */
router.get('/', (req, res) => {
  res.send('Get Logged In')
})

/**
 *  @route        POST api/auth
 *  @description  Auth User & get token
 *  @access       Public
 */
router.post('/', (req, res) => {
  res.send('Log In')
})

module.exports = router
