import { DataTypes } from "sequelize";
import { sequelize } from "../database/config.db.js";

export const usuario = sequelize.define('usuarios',{
    nombre:{
        type:DataTypes.STRING,
        allowNull:false,
        validate:{
            len:[3,30]
        }
    },
    mail:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:true,
        primaryKey:true,
        validate:{
            isEmail:true
        }
    },
    password:{
        type:DataTypes.STRING,
        allowNull:false
    }
},
{
    timestamps:true
})
