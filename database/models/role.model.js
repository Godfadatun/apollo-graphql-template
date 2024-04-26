const { customAlphabet } = require("nanoid");
const {STATUSES} = require("./status");
const nanoid = customAlphabet('123456789AQWXSCZEDCVFRTGBHYNMJUIKLOP0aqwxszedcvfrtgbnhyujmkiolp', 17);

module.exports = (connection, Sequelize) => {
    const schema = {
        code: {
            type: Sequelize.STRING,
            defaultValue: () => 'rol_' + nanoid()
        },
        name: Sequelize.STRING,
        description: Sequelize.STRING,
        value: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        company: {
            type: Sequelize.INTEGER,
            allowNull: true,
        },
        status: {
            type: Sequelize.INTEGER,
            defaultValue: STATUSES.ACTIVE,
            allowNull: false,
        },
        created_at: {
            type: Sequelize.DATE,
            defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
        },
        updated_at: {
            type: Sequelize.DATE,
            onUpdate: Sequelize.literal('CURRENT_TIMESTAMP')
        },
    };
    return connection.define('roles', schema,
        { timestamps: false });
};

module.exports.SYSTEM_ROLES = {
    ADMIN: 1,
    MANAGER: 2,
    EMPLOYEE: 3,
};