import { Request, Response, Application, Router } from "express";

import { PosserController } from '../controllers/posser.controller';

export class PosserRoutes {
    public posserController: PosserController =  new PosserController();

    public routes(app: Application): void {
        app.route("/possers").get(this.posserController.getAllPosser)
        app.route("/possers/:id").get(this.posserController.getOnePosser)
        app.route("/possers").post(this.posserController.create)
        app.route("/possers/:id").put(this.posserController.updatePosser);
        app.route("/possers/:id").delete(this.posserController.deletePosser);
    }
}