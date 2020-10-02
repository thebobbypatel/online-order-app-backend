const ordersRouter = require('express').Router()
const Order = require('../models/order')

ordersRouter.get('/', (request, response) => {
  Order.find({}).then(orders => {
    response.json(orders)
  })
})

ordersRouter.get('/:id', async (request, response, next) => {
  try{
    const order = await Order.findById(request.params.id)
    if (order) {
      response.json(order)
    } else {
      response.status(404).end()
    }
  } catch(exception) {
    next(exception)
  }
})

ordersRouter.post('/', async (request, response, next) => {
  const body = request.body

  const order = new Order({
    name: body.name,
    email: body.email,
    order: body.order,
    ready: body.ready,
    pickedUp: body.pickedUp,
    date: new Date(),
  })

  const savedOrder = await order.save()
  try { 
    const savedOrder = await order.save()
    response.json(savedOrder)
  } catch(exception) {
    next(exception)
  }
})

ordersRouter.delete('/:id', (request, response, next) => {
  Order.findByIdAndRemove(request.params.id)
    .then(() => {
      response.status(204).end()
    })
    .catch(error => next(error))
})

ordersRouter.put('/:id', (request, response, next) => {
  const body = request.body

  const order = {
    name: body.name,
    email: body.email,
    order: body.order,
    ready: body.ready,
    pickedUp: body.pickedUp,
    date: new Date(),
  }

  Order.findByIdAndUpdate(request.params.id, order, { new: true })
    .then(updatedOrder => {
      response.json(updatedOrder)
    })
    .catch(error => next(error))
})

module.exports = ordersRouter