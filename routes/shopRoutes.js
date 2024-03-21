const express = require('express');
const controller = require('../controllers/shopController');
// const upoload = require('../middleware/fileUlpoad)
 
const router = express.Router();



router.get('/', controller.index);

//GET /shop/new: sent html form for creating a new item
router.get('/new', controller.new);

//POST /items: create a new item
//after comma put in middle ware function name
router.post('/', controller.create);

//GET /shop/:id: send details of item identified by id
router.get('/item/:id', controller.show);

// //GET /items/:id/edit: send html form for editing an existing item
router.get('/:id/edit', controller.edit);

// //PUT /items/:id: update the item identified by id
// router.put('/:id', controller.update);

// //DELETE /items/:id, delete the item identified by id
router.delete('/:id', controller.delete);

module.exports = router;