import { Model, DataTypes } from 'sequelize';
import sequelize from '../db';

class BookModel extends Model{

	static getAll() {
		return [];
	}

	static getById(id) {
		return null;
	}

	static create(title, author, price) {
		return null;
	}

	static update(id, title, author, price) {
		return null;
	}

	static delete(id) {
		return null;
	}

}

BookModel.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
	title: DataTypes.STRING,
	author: DataTypes.STRING,
	price: DataTypes.INTEGER
}, { sequelize });

export default BookModel;