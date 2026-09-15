import http from "http";

const server = http.createServer((req, res) => {

    // GET Request
    if (req.url === "/" && req.method === "GET") {
        res.statusCode = 200;
        res.end("GET Request");
    }

    // POST Request
    else if (req.url === "/" && req.method === "POST") {
        res.statusCode = 200;
        res.end("POST Request");
    }

    // PUT Request
    else if (req.url === "/" && req.method === "PUT") {
        res.statusCode = 200;
        res.end("PUT Request");
    }

    // DELETE Request
    else if (req.url === "/" && req.method === "DELETE") {
        res.statusCode = 200;
        res.end("DELETE Request");
    }

    // If route/method does not match
    else {
        res.statusCode = 404;
        res.end("Page Not Found");
    }
});

// Start server
server.listen(5000, () => {
    console.log("prg6 is running on port 5000");
});