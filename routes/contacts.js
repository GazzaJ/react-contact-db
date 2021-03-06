const express = require('express');
const router = express.Router();

// @route     GET api/contacts
// @desc      Get all of the users contacts
// @access    Private
router.get('/', (req, res) => {
  res.send('Retrieve all of the users contacts');
});

// @route     POST api/contacts
// @desc      Add a new Contact
// @access    Private
router.post('/', (req, res) => {
  res.send('Add a new contact');
});

// @route     PUT api/contacts/:id
// @desc      Update a contact
// @access    Private
router.put('/:id', (req, res) => {
  res.send('Update a chosen contact');
});

// @route     DELETE api/contacts/:id
// @desc      Delete a contact
// @access    Private
router.delete('/:id', (req, res) => {
  res.send('Delete a chosen contact');
});

module.exports = router;
