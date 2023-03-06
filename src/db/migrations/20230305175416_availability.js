const { createTableIfNotExists } = require('../helpers')

exports.up = async knex => createTableIfNotExists(knex, 'availabilities', table => {
  table
    .uuid('id')
    .notNullable()
    .primary()
    .defaultTo(knex.raw('uuid_generate_v4()'))

  table
    .uuid('userId')
    .references('users.id')
    .onDelete('CASCADE')

  table.json('monday').defaultTo(JSON.stringify([]))
  table.json('tuesday').defaultTo(JSON.stringify([]))
  table.json('wednesday').defaultTo(JSON.stringify([]))
  table.json('thursday').defaultTo(JSON.stringify([]))
  table.json('friday').defaultTo(JSON.stringify([]))
  table.json('saturday').defaultTo(JSON.stringify([]))
  table.json('sunday').defaultTo(JSON.stringify([]))

  table
    .string('timezone')
    .defaultTo('America/New_York')

  table.timestamp('createdAt').defaultTo(knex.fn.now())
  table.timestamp('updatedAt').defaultTo(knex.fn.now())
})

exports.down = async knex => knex.schema.dropTableIfExists('availabilities')
