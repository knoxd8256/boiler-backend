import { Router, Request, Response } from "express";
import { MongoRepository, Repository } from "typeorm";
import { Plate } from "../entity/Plate";

interface RouteCallback {
  (req: Request, res: Response): void;
}

// Class to contain router information with a referencce to the plate repo.
class BoilerRouter {
  // Declare properties.
  router: Router;
  repository: MongoRepository<Plate> | Repository<Plate>;

  constructor(repository: MongoRepository<Plate> | Repository<Plate>) {
    // Create a router and import the repository.
    this.router = Router();
    this.repository = repository;

    // Register routes.
    this.router.route("/").get(this.getAllPlates(this));
    this.router.route("/plate/:id").get(this.getPlateById(this));
  }

  // ---- Generators for route callbacks ---- //
  getAllPlates(router: BoilerRouter): RouteCallback {
    return async (req: Request, res: Response) => {
      try {
        const plates = await router.repository.find();
        res.send(plates);
      } catch (error) {
        console.log("Caught error:", error);
        res.send({ success: false, error: error });
      }
    };
  }

  getPlateById(router: BoilerRouter): RouteCallback {
    return async (req: Request, res: Response) => {
      try {
        const plate = await router.repository.findOneOrFail(req.params.id);
        res.send(plate);
      } catch (error) {
        console.log("Caught error:", error);
        res.send({ success: false, error: error });
      }
    };
  }
}

export { BoilerRouter };
