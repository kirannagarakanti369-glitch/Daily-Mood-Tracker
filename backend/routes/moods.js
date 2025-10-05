const express = require('express');
const router = express.Router();
const Mood = require('../models/Mood');

// getting all moods
router.get('/',async(req,res)=>{
    try{
        const moods=await Mood.find();
        res.json(moods);
    }catch(err){
        res.status(500).json({message:err.message})
    }
})

// creating a mood
router.post('/',async(req,res)=>{
    const mood= new Mood({
        mood: req.body.mood,
        note:req.body.note,
    });
    try{
        const newMood = await mood.save();
        res.status(201).json(newMood);
    }catch(err){
        res.status(400).json({message:err.message});
    }
});

// Delete a book
router.delete('/:id', async (req, res) => {
  try {
    await Mood.findByIdAndDelete(req.params.id);
    res.json({ message: "Mood deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;