# Node JS modular application boilerplate

Modular application project startup architecture.

## Requirements

Setup your development environment as described in [Development environment setup](SETUP.md) section.</a>

## Installing demo

1. Clone this repository in your machine.
2. Create a .env file in the project root folder with variables listed in the [Environment variables](#environment-variables) section.
3. Install project dependencies > "npm install".
4. Run project > "npm run dev".
5. Check modules opening yuor web browser and going to http://localhost:4001/ and http://localhost:4002/.

## Commands

- Development mode > "<strong>npm run dev</strong>".
- Test mode > "<strong>npm test</strong>".
- Testing coverage report > "<strong>npm run coverage</strong>"
- Start project > "<strong>npm start</strong>"

<i>Important! - <strong>npm start</strong> command is for production mode witch means you need to set enviroment variables in the production server.<br><strong>dotenv</strong> module, which loads environment variables from .env file, only is required if NODE_ENV variable is different from "production"</i>

## Customization

Node JS modular application boilerplate contains two demo modules, <strong>module1</strong> and <strong>module2</strong>.<br>
In order to use the architecture for your purpose follow next steps.

1. Customize .env file listing your modules in MODULES_LIST variable.
2. Add proper configuration variables for each module and environment in .env file.
3. Create a config object for each module and environment in ./config/configurations/[environment].js file.
4. Create a configValidator method for each module configuration in ./config/configValidator.js file.
5. Create your module in the <strong>lib</strong> folder <i>(module root folder must be named with the same name used in MODULES_LIST .env file variable and the entry point file must be <strong>index.js</strong>).</i>

## Environment variables

```
# List of modules, each value must be comma separated without spaces
MODULES_LIST = module1,module2

# Module 1 development configuration:
MD1_DEV_PORT = 4001
MD1_DEV_DB_HOST = { database name }
MD1_DEV_DB_USER = { database user }
MD1_DEV_DB_PASSWORD = { database password }

# Module 2 development configuration:
MD2_DEV_PORT = 4002
MD2_DEV_DB_HOST = { database name }
MD2_DEV_DB_USER = { database user }
MD2_DEV_DB_PASSWORD = { database password }

# Module 1 test configuration:
MD1_TEST_PORT = 4001
MD1_TEST_DB_HOST = { database name }
MD1_TEST_DB_USER = { database user }
MD1_TEST_DB_PASSWORD = { database password }

# Module 2 test configuration:
MD2_TEST_PORT = 4002
MD2_TEST_DB_HOST = { database name }
MD2_TEST_DB_USER = { database user }
MD2_TEST_DB_PASSWORD = { database password }

# Module 1 production configuration:
MD1_PORT = 4001
MD1_DB_HOST = { database name }
MD1_DB_USER = { database user }
MD1_DB_PASSWORD = { database password }

# Module 2 production configuration:
MD2_PORT = 4002
MD2_DB_HOST = { database name }
MD2_DB_USER = { database user }
MD2_DB_PASSWORD = { database password }
```
