const mongoClient = require("./config");

async function findListing(criteria)
{
  let result = {}
  await mongoClient.connect()
    .then(connection=>connection.db('sample_restaurants'))
    .then(db=>db.collection('restaurants'))
    .then(restaurantListings=>{
        console.log("LISTINGS"); return restaurantListings.findOne()})
    .then(restaurant=>{ console.log ("RESULT", restaurant); result = restaurant})
    .catch(error => console.log(error))
  return result
}

async function findListings(criteria, pageSize, pageNumber)
{
  let skipListings = pageNumber*parseInt(pageSize)
  let result = {}
  await mongoClient.connect()
    .then(connection=>connection.db('sample_restaurants'))
    .then(db=>db.collection('restaurants'))
    .then(restaurantListings=>{
      return restaurantListings.find(criteria)
      .skip(skipListings).limit(pageSize)
      })
    .then(cursor=>cursor.toArray())
    .then(restaurant=>{result = restaurant})
    .catch(error=>console.log(error))
    return result
}

module.exports = {findListing, findListings}  

