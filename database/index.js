const Sequelize = require("sequelize");
const config = require("../db");

const sequelize = new Sequelize(config.DB, config.USER, config.PASSWORD, {
    host: config.HOST,
    port: config.PORT,
    dialect: config.dialect,
    pool: config.pool,
    logging: Boolean(config.logging),
});

const __models = {
    Balance: "balance",
    BalanceLedger: "balanceledger",
    Company: "company",
    Status: "status",
    Transaction: "transaction",
    TeamBudget: "teamBudget",
  };

const models = {
    Sequelize,
    sequelize,
} ;

const __loadModels = () => {
    for (const key of Object.keys(__models)) {
        models[key] = require(`./${__models[key]}.js`)(sequelize, Sequelize);
    }
};
  
__loadModels();

models.Balance.hasMany(models.BalanceLedger, { foreignKey: "balance" });
models.BalanceLedger.belongsTo(models.Balance, { foreignKey: "balance" });
models.BalanceLedger.belongsTo(models.Status, { foreignKey: "status" });

models.Team.belongsTo(models.Status, { foreignKey: "status" });
models.Team.belongsTo(models.Company, { foreignKey: "company" });
models.Team.hasMany(models.Transaction, { foreignKey: "team" });
models.Team.hasMany(models.TeamBudget, { foreignKey: "team" });

module.exports = models;