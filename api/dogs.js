const express = require('express');

const router = express.Router();

const queries = require('../db/queries');

//ALL ROUTES will be prepended by /api/v1/dogs/

router.get('/', async (req, res) => {
    const dogs = await queries.getAll();
    res.json(dogs);

//PROMISE version
    //queries.getAll()
    //.then(dogs => {
        //res.json(dogs);
    //})
});

module.exports = router;