exports.up = knex => knex.schema.raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp";')
exports.down = () => Promise.resolve()
