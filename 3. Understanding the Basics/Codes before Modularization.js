const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    // console.log(req.url, req.method, req.headers);
    // console.log(req.url);
    // console.log(res);
    // res.write();
    // process.exit();

    // res.setHeader('Content-Type', 'text/html');
    // res.write('<html>');
    // res.write('<head><title> Node JS response html! Yayy! </title></head>');
    // res.write('<body> Node JS response html! Yayy! </body>');
    // res.write('</html>');
    // res.end();


    const url = req.url;
    const method = req.method;
    // console.log(method);
    // const data = req.

    if (url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title> Node JS response html! Yayy! </title></head>');
        res.write('<body><form action="/message" method="post"><input type="text" name="msg"><button type="submit">' +
            'send </button> </form></body>');
        res.write('</html>');
        return res.end();
    }
    if (url === '/message' && method === 'POST') {
        /*
        Implementing extraction of data from post request.
         */

        const body = [];
        req.on('data', chunk => {
            console.log(chunk + ',');
            body.push(chunk);
        });

        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody);
            const dataOnly = parsedBody.split('=')[1];

            /*
                writeFileSync ==> blocking code
                writeFile ==> non-blocking code
             */
            // fs.writeFileSync('submitted.txt', dataOnly);
            fs.writeFile('submitted.txt', dataOnly, err => {
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();
            });
        });
    }

    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title> Node JS response html! Yayy! </title></head>');
    res.write('<body> Node JS response html! Yayy! </body>');
    res.write('</html>');
    res.end();
});

server.listen(3000);
