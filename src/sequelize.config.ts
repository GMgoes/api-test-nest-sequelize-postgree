/* eslint-disable prettier/prettier */
import { SequelizeOptions } from 'sequelize-typescript';
import { Book } from './books/models/books/books.model';

const sequelizeConfig: SequelizeOptions = {
  dialect: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: '1234',
  database: 'library',
  models: [Book],
};

export default sequelizeConfig;
