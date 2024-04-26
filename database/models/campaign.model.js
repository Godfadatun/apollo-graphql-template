const { customAlphabet } = require("nanoid");
const {STATUSES} = require("./status.model");
const nanoid = customAlphabet('123456789AQWXSCZEDCVFRTGBHYNMJUIKLOP0aqwxszedcvfrtgbnhyujmkiolp', 17);

module.exports = (connection, Sequelize) => {
    const schema = {
        code: {
            type: Sequelize.STRING,
            defaultValue: () => 'cpg_' + nanoid()
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        description: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        brand_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        type: {
            type: Sequelize.STRING,
            allowNull: false,
            defaultValue: 'one-time', // tiered | multi-step | time-based | recurring | recurring | one-time
        },
        leads: { // funnel visit count
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        converted: { // visit that has completed 80% campaign reward requirement
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        completed: { // visit that has completed 100% campaign reward requirement
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        status: {
            type: Sequelize.INTEGER,
            defaultValue: STATUSES.PENDING,
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
    return connection.define('campaigns', schema,
        { timestamps: false });
};