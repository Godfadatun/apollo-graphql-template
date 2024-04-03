const { Status, BalanceLedger, Balance } = require('../index');

const associations = () => {
    BalanceLedger.belongsTo(Balance, { foreignKey: 'balance' });
    BalanceLedger.belongsTo(Status, { foreignKey: 'status' });
};

module.exports = associations;
