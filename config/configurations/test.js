// require dotenv module to read .env file from root if environment is different from production
if (process.env.NODE_ENV !== 'production') {
  // eslint-disable-next-line global-require
  require('dotenv').config({ silent: true });
}

module.exports = {
  // IMPORTANT! - Module configuration object naming convention is: MODULES_LIST item + Config
  // e.g., if MODULES_LIST item in .env file is "module1" then process configuration object name must be "module1Config"
  module1Config: {
    alias: 'Module 1',
    port: process.env.MD1_TEST_PORT,
    dbName: process.env.MD1_TEST_DB_HOST,
    dbUser: process.env.MD1_TEST_DB_USER,
    dbPassword: process.env.MD1_TEST_DB_PASSWORD
  },

  module2Config: {
    alias: 'Module 2',
    port: process.env.MD2_TEST_PORT,
    dbName: process.env.MD2_TEST_DB_HOST,
    dbUser: process.env.MD2_TEST_DB_USER,
    dbPassword: process.env.MD2_TEST_DB_PASSWORD
  }
};
