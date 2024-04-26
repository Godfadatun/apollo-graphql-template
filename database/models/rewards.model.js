const { customAlphabet } = require("nanoid");
const {STATUSES} = require("./status.model");
const nanoid = customAlphabet('123456789AQWXSCZEDCVFRTGBHYNMJUIKLOP0aqwxszedcvfrtgbnhyujmkiolp', 17);

module.exports = (connection, Sequelize) => {
    const schema = {
        code: {
            type: Sequelize.STRING,
            defaultValue: () => 'rew_' + nanoid()
        },
        campaign_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        price_type: {
            type: Sequelize.STRING,
            allowNull: false,
            defaultValue: 'money',
        },
        price_value: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        price_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        price_quantity: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        condition_id: { // reward condition id
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        status: {
            type: Sequelize.INTEGER,
            allowNull: false,
            defaultValue: STATUSES.ACTIVE,
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
    return connection.define('rewards', schema,
        { timestamps: false });
};