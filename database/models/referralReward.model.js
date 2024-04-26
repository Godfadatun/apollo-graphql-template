const { customAlphabet } = require("nanoid");
const {STATUSES} = require("./status.model");
const nanoid = customAlphabet('123456789AQWXSCZEDCVFRTGBHYNMJUIKLOP0aqwxszedcvfrtgbnhyujmkiolp', 17);

module.exports = (connection, Sequelize) => {
    const schema = {
        code: {
            type: Sequelize.STRING,
            defaultValue: () => 'rre_' + nanoid()
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
            defaultValue: STATUSES.PENDING,
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
    return connection.define('referral_rewards', schema,
        { timestamps: false });
};