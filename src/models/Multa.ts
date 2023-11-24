import { Model, DataTypes, EnumDataType } from "sequelize";
import { database } from "../database/db";

export class Multa extends Model {
    public consecutivoMultas!: string;
    public PersonaId!: number;
    public fechayHora!: Date;
    public lugarInfraccion!: string;
}

export interface MultaI {
    consecutivoMultas: string;
    PersonaId: number;
    fechayHora: Date;
    lugarInfraccion: string;
}

Multa.init(
    {

        consecutivoMultas: {
            type: DataTypes.STRING,
            allowNull: false
        },

         fechayHora: {
            type: DataTypes.DATE,
            allowNull: false
        },

        lugarInfraccion: {
            type: DataTypes.STRING,
            allowNull: false
        },
    },
    {
        tableName: "multas",
        sequelize: database,
        timestamps: false
    }
);