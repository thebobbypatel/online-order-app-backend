const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 5,
  },
  email: {
    type: String,
    required: true,
  },
  order: {
    type: String,
    required: true,
  },
  ready: {
    type: Boolean,
    required: true,
  },
  pickedUp: {
    type: Boolean,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  }
})

orderSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports = mongoose.model('Order', orderSchema)