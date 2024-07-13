'use strict';

/** @type {import('sequelize-cli').Migration} */
const { faker } = require('@faker-js/faker');

module.exports = {
  async up (queryInterface, Sequelize) {
    const productos = [];
    for (let i = 0; i < 10; i++) {
      productos.push({
        descrip: 'Producto ' + i,  // Genera un nombre de producto aleatorio
        stock: faker.datatype.number({ min: 1, max: 100 }), // Genera un stock aleatorio entre 1 y 100
        precio: faker.commerce.price(1, 100, 2),  // Genera un precio aleatorio entre 1 y 100 con 2 decimales
        createdAt: new Date(),
        updatedAt: new Date()
      });
    }

    await queryInterface.bulkInsert('Productos', productos, {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Productos', null, {});
  }
};
