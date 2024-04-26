'use strict';

const { STATUSES } = require("../models/status.model.js");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
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
      name: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      gender: {
        type: Sequelize.ENUM('male', 'female', 'others'),
        allowNull: true,
      },
      phone_number: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: true,
      },
      status: {
        type: Sequelize.INTEGER,
        defaultValue: 1,
        allowNull: false,
      },
      verification_status: {
        type: Sequelize.INTEGER,
        defaultValue: 7,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING(255),
        allowNull: false,
        unique: true,
      },
      avatar: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      address_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      password: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      type: {
        // type: Sequelize.ENUM('organisation', 'referer', 'ambassador'),
        type: Sequelize.STRING(255),
        defaultValue: "organisation",
        allowNull: false,
      },
      role_id: {
        type: Sequelize.INTEGER,
        defaultValue: 1,
      },
      provider: {
        type: Sequelize.STRING(255),
        allowNull: true,
      },
      provider_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      email_verified_at: {
        type: Sequelize.DATE,
        allowNull: true,
        defaultValue: null,
        onUpdate: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: true,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'),
      },
      created_at: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: false,
      },
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('users');
  }
};
