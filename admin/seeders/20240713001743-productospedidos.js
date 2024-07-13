'use strict';

/** @type {import('sequelize-cli').Migration} */
const { faker } = require('@faker-js/faker');

module.exports = {
  async up (queryInterface, Sequelize) {
    const prodxPedidos = [];
    for (let i = 0; i < 10; i++) {
      prodxPedidos.push({
        idprod: faker.datatype.number({ min: 1, max: 10 }),  // ID producto aleatorio entre 1 y 10
        idpedido: faker.datatype.number({ min: 1, max: 10 }),  // ID pedido aleatorio entre 1 y 10
        createdAt: new Date(),
        updatedAt: new Date()
      });
    }

    await queryInterface.bulkInsert('ProdxPedidos', prodxPedidos, {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('ProdxPedidos', null, {});
  }
};
