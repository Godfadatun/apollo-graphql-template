const { Team, Status, Company, Transaction, TeamBudget } = require('../index');

const associations = () => {
    Team.belongsTo(Status, { foreignKey: 'status' });
    Team.belongsTo(Company, { foreignKey: 'company' });
    Team.hasMany(Transaction, { foreignKey: 'team' });
    Team.hasMany(TeamBudget, { foreignKey: 'team' });
};

module.exports = associations;
