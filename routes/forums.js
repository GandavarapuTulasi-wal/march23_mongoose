var express = require('express');
var forumController = require('../controllers/forum');
var router = express.Router();
router.get('/', forumController.getForums);
router.post('/', forumController.createForum);
router.delete('/:id', forumController.deleteForum);
router.put('/:id', forumController.updateForum);
module.exports = router;
