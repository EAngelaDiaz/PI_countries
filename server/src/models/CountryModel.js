const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  
  sequelize.define('Country', {
    id:{
      type: DataTypes.CHAR(3),
      allowNull: false,
      primaryKey: true,
   },
   name:{
      type: DataTypes.STRING,
      allowNull: false,
   },
   image:{
      type: DataTypes.STRING,
      allowNull: false,
   },
   continent:{
      type: DataTypes.STRING,
      allowNull: false,
   },
   capital:{
      type: DataTypes.STRING,
      allowNull: false,
   },
   subregion:{
      type: DataTypes.STRING,
      allowNull: true,
   },
   area:{
      type: DataTypes.DECIMAL,
      allowNull: true,
   },
   population:{
      type: DataTypes.INTEGER,
      allowNull: true,
   },
  }, { timestamps: false });
};