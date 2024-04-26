const { customAlphabet } = require("nanoid");
const {STATUSES} = require("./status.model");
const nanoid = customAlphabet('123456789AQWXSCZEDCVFRTGBHYNMJUIKLOP0aqwxszedcvfrtgbnhyujmkiolp', 17);

module.exports = (connection, Sequelize) => {
    const schema = {
        code: {
            type: Sequelize.STRING,
            defaultValue: () => 'rfl_' + nanoid()
        },
        referee_id: {  // from referee table
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        channel: { // web, android, ios, billboard, flyer, over-air
            type: Sequelize.STRING,
            allowNull: false,
        },
        status: {
            type: Sequelize.INTEGER,
            defaultValue: STATUSES.ACTIVE,
            allowNull: false,
        },
        referral_status: {
            // type: Sequelize.ENUM('visit', 'converted', 'completed'),
            type: Sequelize.INTEGER,
            defaultValue: STATUSES.VISITED,
            allowNull: false,
        },
        campaign_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        funnel_id: {
            type: Sequelize.INTEGER,
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
    };
    return connection.define('referrals', schema,
        { timestamps: false });
};