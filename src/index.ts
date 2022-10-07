import express, { Express } from "express";

import AddCommentsRoute from "./routes/addComment";

const PORT = process.env.PORT || 8080;

const v1Routes = [AddCommentsRoute];

export default class App {
  app: Express = express();

  constructor() {
    this.setupApp();
    this.setupRoutes();
  }

  setupApp() {
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
