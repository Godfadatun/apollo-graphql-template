const { customAlphabet } = require("nanoid");
const {STATUSES} = require("./status.model");
const nanoid = customAlphabet('123456789AQWXSCZEDCVFRTGBHYNMJUIKLOP0aqwxszedcvfrtgbnhyujmkiolp', 17);

module.exports = (connection, Sequelize) => {
    const schema = {
        code: {
            type: Sequelize.STRING,
            defaultValue: () => 'org_' + nanoid()
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        description: {
            type: Sequelize.STRING,
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
        phone_number: {
            type: Sequelize.INTEGER.UNSIGNED,
            allowNull: true,
        },
        status: {
            type: Sequelize.INTEGER,
            defaultValue: STATUSES.ACTIVE,
            allowNull: false,
        },
        onboarding_status: {
            type: Sequelize.INTEGER,
            defaultValue: STATUSES.PENDING,
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
        owner: {
            type: Sequelize.INTEGER,
            allowNull: false,
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
    return connection.define('organisations', schema,
        { timestamps: false });
};