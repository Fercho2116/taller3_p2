'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const pedidos = [];
    for (let i = 0; i < 10; i++) {
      pedidos.push({
        fecha: new Date(),
        idcliente: Math.floor(Math.random() * 10) + 1,  // ID cliente aleatorio entre 1 y 10
        estado: ['Pendiente', 'Enviado', 'Entregado'][Math.floor(Math.random() * 3)],
        createdAt: new Date(),
        updatedAt: new Date()
      });
    }

    await queryInterface.bulkInsert('Pedidos', pedidos, {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Pedidos', null, {});
  }
};
