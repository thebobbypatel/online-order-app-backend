require('dotenv').config()

// const PORT = process.env.PORT
// let MONGODB_URI = process.env.MONGODB_URI
const PORT = 3001
let MONGODB_URI = 'mongodb+srv://admin:admin@cluster0.uqj2d.mongodb.net/orders?retryWrites=true&w=majority'

if (process.env.NODE_ENV === 'test') {
    MONGODB_URI = process.env.TEST_MONGODB_URI
  }

module.exports = {
  MONGODB_URI,
  PORT
}