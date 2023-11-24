import { Request, Response, Application, Router } from "express";

import { InvolucrarController } from '../controllers/involucrar.controller';

export class InvolucrarRoutes {
    public involucrarController: InvolucrarController =  new InvolucrarController();

    public routes(app: Application): void {
        app.route("/involucrar").get(this.involucrarController.getAllInvolucrar)
        app.route("/involucrar/:id").get(this.involucrarController.getOneInvolucrar)
        app.route("/involucrar").post(this.involucrarController.create)
        app.route("/involucrar/:id").put(this.involucrarController.updateInvolucrar);
        app.route("/involucrar/:id").delete(this.involucrarController.deleteInvolucrar);
    }
}