const { HasOneRelation } = require('./BaseModel')
const BaseModel = require('./BaseModel')

class User extends BaseModel {
  static get tableName() {
    return 'users'
  }

  static get relationMappings() {
    const Availability = require('./Availability')
    const ZoomAvailability = require('./ZoomAvailability')

    return {
      availability: {
        relation: HasOneRelation,
        modelClass: Availability,
        join: {
          from: 'users.id',
          to: 'availabilities.userId',
        },
      },
      zoomAvailability: {
        relation: HasOneRelation,
        modelClass: ZoomAvailability,
        join: {
          from: 'users.id',
          to: 'zoomAvailabilities.userId',
        },
      },
    }
  }
}

module.exports = User
