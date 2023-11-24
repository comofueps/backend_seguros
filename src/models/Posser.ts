import { database } from "../database/db";
import { Model, DataTypes} from "sequelize";

export class Posser extends Model {
    public tarjetaPropiedad!: string;
    public ciudadExp!: string;
}

export interface PosserI {
    tarjetaPropiedad: string;
    ciudadExp: string;
}

Posser.init(
    {

        tarjetaPropiedad: {
            type: DataTypes.STRING,
            allowNull: false
        },

        ciudadExp: {
            type: DataTypes.STRING,
            allowNull: false
        },

    },
    {
        tableName: "possers",
        sequelize: database,
        timestamps: false
    }
);
