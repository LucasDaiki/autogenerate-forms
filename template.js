const uuid = require('uuid')
const Step = require('./step')

class Template {
  constructor(template = {}){
    this.id = template.id || uuid.v4()
    this.name = template.name
    this.steps = Step.buildSteps(template.steps) || []
  }

  addStep(step){
    this.steps.push(step)
    return this
  }

  defineNextStepTo(stepToDefineNextStep, nextStepConfiguration){
    const step = this.getStep(stepToDefineNextStep.id)
    step.setNextStep(nextStepConfiguration)
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
