const server = require('./api/server.js');
require('dotenv').config()
const port = process.env.PORT ? process.env.PORT : 4000

//not required for PORT to be in capitals but it is recommended
//for env vars to be in capitals

server.listen(port, () => {
  console.log(`\n*** Server Running on http://localhost:${port} ***\n`);
});
