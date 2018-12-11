import * as Koa from "koa";
import * as morgan from "koa-morgan";
import * as Router from "koa-router";

const app = new Koa();
const router = new Router();

router.get("/*", async ctx => {
  ctx.body = "Hello World!";
});

app.use(morgan("dev")).use(router.routes());

app.listen(3000);

// tslint:disable-next-line:no-console
console.log("Server running on port 3000");
