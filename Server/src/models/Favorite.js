const { DataTypes } = require("sequelize");

module.exports=sequelize=>{
    sequelize.define(
        'Favorite',
        {id:{type:DataTypes.INTEGER,allowNull:false,primaryKey:true},
        name:{type:DataTypes.STRING,allowNull:false},
        status:{type:DataTypes.ENUM("Alive","Dead","unknow")},
        species:{type:DataTypes.STRING,allowNull:false},
        gender:{type:DataTypes.ENUM("Female","Male","Genderless","unknow")},
        origin:{type:DataTypes.STRING},
        image:{type:DataTypes.STRING,allowNull:false}
        },{timestamps:false}
    );
}