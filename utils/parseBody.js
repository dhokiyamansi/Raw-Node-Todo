const parseBody = (req) => {
  return new Promise((resolve, reject) => {
    let body = "";
    req.on("data", (chunk) => {                      // Node streams data in chunks 
      body += chunk.toString();
    });

    // When stream ends, parse the full body
    req.on("end", () => {
      try {
        const parsed = body ? JSON.parse(body) : {};
        resolve(parsed);
      } catch (err) {
        reject(new Error("Invalid JSON body"));
      }
    });

    req.on("error", reject);
  });
};

export default parseBody;

