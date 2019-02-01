const express = require('express');
const router = express.Router();



var list = [];
//@route  GET api/v1/examples
//@desc   Get All examples
//@access Public
router.get('/', (req, res) =>{
  list = ["item1", "item2", "item3"];
  res.json(list);
  console.log('Sent list of items');
});

//@route POST api/v1/examples
//@desc Add item to examples
//@access public
router.post('/', (req, res) =>{
  list.push(req.body.fname);
  console.log('Added an item to the list');
  console.log(list);
  res.json({itemAdded: true})
});


module.exports = router;