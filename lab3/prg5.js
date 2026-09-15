import http from 'http';

const server = http.createServer((req, res) => {

    // req method -> GET, PUT, DELETE, PATCH
    console.log("Method:", req.method);
    console.log("URL:", req.url);

    // Browser can only send GET request
    // POST/PUT/PATCH/DELETE can be checked using API tester
    // API tester: Postman, Thunder Client

    if (req.url === '/') {

        res.setHeader("content-type", "text/html");

        res.end("<h1>Hello Server</h1>");
    }

    else if (req.url === "/Products") {

        const products = [
            { id: 1, name: "bottle" },
            { id: 2, name: "laptop" }
        ];

        res.writeHead(200, {
            "content-type": "application/json"
        });

        res.end(JSON.stringify({ products }));
    }

    else {

        res.end("Page not found");
    }
});

server.listen(3000, () => {
    console.log("Server is running on port 3000");
});