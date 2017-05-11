const Template = require('./template')
const input = require('./template.json')

const template = new Template(input)
const nextStep = template.getNextStep('step_1')

console.log('FIM', nextStep)