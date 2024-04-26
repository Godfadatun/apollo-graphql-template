'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('roles', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      code: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        // defaultValue: 'rol_',
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: 'Admin'
      },
      description: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      value: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: '2147483646', // Defaulted value
      },
      status: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 1, // Defaulted status
      },
      organization: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
    });

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('roles');
  }
};
