'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('referrals', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      code: { // rfl_
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      referee_id: {  // from referee table
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      channel: { // web, android, ios, billboard, flyer, over-air
        type: Sequelize.STRING,
        allowNull: false,
      },
      status: {
        type: Sequelize.INTEGER,
        defaultValue: 1,
        allowNull: false,
      },
      referral_status: {
        // type: Sequelize.ENUM('visit', 'converted', 'completed'),
        type: Sequelize.INTEGER,
        defaultValue: 27,
        allowNull: false,
      },
      campaign_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      funnel_id: {
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
    await queryInterface.dropTable('referrals');
  }
};
