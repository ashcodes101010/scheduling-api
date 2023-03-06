const BaseModel = require('./BaseModel')

class ElapsedTime extends BaseModel {
  static get tableName() {
    return 'elapsedTimes'
  }

  static get relationMappings() {
    return {}
  }
}

module.exports = ElapsedTime
