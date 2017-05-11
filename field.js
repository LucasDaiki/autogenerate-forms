const uuid = require('uuid')

class Field {
  constructor(field = { }){
    this.id = field.id || uuid.v4()
    this.name = field.name
    this.value = field.value
    this.required = field.required
  }

  addCustomAttribute(attribute, value){
    this[attribute] = value
    return this
  }

  setName(name){
    this.name = name
    return this
  }

  setValue(value){
    this.value = value
    return this
  }

  setRequired(required){
    this.required = required
    return this
  }

  static buildFields(fields = []) {
    return fields.map(field => new Field(field))
  }
}


module.exports = Field