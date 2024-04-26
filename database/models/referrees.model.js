const { customAlphabet } = require("nanoid");
const {STATUSES} = require("./status.model");
const nanoid = customAlphabet('123456789AQWXSCZEDCVFRTGBHYNMJUIKLOP0aqwxszedcvfrtgbnhyujmkiolp', 17);

module.exports = (connection, Sequelize) => {
    const schema = {
        code: {
            type: Sequelize.STRING,
            defaultValue: () => 'ref_' + nanoid()
        },
        referee_id: { // individuals that invited
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        name: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        status: {
            type: Sequelize.INTEGER,
            defaultValue: STATUSES.ACTIVE,
            allowNull: false,
        },
        phone_number: {
            type: Sequelize.BIGINT,
            allowNull: true,
        },
        phone_number: {
            type: Sequelize.INTEGER.UNSIGNED,
            allowNull: true,
        },
        metadata: {
            type: Sequelize.JSON,
            allowNull: true,
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
    };
    return connection.define('Referrals', schema,
        { timestamps: false });
};