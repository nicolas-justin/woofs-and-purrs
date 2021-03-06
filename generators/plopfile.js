const COMPONENTS_PATH = '../src/components';
const TEMPLATES_PATH = './templates';

const description = 'Create a new component';

const prompts = [
  {
    type: 'input',
    name: 'name',
    message: 'What is the name of the component?',
  },
];

const actions = [
  {
    type: 'add',
    path: `${COMPONENTS_PATH}/{{pascalCase name}}/index.js`,
    templateFile: `${TEMPLATES_PATH}/Component.js.hbs`,
  },
  {
    type: 'add',
    path: `${COMPONENTS_PATH}/{{pascalCase name}}/styles.js`,
    templateFile: `${TEMPLATES_PATH}/styles.js.hbs`,
  },
];

const generator = {
  description,
  prompts,
  actions,
};

module.exports = (plop) => plop.setGenerator('component', generator);
