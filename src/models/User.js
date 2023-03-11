const { HasOneRelation } = require('./BaseModel')
const BaseModel = require('./BaseModel')

class User extends BaseModel {
  static get tableName() {
    return 'users'
  }

  static get relationMappings() {
    const Availability = require('./Availability')

    return {
      availability: {
        relation: HasOneRelation,
        modelClass: Availability,
        join: {
          from: 'users.id',
          to: 'availabilities.userId',
        },
      },
    }
  }
}

module.exports = User
