const { customAlphabet } = require("nanoid");
const {STATUSES} = require("./status.model");
const nanoid = customAlphabet('123456789AQWXSCZEDCVFRTGBHYNMJUIKLOP0aqwxszedcvfrtgbnhyujmkiolp', 17);

module.exports = (connection, Sequelize) => {
    const schema = {
        code: {
            type: Sequelize.STRING,
            defaultValue: () => 'brd_' + nanoid()
        },
        name: {
            type: Sequelize.STRING,
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
            defaultValue: STATUSES.ACTIVE,
            allowNull: false,
        },
        promotion_status: {
            type: Sequelize.INTEGER,
            defaultValue: STATUSES.UNPUBLISHED,
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
    };
    return connection.define('brands', schema,
        { timestamps: false });
};