'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('campaigns', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      code: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      description: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      brand_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      type: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: 'one-time', // tiered | multi-step | time-based | recurring | recurring | one-time
      },
      leads: { // funnel visit count
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      converted: { // visit that has completed 80% campaign reward requirement
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      completed: { // visit that has completed 100% campaign reward requirement
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      status: {
        type: Sequelize.INTEGER,
        defaultValue: 11,
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
    await queryInterface.dropTable('campaigns');
  }
};
