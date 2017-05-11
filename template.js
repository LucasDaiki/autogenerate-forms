var Step = require('./step')

class Template {
  constructor(template){
    this.id = template.id
    this.name = template.name
    this.steps = Step.buildSteps(template.steps)
  }

  getStep(stepId) {
    return this.steps.find(step => step.id === stepId)
  }

  getNextStep(stepId){
    const currentStep = this.getStep(stepId)
    const nextStepId = currentStep.getNextStep()
    const nextStep = nextStepId ? this.getStep(nextStepId) : null

    return {
      nextStep,
      invalidFields: currentStep.invalidFields
    }
  }
}

module.exports = Template
