'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('rewards', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      code: { // rew_
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      campaign_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      price_type: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: 'money',
      },
      price_value: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      price_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      price_quantity: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      condition_id: { // reward condition id
        type: Sequelize.INTEGER,
        allowNull: false,
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
    await queryInterface.dropTable('rewards');
  }
};
