const { customAlphabet } = require("nanoid");
const { STATUSES } = require("./status.model");
const { SYSTEM_ROLES } = require("./role.model");
const nanoid = customAlphabet('123456789AQWXSCZEDCVFRTGBHYNMJUIKLOP0aqwxszedcvfrtgbnhyujmkiolp', 17);

module.exports = (connection, Sequelize) => {
    const schema = {
        code: {
            type: Sequelize.STRING,
            defaultValue: () => 'usr_' + nanoid()
        },
        name: { type: Sequelize.STRING, allowNull: false },
        gender: { type: Sequelize.STRING, allowNull: true },
        email: { type: Sequelize.STRING, unique: true, allowNull: false },
        password:  { type: Sequelize.STRING, unique: true, allowNull: false },
        type: { type: Sequelize.STRING, defaultValue: "organisation", allowNull: false },
        status: { type: Sequelize.INTEGER, defaultValue: STATUSES.ACTIVE, allowNull: false },
        verification_status: { type: Sequelize.INTEGER, defaultValue: STATUSES.UNVERIFIED, allowNull: false },
        address_id: { type: Sequelize.INTEGER, allowNull: true },
        role_id: { type: Sequelize.INTEGER, defaultValue: SYSTEM_ROLES.ADMIN, allowNull: true },
        provider: { type: Sequelize.STRING, allowNull: true },
        provider_id: { type: Sequelize.INTEGER, allowNull: false },
        avatar: { type: Sequelize.INTEGER, allowNull: true },
        email_verified_at: {
            type: Sequelize.DATE,
            defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
            onUpdate: Sequelize.literal('CURRENT_TIMESTAMP')
        },
        created_at: {
            type: Sequelize.DATE,
            defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
        },
        updated_at: {
            type: Sequelize.DATE,
            defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
            onUpdate: Sequelize.literal('CURRENT_TIMESTAMP')
        }
    };
    return connection.define('Address', schema,
        { timestamps: false });
}
