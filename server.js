const http = require("hhtp");
require("dotenv").config();

const server = http.createServer();

server.listen(process.env.PORT, () => {
  console.log(`listening on ${process.env.PORT}`);
});
