import http from "http";
import router from "./router.js";
import setCors from "./utils/setCors.js";

// env is external package hence can not define .env
const PORT = 3000;

// instead of const app = express(); creating our own http server
const server = http.createServer((req, res) => {

  setCors(res);
  // Browser sends OPTIONS "preflight" request before every real request
  // We must respond 200 to it or the actual request gets blocked
  if (req.method === "OPTIONS") {
    res.writeHead(200);
    res.end();
    return;
  }
  router(req, res);
  
});

server.listen(PORT, () => {
  console.log(`Todo server started running at http://localhost:${PORT}`);
});