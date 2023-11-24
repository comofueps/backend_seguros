import {  Request, Response } from 'express';

import { Vehiculo, VehiculoI } from '../models/Vehiculo';

export class VehiculoController {


    public async getAllVehiculo(req: Request, res:Response){
        try {
            const vehiculo: VehiculoI[] = await Vehiculo.findAll()
            res.status(200).json({vehiculo})
        } catch (error) {

        }
    }
    public async getOneVehiculo(req: Request, res: Response) {
        try {
            let vehiculo: VehiculoI | any;
            vehiculo = await Vehiculo.findOne(
                {
                    where: {
                        id: req.params.id
                    }
                }

            ) 
            res.status(200).json({ vehiculo })
        } catch (error) {

        }
    }

    public async create(req: Request, res: Response) {
        let vehiculo: VehiculoI = req.body
        try {

            const dataVehiculo: VehiculoI = await Vehiculo.create({...vehiculo})
            res.status(200).json({ vehiculo })
        } catch (error) {

        }
    }

    public async updateVehiculo(req: Request, res: Response) {
        try {
            const id = req.params.id;

            const actualizarDatos = req.body;

            const existeVehiculo = await Vehiculo.findByPk(id)

            if (!existeVehiculo) {
                res.status(500).json({ msg: 'Vehiculo no encontrado' })
            }

            await Vehiculo.update(actualizarDatos, {
                where: { id }

            })

            const vehiculoActualizada = await Vehiculo.findByPk(id);
            res.status(200).json(vehiculoActualizada);


        } catch (error) {
            console.error(error)
        }
    }
public async deleteVehiculo(req: Request, res: Response) {
        try {
            const id = req.params.id;

            const existeVehiculo = await Vehiculo.findByPk(id)

            if (!existeVehiculo) {
                res.status(500).json({ msg: 'Vehiculo no encontrado' })
            }

            await Vehiculo.destroy(
                {
                    where: { id }
                }
            )

            res.status(200).json({ msg: 'Vehiculo eliminado' });

        } catch (error) {
            console.error(error)
        }
    }
}