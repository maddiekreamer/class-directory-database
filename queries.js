const connection = require('./knexfile')[process.env.NODE_ENV || 'development']
const database = require('knex')(connection)

listAll = () => database.select().from('class_table').orderBy('id', 'ascend')

module.exports = {
    listAll
}