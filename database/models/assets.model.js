const { customAlphabet } = require("nanoid");
const {STATUSES} = require("./status.model");
const nanoid = customAlphabet('123456789AQWXSCZEDCVFRTGBHYNMJUIKLOP0aqwxszedcvfrtgbnhyujmkiolp', 17);

module.exports = (connection, Sequelize) => {
    const schema = {
        code: {
            type: Sequelize.STRING,
            defaultValue: () => 'ast_' + nanoid()
        },
        name: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        file_name: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        user_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        status: {
            type: Sequelize.INTEGER,
            allowNull: false,
            defaultValue: STATUSES.ACTIVE,
        },
        organization: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        file_format: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        bytes: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        url: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        assignment: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        assignment_id: {
            type: Sequelize.INTEGER,
            allowNull: true,
        },
        reference: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        trigger: {
            type: Sequelize.STRING,
            allowNull: false,
            defaultValue: 'dev:testing',
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
    return connection.define('assets', schema,
        { timestamps: false });
};