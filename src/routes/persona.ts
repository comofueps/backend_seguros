import { Request, Response, Application, Router } from "express";

import { PersonaController } from '../controllers/persona.controller';

export class PersonaRoutes {
    public personaController: PersonaController =  new PersonaController();

    public routes(app: Application): void {
        app.route("/personas").get(this.personaController.getAllPersona)
        app.route("/personas/:id").get(this.personaController.getOnePersona)
        app.route("/personas").post(this.personaController.create)
        app.route("/personas/:id").put(this.personaController.updatePersona);
        app.route("/personas/:id").delete(this.personaController.deletePersona);
    }
}