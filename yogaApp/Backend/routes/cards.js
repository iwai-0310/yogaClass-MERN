//use express
const express=require('express');
//create  router instant form express router
const router=express.Router();
//
const {getAllCards,getAllCardsStatic}=require("../controllers/cards");

//route / to return all cards
router.route('/').get(getAllCards)
// test route for all cards
router.route('/static').get(getAllCardsStatic)

module.exports=router;