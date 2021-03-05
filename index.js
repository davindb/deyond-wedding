const http = require("http");
const fs = require("fs");
// const port = 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  fs.readFile("index.html", (err, data) => {
    if (err) {
      res.writeHead(404);
      res.write("Error: File Not Found");
    } else {
      res.write(data);
    }
    res.end();
  });
});

// server.listen(port, (err) => {
//   if (err) {
//     console.log("Something went wrong.");
//   } else {
//     console.log(`Server is listening on port ${port}`);
//   }
// });

server.listen(process.env.PORT || 5000);
