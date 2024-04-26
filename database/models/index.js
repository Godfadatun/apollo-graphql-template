'use strict';

import Sequelize, { DataTypes } from "sequelize";
import config, { use_env_variable, database, username, password } from "../../config/db";

const sequelize = new Sequelize(config.DB, config.USER, config.PASSWORD, {
  host: config.HOST,
  port: config.PORT,
  dialect: config.dialect,
  pool: config.pool,
  logging: Boolean(config.logging),
});
const __models = {
  Asset: 'assets',
  Organisation: 'organisations',
  Brand: 'brands',
  Campaign: 'campaigns',
  Funnels: 'funnels',
  Referral: 'referrals',
  Reward: 'rewards',
  ReferralReward: 'referral_rewards',
  Referees: 'referees',
  Role: 'roles',
}
const models = { Sequelize, sequelize };
const __loadModels = () => {
  for (const key of Object.keys(__models)) {
    models[key] = require(`./${__models[key]}.js`)(sequelize, Sequelize);
  }
};

__loadModels();

export default models;
