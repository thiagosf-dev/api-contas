'use strict'

const mongoose = require('mongoose');

const URI = `mongodb+srv://devmaster:devmaster@cluster0.wemyr6w.mongodb.net/api_contas?retryWrites=true&w=majority`;

let db

module.exports = {
  connect: async () => {
    db = await mongoose.connect(
      URI,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    )
      .then(() => console.log('Banco conectado...'))
      .catch(err => console.error('ERRO ao tentar conecatr no banco', err));
  },

  getDB: () => {
    return db;
  },
};