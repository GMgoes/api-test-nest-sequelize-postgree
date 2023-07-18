import { Module } from '@nestjs/common';
import { BooksController } from './controllers/books/books.controller';
import { BookService } from './services/books/books.service';
import { Book } from './models/books/books.model';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports: [SequelizeModule.forFeature([Book])],
  controllers: [BooksController],
  providers: [BookService],
})
export class BooksModule {}
