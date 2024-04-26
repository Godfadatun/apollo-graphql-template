'use strict';

/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('phone_numbers', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      code: {
        type: Sequelize.STRING(22),
        unique: true,
        allowNull: false
      },
      countryCode: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      localFormat: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      internationalFormat: {
        type: Sequelize.STRING(255),
        allowNull: false,
        unique: true,
      },
      verification_status: {
        type: Sequelize.INTEGER,
        defaultValue: 7,
      },
      status: {
        type: Sequelize.INTEGER,
        defaultValue: 1,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: true,
        defaultValue: null,
        onUpdate: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      verified_at: {
        type: Sequelize.DATE,
        allowNull: true,
        defaultValue: null,
        onUpdate: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
    });

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('phone_numbers');
  }
};
