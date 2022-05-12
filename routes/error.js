const express= require('express')
const router = express.Router()

router.get('/flowerror' , (req,res) => {
    const sampleError = {
        id: "error id sample",
        title: "Flow error in export",
        resolved : false

    }
    res.send(sampleError);
})

router.get('/integrationerror' , (req,res) => {
    const sampleError = {
        id: "error id sample",
        title: "Integration error in export",
        resolved : false

    }
    
    res.send(sampleError);
})

module.exports = router;