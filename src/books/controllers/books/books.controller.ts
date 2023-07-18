import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
} from '@nestjs/common';
import { BookService } from 'src/books/services/books/books.service';
import { Book } from '../../models/books/books.model';

@Controller('books')
export class BooksController {
  constructor(private readonly bookService: BookService) {}

  @Get()
  async listAllBooks(): Promise<Book[]> {
    return this.bookService.listAllBooks();
  }

  @Get(':id')
  async findById(@Param('id') id: number): Promise<Book> {
    return this.bookService.findById(id);
  }

  @Post()
  async createBook(@Body() data: Book): Promise<Book> {
    return this.bookService.createBook(data);
  }
  @Put(':id')
  async updateBook(@Param('id') id: number, @Body() data: Book): Promise<Book> {
    return this.bookService.updateBook(id, data);
  }
  @Delete(':id')
  async deleteBook(@Param('id') id: number): Promise<void> {
    return this.bookService.deleteBook(id);
  }
}
