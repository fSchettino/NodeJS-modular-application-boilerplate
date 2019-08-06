// Import configuration validator
import configValidator from './config/configValidator';

// require dotenv module to read .env file from root if environment is different from production
if (process.env.NODE_ENV !== 'production') {
  // eslint-disable-next-line global-require
  require('dotenv').config({ silent: true });
}

// Import modules configuration based on node environment
// eslint-disable-next-line import/no-dynamic-require
const modulesConfig = require(`./config/configurations/${process.env.NODE_ENV}`);
// Create an array of modules based on environment variable MODULES_LIST
const modulesList = process.env.MODULES_LIST.split(',');

async function initModule(module) {
  let validationResult = {};
  try {
    // Generate module configuration name
    const configName = `${module}Config`;
    // Get module configuration from modulesConfig
    const configObject = modulesConfig[configName];
    // Generate configuration validator name
    const validatorName = `${configName}Validator`;
    // Validate configuration
    validationResult = await configValidator[validatorName](configObject);
    // Launch module
    import(`./lib/${module}`);
  } catch (error) {
    console.log(
      '\x1b[31m',
      `✘ ${module} initialization fail: ${error}`,
      '\x1b[0m'
    );
  }
  // Return validated configuration object
  return validationResult;
}

// Init each module in moduleList array
modulesList.map(initModule);
