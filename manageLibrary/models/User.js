const fs = require('node:fs/promises');
const Errors = require('../errors/CustomError');
const userDB = require('../database/User.json');

const get = async () => {
    try{
        const userData = await fs.readFile('./database/User.json', 'utf-8');
        console.log(userData)
    }catch {
        throw new Errors.DB();
    }
};

const create = async (email, name, username) => {
    try {
        const randId = Math.floor(Math.random() * 10 + 1);
        const newUser = {
            crime: 0,
            email: email,
            id: randId,
            name: name,
            role: 'User',
            username: username
        }
        userDB.users.push(newUser);
        await fs.writeFile('./database/User.json', JSON.stringify(userDB));
        return newUser;
    }catch {
        throw new Errors.DB();
    }
};

module.exports = {
    get,
    create,
}