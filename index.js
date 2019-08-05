// Import configuration validator
import ConfigValidator from './config/configValidator';

// Import modules configuration based on node environment
// eslint-disable-next-line import/no-dynamic-require
const modulesConfig = require(`./config/configurations/${process.env.NODE_ENV}`);
// Create an array of modules based on environment variable MODULES_LIST
const modulesList = process.env.MODULES_LIST.split(',');
// Create a new configuration validator object to access validation methods
const configValidator = new ConfigValidator();

// 3rd - Start module through dynamic import
async function startModule(module) {
  try {
    await import(`./lib/${module}`);
  } catch (error) {
    console.log(
      '\x1b[31m',
      `✘ ${module} starting error: ${error.stack}`,
      '\x1b[0m'
    );
  }
}

// 2nd - Validate module configuration
async function validateModuleConfiguration(module, config, validator) {
  try {
    await configValidator[validator](config);
    startModule(module);
  } catch (error) {
    console.log(
      '\x1b[31m',
      `✘ ${module} config validation error: ${error.stack}`,
      '\x1b[0m'
    );
  }
}

// 1st - Generate params dinamically for each module and call validation function
function launchValidation(module) {
  try {
    // Generate configuration name
    const configName = `${module}Config`;
    // Get proper configuration object from modulesConfig
    const configObject = modulesConfig[configName];
    // Generate validator name
    const validatorName = `${configName}Validator`;
    // Validate current configuration
    validateModuleConfiguration(module, configObject, validatorName);
    // console.log('\x1b[36m', `${module} config validation lauched`, '\x1b[0m');
  } catch (error) {
    console.log(
      '\x1b[31m',
      `✘ ${module} config validation launch fail: ${error}`,
      '\x1b[0m'
    );
  }
}

modulesList.map(launchValidation);
