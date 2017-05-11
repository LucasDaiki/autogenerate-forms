class Step {
  constructor(step){
    this.id = step.id
    this.name = step.name
    this.fields = step.fields
    this.nextStep = step.nextStep
  }

  getNextStep(nextStep = null) {
    if(typeof this.nextStep === 'string') 
      return this.nextStep

    if(!this.nextStep) return;

    Object.keys(this.nextStep.conditions).forEach(fieldId => {
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

  getField(fieldId) {
    return this.fields.find(f => f.id === fieldId)
  }

  getConditions(fieldId) {
    return this.nextStep.conditions[fieldId]
  }

  get invalidFields (){
    return this.fields.filter(field => field.required && !!field.value)
  }

  static buildSteps(steps = []) {
    return steps.map(step => new Step(step))
  }
}

module.exports = Step