import https from 'https';

const server = https.createServer((req, res) => {

    if (req.url === '/api/products') {

        res.end(JSON.stringify({
            id: 1,
            name: 'mobile',
            price: 40000,
            rating: 4.7,
            review: 225
        }));

    } else {
        
        res.statusCode(400);
        res.end;

    }

});

server.listen(3000, () => console.log('prg4 is running.....'));