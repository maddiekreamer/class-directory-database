const connection = require('./knexfile')[process.env.NODE_ENV || 'development']
const database = require('knex')(connection)

listAll = () => database.select().from('class_table').orderBy('id', 'ascend')

create = (newClassmate) => database('class_table').insert(newClassmate).returning('*')

deleteClassmate = (id) => database('class_table').where('id', id).del().returning('*')

module.exports = {
    listAll
}