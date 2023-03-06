const BaseModel = require('./BaseModel')

class Availability extends BaseModel {
  static get tableName() {
    return 'availabilities'
  }

  static get relationMappings() {
    return {}
  }
}

module.exports = Availability
