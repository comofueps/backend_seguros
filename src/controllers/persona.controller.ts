import {  Request, Response } from 'express';


import { Persona, PersonaI } from '../models/Persona';

export class PersonaController {


    public async getAllPersona(req: Request, res:Response){
        try {
            const persona: PersonaI[] = await Persona.findAll(
                {
                    where:{tipoPersona: 'Activo'}
                }
                
            )
            res.status(200).json({persona})
        } catch (error) {

        }
    }

    public async getOnePersona(req: Request, res: Response) {
        try {
            let persona: PersonaI | any;
            persona = await Persona.findOne(
                {
                    where: {
                        tipoPersona: 'Activo',
                        id: req.params.id

                    }
                }

            ) 
            res.status(200).json({ persona })
        } catch (error) {

        }
    }

    public async updatePersona(req: Request, res: Response) {
        try {
            const id = req.params.id;

            const actualizarDatos = req.body;

            const existePersona = await Persona.findByPk(id)

            if (!existePersona) {
                res.status(500).json({ msg: 'Persona no encontrada' })
            }

            await Persona.update(actualizarDatos, {
                where: { id }

            })

            const personaActualizada = await Persona.findByPk(id);
            res.status(200).json(personaActualizada);


        } catch (error) {
            console.error(error)
        }
    }

    public async create(req: Request, res: Response) {
        let persona: PersonaI = req.body
        try {

            const dataPersona: PersonaI = await Persona.create({...persona})
            res.status(200).json({ persona })
        } catch (error) {

        }
    }

    public async deletePersona(req: Request, res: Response) {
        try {
            const id = req.params.id;

            const existePersona = await Persona.findByPk(id)

            if (!existePersona) {
                res.status(500).json({ msg: 'Persona no encontrada' })
            }

            await Persona.destroy(
                {
                    where: { id }
                }
            )

            res.status(200).json({ msg: 'Persona eliminada' });

        } catch (error) {
            console.error(error)
        }
    }
}