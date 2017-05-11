const unirest = require('unirest')
const Template = require('./template')

// console.log(JSON.stringify(buildTemplate()))


unirest.get('http://localhost:3000/template')
  .end(response => {
    const template = new Template(response.body[0].template)
    // console.log(JSON.stringify(template))
    console.log(template.getNextStep(template.steps[0].id))
  })