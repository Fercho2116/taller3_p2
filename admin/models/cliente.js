'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cliente extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      /*Cliente.hasMany(models.Pedido, {
        foreignKey: 'id_cliente'
      });*/
    }
  }
  Cliente.init({
    nombre: DataTypes.STRING,
    apellido: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Cliente',
    tableName: 'clientes'
  });
  return Cliente;
};