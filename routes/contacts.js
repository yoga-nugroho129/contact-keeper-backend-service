const express = require('express')

const router = express.Router()

/**
 *  @route        GET api/contacts
 *  @description  Get all user contacts
 *  @access       Private
 */
router.get('/', (req, res) => {
  res.send('Get all contacts')
})

/**
 *  @route        POST api/contacts
 *  @description  Create new user contacts
 *  @access       Private
 */
router.post('/', (req, res) => {
  res.send('Add new contact')
})

/**
 *  @route        PUT api/contacts/:id
 *  @description  Update Contact
 *  @access       Private
 */
router.put('/:id', (req, res) => {
  res.send('Update contact')
})

/**
 *  @route        DELETE api/contacts/:id
 *  @description  Delete Contact
 *  @access       Private
 */
router.delete('/:id', (req, res) => {
  res.send('Delete Contact')
})

module.exports = router
