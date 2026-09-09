import http from "http";
import { createReadStream } from "fs";

const server = http.createServer((req, res) => {

    // Home page
    if (req.url === "/") {

        res.setHeader("Content-Type", "text/html");

        res.write(`
            <!DOCTYPE html>
            <html>
            <head>
                <title>My Web Pages</title>
            </head>
            <body>
                <h1>Welcome to My Website</h1>

                <a href="/pot">🇮🇳 Indian Pot</a>
            </body>
            </html>
        `);

        res.end();
    }

    // Indian Pot page
    else if (req.url === "/pot") {

        res.setHeader("Content-Type", "text/html");

        const stream = createReadStream("pot.html", {
            encoding: "utf-8"
        });

        stream.pipe(res);
    }

    // Page not found
    else {

        res.statusCode = 404;

        res.setHeader("Content-Type", "text/html");

        res.end(`
            <h1>404 - Page Not Found</h1>
            <p>The requested page does not exist.</p>
        `);
    }
});

// Start server on port 4000
server.listen(4000, () => {
    console.log("Server running on http://localhost:4000");
});