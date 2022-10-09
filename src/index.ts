import express, { Express } from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";

import AddCommentsRoute from "./routes/addComment";

const PORT = process.env.PORT || 8080;
const morgan = require("morgan");
const v1Routes = [AddCommentsRoute];

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
  }

  setupRoutes() {
    v1Routes.forEach(route => {
      this.app.use('/api/v1/', route);
    })
  }
}

new App();
