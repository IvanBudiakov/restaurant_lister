var express = require('express');
var router = express.Router();
var mongoClient = require('./../mongo/config')
var mongoQueries = require('./../mongo/queries')

/* GET restaurant listing. */
// localhost:3000/restaurant
router.get('/', async (req, res) => {
    let result;
    if(typeof req.query.pageSize == 'undefined')        // checking if pageSize is set
        result = await mongoQueries.findListings({},5)
    else 
        result = await mongoQueries.findListings({}, parseInt(req.query.pageSize))
    console.log(result)
    res.send(result)
});

module.exports = router;
