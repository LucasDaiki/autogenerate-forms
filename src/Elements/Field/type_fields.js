const TYPE_FIELDS = {
  TEXT: {
    getElement: () => require('./input'),
    name: 'text'
  },
  NUMBER: {
    getElement: () => require('./input'),
    name: 'number'
  },
  EMAIL: {
    getElement: () => require('./input'),
    name: 'email'
  },
  PASSWORD: {
    getElement: () => require('./input'),
    name: 'password'
  },
  CURRENCY: {
    getElement: () => require('./input'),
    name: 'currency'
  },
  PHONE: {
    getElement: () => require('./input'),
    name: 'phone'
  },
  DATE: {
    getElement: () => require('./datePicker'),
    name: 'datePicker'
  }
}

module.exports = TYPE_FIELDS