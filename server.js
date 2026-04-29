import http from "http";
import router from "./router.js";


// env is external package hence can not define .env
const PORT = 3000;

// instead of const app = express(); creating our own http server
const server = http.createServer((req, res) => {
  router(req, res);
});

server.listen(PORT, () => {
  console.log(`Todo server started running at http://localhost:${PORT}`);
});