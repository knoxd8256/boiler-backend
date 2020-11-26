// TypeORM imports.
import "reflect-metadata";
import { createConnection } from "typeorm";

// Custom imports.
import { App } from "./app";
import { boilerRouter } from "./routes/plates";

const application = new App(5000, boilerRouter);
application.run();
