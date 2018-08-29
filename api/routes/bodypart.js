const express = require('express');
const router = express.Router();

router.get('/', (req,res,next)=>{
    res.status(200).json({
        message: "Handling GET req"
    });
});
router.post('/', (req,res,next)=>{
    const bodypart = {
        name:req.body.name,
        muscles:req.body.muscles
    };
    res.status(200).json({
        message: "Handling POST req"
    });
});
module.exports = router;