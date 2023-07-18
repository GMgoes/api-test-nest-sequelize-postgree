import { Module } from '@nestjs/common';
import { BooksModule } from './books/books.module';
import { SequelizeModule } from '@nestjs/sequelize';
import sequelizeConfig from './sequelize.config';

@Module({
  imports: [SequelizeModule.forRoot(sequelizeConfig), BooksModule],
})
export class AppModule {}
