import { Model, DataTypes, EnumDataType } from "sequelize";
import { database } from "../database/db";
import { EnumType } from "typescript";
import { Multa } from "./Multa";
import { Vehiculo } from "./Vehiculo";
import { Involucrar } from "./Involucrar";

export class Persona extends Model {
    public DNI!: string;
    public nombre!: string;
    public apellido!: string;
    public direccion!: string;
    public ciudad!: string;
    public tipoPersona!: EnumType;
    public telefono!: string;
}

export interface PersonaI {
    DNI: string;
    nombre: string;
    apellido: string;
    direccion: string;
    ciudad: string;
    tipoPersona: EnumType;
    telefono: string;
}

Persona.init(
    {

        DNI: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        nombre: {
            type: DataTypes.STRING,
            allowNull: false
        },

        apellido: {
            type: DataTypes.STRING,
            allowNull: false
        },

        direccion: {
            type: DataTypes.STRING,
            allowNull: false
        },

        ciudad: {
            type: DataTypes.STRING,
            allowNull: false
        },

        tipoPersona: {
            type: DataTypes.ENUM('Activo', 'Inactivo'),
            allowNull: false
        },

        telefono: {
            type: DataTypes.STRING,
            allowNull: false,
        },

    },
    {
        tableName: "personas",
        sequelize: database,
        timestamps: false
    }
);
Persona.hasMany(Multa)
Multa.belongsTo(Persona)
