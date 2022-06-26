const KoaRouter = require('koa-router');
// const koaBody = require('koa-body');
const router = new KoaRouter();

const {
  addDelivery,
  updateDelivery,
  deleteDelivery,
  getDeliveryById,
  getAllDelivery,
} = require('../controllers/delivary.controller');

router.get('/delivary', getAllDelivery);
router.get('/delivary/:id', getDeliveryById);
router.delete('/delivary/:id', deleteDelivery);
router.put('/delivary/:id', updateDelivery);
router.post('/delivary/add', addDelivery);

module.exports = router;
