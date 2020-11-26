import express from "express";
import cors from "cors";
export class App {
  // Properties.
  port: number;
  app: express.Application;
  router: express.Router;

  // Constructor.
  constructor(port: number, router: express.Router) {
    this.port = port;
    this.app = express();
    this.router = router;
  }

  // Initialize the application.
  initialize() {
    console.log("Initializing...");
    // Middleware initialization.
    this.app.use(cors());
    this.app.use(express.json());

    // Route initialization.
    this.app.use("/", this.router);
    console.log("Done initializing!");
  }

  // Start the server.
  startup() {
    // Start listening.
    this.app.listen(this.port, () =>
      console.log("Listening on port:", this.port)
    );
  }

  // Run the server from start to finish.
  run() {
    this.initialize();
    this.startup();
  }
}
