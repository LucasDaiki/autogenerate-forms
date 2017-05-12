const TYPES = require('./type_fields')
const Field = require( './field')

class DatePicker extends Field {
  constructor(props = {}){
    super(props)
    this.type = TYPES.DATE.name
  }
}

module.exports = DatePicker