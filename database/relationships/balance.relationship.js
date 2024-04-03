const { Balance, BalanceLedger } = require('../index');

const associations = () => {
    Balance.hasMany(BalanceLedger, { foreignKey: 'balance' });
};

module.exports = associations;
