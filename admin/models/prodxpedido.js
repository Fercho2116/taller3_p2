'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ProdxPedido extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ProdxPedido.init({
    idprod: DataTypes.INTEGER,
    idpedido: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ProdxPedido',
    tableName: 'productopedidos'
  });
  return ProdxPedido;
};