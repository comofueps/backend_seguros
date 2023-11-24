import { database } from "../database/db";
import { Model, DataTypes} from "sequelize";

export class Involucrar extends Model {
    public hora!: Date;
    public VehiculoId!: number;
    public PersonaId!: number;
}

export interface InvolucrarI {
    hora: Date;
    VehiculoId: number;
    PersonaId: number;
}


Involucrar.init(
    {

        hora: {
            type: DataTypes.DATE,
            allowNull: false
        },

    },
    {
        tableName: "involucrar",
        sequelize: database,
        timestamps: false
    }
);
