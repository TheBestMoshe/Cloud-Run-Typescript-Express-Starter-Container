import * as express from "express";

let router = express.Router();

router.route("").get((req, resp) => {
  resp.send("hello world");
});

export default router;
