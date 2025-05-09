const fs = require('fs').promises;
const Errors = require('../errors/CustomError');
const bookDB = require('../database/Book.json');


const get = async () => {
    try{
        const bookData = await fs.readFile('./database/Book.json', 'utf-8');
        return bookData;
    }catch {
        throw new Errors.DB();
    }
}

const create = async (title, author, price) => {
    try {
        const randId = Math.floor(Math.random() * 10 + 1);
        const newBook = {
            id: randId,
            title: title,
            author: author,
            price: price,
            free: 1
        };
        bookDB.books.push(newBook);
        await fs.writeFile('./database/Book.json', JSON.stringify(bookDB));
        return newBook;
    }catch {
        throw new Errors.DB();
    }
    
}

module.exports = {
    get,
    create,
}