const Delivery = require('../models/delivery.models');

const addDelivery = async (ctx) => {
  try {
    const delivery = await new Delivery(ctx.request.body).save();
    ctx.body = delivery;
  } catch (error) {
    ctx.throw(500);
  }
};

const updateDelivery = async (ctx) => {
  try {
    const delivery = await Delivery.findByIdAndUpdate(
      ctx.params.id,
      ctx.request.body
    );

    ctx.body = delivery;
  } catch (err) {
    ctx.throw(500);
  }
};

const deleteDelivery = async (ctx) => {
  try {
    const id = ctx.params.id;
    // ctx.body = await Delivery.findById(id);
    ctx.body = await Delivery.findByIdAndRemove(id);
  } catch (error) {
    ctx.throw(500);
  }
};

const getDeliveryById = async (ctx) => {
  try {
    const id = ctx.params.id;
    ctx.body = await Delivery.find({ _id: id });
  } catch (error) {
    ctx.throw(500);
  }
};

const getAllDelivery = async (ctx) => {
  try {
    ctx.body = await Delivery.find();
  } catch (error) {
    ctx.throw(500);
  }
};

module.exports = {
  addDelivery,
  updateDelivery,
  deleteDelivery,
  getDeliveryById,
  getAllDelivery,
};
