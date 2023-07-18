/* eslint-disable prettier/prettier */
import { Table, Column, DataType, Model } from 'sequelize-typescript';

@Table
export class Book extends Model<Book> {
  @Column
  title: string;

  @Column({ type: DataType.ARRAY(DataType.STRING) })
  author: string[];

  @Column({ type: DataType.STRING })
  isbn: string;

  @Column({ type: DataType.ARRAY(DataType.STRING) })
  genre: string[];

  @Column({ type: DataType.DATE })
  createdAt?: any;

  @Column({ type: DataType.DATE })
  updatedAt?: any;
}
