require("dotenv").config();
const server = require("./src/server");
const mainRouter = require('./src/routes/mainRouter');
const { conn } = require('./src/db');
const { getDataApi } = require('./src/handlers/countriesHandlers');


const PORT = process.env.PORT

server.use(mainRouter);


conn.sync({ force: true  }).then(() => {
server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
  getDataApi();
})
}).catch(error => console.error(error))

