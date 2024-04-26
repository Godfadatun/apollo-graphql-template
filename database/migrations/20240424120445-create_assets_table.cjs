'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('assets', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      code: { // ast_
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      file_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      status: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 1,
      },
      organization: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      file_format: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      bytes: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      url: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      assignment: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      assignment_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      reference: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      trigger: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: 'dev:testing',
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
    await queryInterface.dropTable('assets');
  }
};
