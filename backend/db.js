const mongoose = require('mongoose');
const MongoURI = process.env.REACT_APP_MONGO_URI

function connected() {
    console.log("Connected  to MongoDB successfully")
}

const connectToMongo = ()  => {
    mongoose.connect(MongoURI, connected())
}

module.exports = connectToMongo