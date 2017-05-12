const TYPES = require('./type_fields')
const Field = require( './field')

class Input extends Field {
  constructor(props = {}){
    super(props)
    this.type = props.type || TYPES.TEXT.name
  }
}

module.exports = Input