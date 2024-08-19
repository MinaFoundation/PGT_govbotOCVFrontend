import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

const databaseUrl = process.env.DATABASE_URL || 'sqlite:database.sqlite';

const sequelize = new Sequelize(databaseUrl, {
  dialect: 'sqlite',
  logging: false,
});

export default sequelize;