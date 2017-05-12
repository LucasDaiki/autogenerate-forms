const Template = require('./src/template')
const Step = require('./src/step')
const Input = require('./src/Elements/Field/input')
const DatePicker = require('./src/Elements/Field/datePicker')

// const input = require('./template.json')

function buildTemplate() {
  const template = new Template()

  const field_1_1 = new Input().setName('field_1_1').setValue(1).setRequired(true)
  const field_1_2 = new DatePicker().setName('field_1_2').setValue(3).setRequired(false)
  const field_1_3 = new Input().setName('field_1_3').setValue(2).setRequired(false)

  const step_1 = new Step({ name: 'step_1', fields: []})

  step_1.addField(field_1_1)
  step_1.addField(field_1_2)
  step_1.addField(field_1_3)

  template.addStep(step_1)


  const field_2_1 = new Input().setName('field_2_1').setValue(4).setRequired(true)

  const field_2_2 = new Input().setName('field_2_2').setValue(6).setRequired(false)
  const field_2_3 = new DatePicker().setName('field_2_3').setValue(5).setRequired(false)

  const step_2 = new Step({ name: 'step_2', fields: []})

  step_2.addField(field_2_1)
  step_2.addField(field_2_2)
  step_2.addField(field_2_3)

  template.addStep(step_2)


  const step_3 = new Step()
  template.addStep(step_3)


  template.defineNextStepTo(step_1, {
    [field_1_1.id]: {
      1: step_2.id,
      2: {
        [field_1_2.id]: {
          1: step_3.id
        }
      }
    }
  })

  return template
}


module.exports = buildTemplate