const fs = require('fs');

const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;

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
            const dataOnly = parsedBody.split('=')[0];

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
};


/*
First way of exporting module AKA connecting routes.js with app.js
 */

// way-1
// module.exports = requestHandler;

// way-2
module.exports = {
    handler: requestHandler,
    text: 'some text'
};

// way - 3
// module.exports.handler = requestHandler;
// module.exports.text = 'some text';

// way-4 -> works only for node js (not for raw js).
// exports.handler = requestHandler;
// exports.text = 'some text';