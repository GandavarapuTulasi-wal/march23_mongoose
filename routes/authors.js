var express = require('express');
var authorController = require('../controllers/author');
var router = express.Router();
router.get('/', authorController.getAuthors);
router.post('/', authorController.createAuthor);
router.delete('/:_id', authorController.deleteAuthor);
module.exports = router;
