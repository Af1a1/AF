const Koa = require('koa');
const KoaRouter = require('koa-router');
// const json = require('koa-json');
// const path = require('path');
const bodyParser = require('koa-bodyparser');

const connectDB = require('./config/db');

const app = new Koa();
const router = new KoaRouter();

app.use(bodyParser());

connectDB();

const delivery = require('./routes/delivery.routes');

// app.use(json);

app.use(delivery.routes());
// app.use(async (ctx) => (ctx.body = 'Hello worlddd'));
// router.get('/test', (ctx) => (ctx.body = 'Hello world'));

app.use(router.routes()).use(router.allowedMethods());

app.listen(3000, () => console.log('Server started...'));
