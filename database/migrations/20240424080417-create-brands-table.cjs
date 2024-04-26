'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('brands', {
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
      description: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      organization_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      administrator: {
        type: Sequelize.INTEGER,
        allowNull: false,
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
      promotion_status: {
        type: Sequelize.INTEGER,
        defaultValue: 25,
        allowNull: false,
      },
      logo: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      header_image: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      categories: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      website: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      contact_phone: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: true,
      },
      contact_email: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      slug: {
        type: Sequelize.STRING,
        allowNull: false,
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
    await queryInterface.dropTable('brands');
  }
};
