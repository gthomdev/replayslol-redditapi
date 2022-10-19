import express, { Express } from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";

import AddCommentsRoute from "~/routes/addMatch";
import GetMatchForSummonerNameRoute from "~/routes/getMatchForSummonerName";
import GetMatchForRedditSubmission from "~/routes/getMatchForRedditSubmission";

const PORT = process.env.PORT || 8080;
const morgan = require("morgan");
const v1Routes = [AddCommentsRoute, GetMatchForSummonerNameRoute, GetMatchForRedditSubmission];

export default class App {
  app: Express = express();

  constructor() {
    this.setupApp();
    this.setupRoutes();
  }

  setupApp() {
    dotenv.config();
    this.app.use(helmet());
    this.app.use(cors());
    this.app.use(morgan("tiny"));
    this.app.listen(PORT);
    this.app.use(express.json());
    // NB: Middleware (http://expressjs.com/en/guide/using-middleware.html) needs to be declared before the routes that use it
    this.app.use(function(req, res, next) {
      if (!req.headers.authorization) {
        return res.status(403).json({error: "Missing Authentication Key"});
      }
      next();
    })
  }

  setupRoutes() {
    v1Routes.forEach(route => {
      this.app.use('/api/v1/', route);
    })
  }
}

new App();
