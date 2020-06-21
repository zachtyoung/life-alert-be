const db = require('../dbConfig');
module.exports = {
    get,
    add,
    findById,
  };
  
  function get() {
    return db('log')
  }
  function add(data) {
    return db('log').insert(data)
  }
  function findById(id){
    return db('log')
    .where('id', id)
    .first()
  }
