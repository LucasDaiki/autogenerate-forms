const uuid = require('uuid')
const Field = require('./Elements/Field/field')

class Step {
  constructor(step = { }){
    this.id = step.id || uuid.v4()
    this.name = step.name
    this.fields = Field.buildFields(step.fields)
    this.nextStep = step.nextStep
  }

  addField(field) {
    this.fields.push(field)
  }

  setNextStep(nextStep) {
    this.nextStep = nextStep
  }

  getField(fieldId) {
    return this.fields.find(f => f.id === fieldId)
  }

  getConditions(fieldId) {
    if(typeof this.nextStep === 'object') 
      return this.nextStep[fieldId]
  }

  getNextStep(nextStep = null) {
    if(typeof this.nextStep === 'string') 
      return this.nextStep

    if(!this.nextStep) return;

    Object.keys(this.nextStep).forEach(fieldId => {
      if(nextStep) return
      const field = this.getField(fieldId)
      const conditions = this.getConditions(fieldId)

      if(conditions) {
        nextStep = this.getNextStep.call(new Step({ 
          nextStep: conditions[field.value], 
          fields: this.fields 
        }), nextStep)
      }
    })

    return nextStep
  }

  get invalidFields (){
    return this.fields.filter(field => field.required && !field.value)
  }

  static buildSteps(steps = []) {
    return steps.map(step => new Step(step))
  }
}

module.exports = Step