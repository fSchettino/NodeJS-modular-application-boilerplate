/* eslint-disable import/no-dynamic-require */
/* eslint-disable prefer-destructuring */
import express from 'express';

const modulesConfig = require(`../../config/configurations/${process.env.NODE_ENV}`); // Import module configuration based on node environment

const app = express();

const { alias, port } = modulesConfig.module1Config;

app.listen(port, () => {
  console.log(
    '\x1b[32m',
    `✔ ${alias} server started and listening on port ${port}`,
    '\x1b[0m'
  );
});

app.get('/', (req, res) => {
  res.send(`${alias} running on ${req.headers.host}`);
});

module.exports = app;
