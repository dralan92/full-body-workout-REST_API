const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Chest = require('../models/chest');

router.get('/', (req,res,next)=>{
    Chest.find()
    .exec()
    .then( docs=>{
        console.log(docs);
        res.status(200).json(docs);
    })
    .catch( err =>{
        console.log(err);
        res.status(500).json({
            error:err 
        });
    });
});

router.get('/:muscleId', (req,res,next)=>{
    const muscleId = req.params.muscleId;
    Chest.findById(muscleId)
    .exec()
    .then( doc=>{
        console.log(doc);
        res.status(200).json(doc);
    })
    .catch(err => {
        
        console.log(err);
        res.status(500).json({error:err})
    
    });
});
router.post('/', (req,res,next)=>{
    const chest = new Chest({
        _id: new mongoose.Types.ObjectId(),
        muscles: req.body.muscles
    });
    chest.save().then(result=>{
        console.log(result);
        res.status(201).json({
            message: "Handling POST req to /Chest",
            createdMuscle: result
        
        });
       
    })
    .catch(err=>{
        console.log(err);
        res.status(500).json({
            error:err 
        });
    });
    
});

router.delete("/:muscleId", (req,res,next)=>{
    const muscleId = req.params.muscleId;
    Chest.remove({_id:muscleId})
    .exec()
    .then( result=>{
        res.status(200).json(result);
    })
    .catch(err=>{
        console.log(err);
        res.status(500).json({
            error:err
        });
    });
});



module.exports = router;