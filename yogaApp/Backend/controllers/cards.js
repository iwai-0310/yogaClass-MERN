//Get the model prodcutschema
const Card=require('../models/Card')

//static section for testing
const getAllCardsStatic=async (req,res)=>{
  //mongoose query the card schema to return all the items
  const cards=await Card.find({title:'Yoga For Mental Health'})
  //set the response to return all the cards using find query
  res.status(200).json({cards, ngHits: cards.length})
}


const getAllCards=async (req,res)=>{
    try {
        const cards = await Card.find(); // Retrieve all cards
        res.status(200).json({ cards, ngHits: cards.length });
    } catch (error) {
        res.status(500).send({ msg: error });
    }
}

module.exports={
  getAllCards,getAllCardsStatic
}