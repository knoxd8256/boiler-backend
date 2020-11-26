import { Router, Request, Response } from "express";

const boilerRouter = Router();

function boilerGetter(req: Request, res: Response) {
  // const testPlate: Plate = new Plate("Test Plate", ["test", "try"], "https://github.com/knoxd8256/Boiler.ts", ["echo 'Hello World"], "This is a test plate.");
  // res.send(testPlate.json());
  res.send("Whatever");
}

boilerRouter.route("/").get(boilerGetter);

export { boilerRouter };
