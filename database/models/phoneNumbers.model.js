const { customAlphabet } = require("nanoid");
const {STATUSES} = require("./status.model");
const nanoid = customAlphabet('123456789AQWXSCZEDCVFRTGBHYNMJUIKLOP0aqwxszedcvfrtgbnhyujmkiolp', 17);

module.exports = (connection, Sequelize) => {
    const schema = {
        code: {
            type: Sequelize.STRING,
            defaultValue: () => 'pho_' + nanoid()
        },
        countryCode: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        localFormat: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        internationalFormat: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true,
        },
        verification_status: {
            type: Sequelize.INTEGER,
            defaultValue: STATUSES.UNVERIFIED,
        },
        status: {
            type: Sequelize.INTEGER,
            defaultValue: STATUSES.ACTIVE,
        },
        created_at: {
            type: Sequelize.DATE,
            allowNull: false,
            defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        },
        updated_at: {
            type: Sequelize.DATE,
            allowNull: true,
            defaultValue: null,
            onUpdate: Sequelize.literal('CURRENT_TIMESTAMP'),
        },
        verified_at: {
            type: Sequelize.DATE,
            allowNull: true,
            defaultValue: null,
            onUpdate: Sequelize.literal('CURRENT_TIMESTAMP'),
        },
    };
    return connection.define('PhoneNumbers', schema,
        { timestamps: false });
};
