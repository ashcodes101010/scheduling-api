const BaseModel = require('./BaseModel')

class ZoomAvailability extends BaseModel {
  static get tableName() {
    return 'zoomAvailabilities'
  }

  static get relationMappings() {
    return {}
  }
}

module.exports = ZoomAvailability
