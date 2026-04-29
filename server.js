import http from "http";
import router from "./router.js";

const PORT = 3000;

const server = http.createServer((req, res) => {
  router(req, res);
});

server.listen(PORT, () => {
  console.log(`Todo server started running at http://localhost:${PORT}`);
});