// Form Generation TEST
const formTool = require('./FormGenerator.js');

const test = [{
  type: 'label',
  name: 'labelName',
  for: 'labelFor',
  id: 'labelID',
  class: 'labelClass',
  value: 'labelValue',
  required: true,
}, {
  type: 'text',
  name: 'textName',
  // without id
  class: 'textClass',
  value: 'textValue',
  required: false,
}, {
  type: 'email',
  name: 'emailName',
  id: 'emailID',
  class: 'emailClass',
  value: 'emailValue',
  // without require
}, {
  type: 'password',
  name: 'passwordName',
  id: 'passwordID',
  class: 'passwordClass',
  // without value
  required: true,
}, {
  type: 'submit',
  // without name
  id: 'submitID',
  class: 'submitClass',
  value: 'submitValue',
  // without require
}, {
  type: 'withoutType',
  name: 'shouldThrowError',
  id: 'thisWontWork',
  // without class
  value: 'doesntMatter',
  require: 'other',
}];

// Ignore console.log fail for this app's purposes
// eslint-disable-next-line no-console
console.log('HTML Form Results: ', formTool.formGeneration(test));
