import { Model, DataTypes, EnumDataType } from "sequelize";
import { database } from "../database/db";
import { Persona } from "./Persona";
import { Posser } from "./Posser";
import { Involucrar } from "./Involucrar";

export class Vehiculo extends Model {
    public matricula!: string;
    public marca!: string;
    public modelo!: string;
}

export interface VehiculoI {
    matricula: string;
    marca: string;
    modelo: string;
}

Vehiculo.init(
    {

        matricula: {
            type: DataTypes.STRING,
            allowNull: false
        },

        marca: {
            type: DataTypes.STRING,
            allowNull: false
        },

        modelo: {
            type: DataTypes.STRING,
            allowNull: false
        },
    },
    {
        tableName: "vehiculos",
        sequelize: database,
        timestamps: false
    }
);
Vehiculo.belongsToMany(Persona,{through: Posser})
Persona.belongsToMany(Vehiculo,{through:Posser})
Persona.belongsToMany(Vehiculo,{through: Involucrar})
Vehiculo.belongsToMany(Persona,{through: Involucrar})
