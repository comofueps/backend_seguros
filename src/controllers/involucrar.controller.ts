import {  Request, Response } from 'express';

import { Involucrar, InvolucrarI } from '../models/Involucrar';

export class InvolucrarController {


    public async getAllInvolucrar(req: Request, res:Response){
        try {
            const involucrar: InvolucrarI[] = await Involucrar.findAll()
            res.status(200).json({involucrar})
        } catch (error) {
            console.error(error)
        }   
    }

    public async getOneInvolucrar(req: Request, res: Response) {
        try {
            let involucrar: InvolucrarI | any;
            involucrar = await Involucrar.findOne(
                {
                    where: {
                        id: req.params.VehiculoId
                    }
                }

            ) 
            res.status(200).json({ involucrar })
        } catch (error) {

        }
    }

    public async create(req: Request, res: Response) {
        let involucrar: InvolucrarI = req.body
        try {

            const dataInvolucrar: InvolucrarI = await Involucrar.create({...involucrar})
            res.status(200).json({ involucrar })
        } catch (error) {

        }
    }

    public async updateInvolucrar(req: Request, res: Response) {
        try {
            const id = req.params.id;

            const actualizarDatos = req.body;

            const existeInvolucrar = await Involucrar.findByPk(id)

            if (!existeInvolucrar) {
                res.status(500).json({ msg: 'Involucrar no encontrado' })
            }

            await Involucrar.update(actualizarDatos, {
                where: { id }

            })

            const involucrarActualizada = await Involucrar.findByPk(id);
            res.status(200).json(involucrarActualizada);


        } catch (error) {
            console.error(error)
        }
    }
public async deleteInvolucrar(req: Request, res: Response) {
        try {
            const id = req.params.id;

            const existeInvolucrar = await Involucrar.findByPk(id)

            if (!existeInvolucrar) {
                res.status(500).json({ msg: 'Involucrar no encontrado' })
            }

            await Involucrar.destroy(
                {
                    where: { id }
                }
            )

            res.status(200).json({ msg: 'Involucrar eliminado' });

        } catch (error) {
            console.error(error)
        }
    }
}