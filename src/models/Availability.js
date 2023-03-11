const { BelongsToOneRelation } = require('./BaseModel')
const BaseModel = require('./BaseModel')

class Availability extends BaseModel {
  static get tableName() {
    return 'availabilities'
  }

  static get relationMappings() {
    const User = require('./User')

    return {
      user: {
        relation: BelongsToOneRelation,
        modelClass: User,
        join: {
          from: 'availabilities.userId',
          to: 'users.id',
        },
      },
    }
  }
}

module.exports = Availability
