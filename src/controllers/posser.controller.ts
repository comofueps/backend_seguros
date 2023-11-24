import {  Request, Response } from 'express';

import { Posser, PosserI } from '../models/Posser';

export class PosserController {


    public async getAllPosser(req: Request, res:Response){
        try {
            const posser: PosserI[] = await Posser.findAll()
            res.status(200).json({posser})
        } catch (error) {

        }
    }

    public async getOnePosser(req: Request, res: Response) {
        try {
            let posser: PosserI | any;
            posser = await Posser.findOne(
                {
                    where: {
                        id: req.params.id
                    }
                }

            ) 
            res.status(200).json({ posser })
        } catch (error) {

        }
    }

    public async create(req: Request, res: Response) {
        let posser: PosserI = req.body
        try {

            const dataPosser: PosserI = await Posser.create({...posser})
            res.status(200).json({ posser })
        } catch (error) {

        }
    }

    public async updatePosser(req: Request, res: Response) {
        try {
            const id = req.params.id;

            const actualizarDatos = req.body;

            const existePosser = await Posser.findByPk(id)

            if (!existePosser) {
                res.status(500).json({ msg: 'Posser no encontrado' })
            }

            await Posser.update(actualizarDatos, {
                where: { id }

            })

            const posserActualizada = await Posser.findByPk(id);
            res.status(200).json(posserActualizada);


        } catch (error) {
            console.error(error)
        }
    }
public async deletePosser(req: Request, res: Response) {
        try {
            const id = req.params.id;

            const existePosser = await Posser.findByPk(id)

            if (!existePosser) {
                res.status(500).json({ msg: 'Posser no encontrado' })
            }

            await Posser.destroy(
                {
                    where: { id }
                }
            )

            res.status(200).json({ msg: 'Posser eliminado' });

        } catch (error) {
            console.error(error)
        }
    }
}