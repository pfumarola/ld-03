class BookModel {
  constructor(id, title, author, price) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.price = price;
  }

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
