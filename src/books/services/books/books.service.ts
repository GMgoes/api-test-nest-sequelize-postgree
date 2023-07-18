/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Book } from '../../models/books/books.model';

@Injectable()
export class BookService {
  constructor(@InjectModel(Book) private bookModel: typeof Book) {}

  // Get - All
  async listAllBooks(): Promise<Book[]> {
    try {
      return this.bookModel.findAll();
    } catch (err) {}
  }
  // Post
  async createBook(data: Book): Promise<Book> {
    const properties = ['title', 'author', 'isbn', 'genre'];

    try {
      const data_info = Object.fromEntries(
        Object.entries(data).filter(([key]) => properties.includes(key)),
      );
      const new_book = await Book.create(data_info);
      return new_book;
    } catch (err) {}
  }

  // Get - One
  async findById(id: number): Promise<Book> {
    try {
      return this.bookModel.findByPk(id);
    } catch (err) {}
  }

  // PUT
  async updateBook(id: number, data: Book): Promise<Book> {
    const properties = ['title', 'author', 'isbn', 'genre'];

    try {
      const new_data = Object.fromEntries(
        Object.entries(data).filter(([key]) => properties.includes(key)),
      );
      await Book.update(new_data, { where: { id: id } });
      return data;
    } catch (err) {}
  }

  // Delete
  async deleteBook(id: number) {
    try {
      await Book.destroy({ where: { id: id } });
    } catch (err) {}
  }
}
