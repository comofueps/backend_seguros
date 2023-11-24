import {  Request, Response } from 'express';

import { Multa, MultaI } from '../models/Multa';

export class MultaController {


    public async getAllMulta(req: Request, res:Response){
        try {
            const multa: MultaI[] = await Multa.findAll()
            res.status(200).json({multa})
        } catch (error) {

        }
    }

    public async getOneMulta(req: Request, res: Response) {
        try {
            let multa: MultaI | any;
            multa = await Multa.findOne(
                {
                    where: {
                        id: req.params.id
                    }
                }

            ) 
            res.status(200).json({ multa })
        } catch (error) {

        }
    }

    public async create(req: Request, res: Response) {
        let multa: MultaI = req.body
        try {

            const dataMulta: MultaI = await Multa.create({...multa})
            res.status(200).json({ multa })
        } catch (error) {

        }
    }

    public async updateMulta(req: Request, res: Response) {
        try {
            const id = req.params.id;

            const actualizarDatos = req.body;

            const existeMulta = await Multa.findByPk(id)

            if (!existeMulta) {
                res.status(500).json({ msg: 'Multa no encontrada' })
            }

            await Multa.update(actualizarDatos, {
                where: { id }

            })

            const multaActualizada = await Multa.findByPk(id);
            res.status(200).json(multaActualizada);


        } catch (error) {
            console.error(error)
        }
    }
public async deleteMulta(req: Request, res: Response) {
        try {
            const id = req.params.id;

            const existeMulta = await Multa.findByPk(id)

            if (!existeMulta) {
                res.status(500).json({ msg: 'Multa no encontrada' })
            }

            await Multa.destroy(
                {
                    where: { id }
                }
            )

            res.status(200).json({ msg: 'Multa eliminada' });

        } catch (error) {
            console.error(error)
        }
    }
}