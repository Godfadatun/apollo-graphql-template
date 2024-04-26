'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('funnels', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      code: { // fnl_
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      campaign_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      status: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 1,
      },
      channel: { // billboard, flyer, over-air, digital
        type: Sequelize.STRING,
        allowNull: true,
      },
      type: { // code | QR | link | phone_number | templated | account_number
        type: Sequelize.STRING,
        defaultValue: 'referral-code',
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
    await queryInterface.dropTable('funnels');
  }
};
