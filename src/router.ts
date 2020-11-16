import * as express from "express";

import rootRoute from "./routes/root";

let router = express.Router();

router.use("", rootRoute);

export default router;
