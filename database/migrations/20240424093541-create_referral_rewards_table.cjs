'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('referral_rewards', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      code: { // rre_
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      reward_id: { // reward table 
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      awardee_type: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: 'invitee',
      },
      awardee_id: { // individual table 
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      status: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 11,
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
    await queryInterface.dropTable('referral_rewards');
  }
};
