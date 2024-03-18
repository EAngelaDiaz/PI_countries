const axios = require("axios");
const server = require("./src/server");
const router = require('./src/routes/index');
const { conn } = require('./src/db');
const getCountriesData = require('./src/controllers/getApiControllers')


const PORT = 3001;

server.use('/countries', router);


conn.sync({ force: true }).then(() => {
server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
  getCountriesData();
})
}).catch(error => console.error(error))

