// var http = require('http');
// var fs = require('fs');
// var url = require('url');
// var path = require('path');

// var clientPath = path.join(__dirname, '../client');
// var dataPath = path.join(__dirname, 'data.json');

// var server = http.createServer(function(req, res) {
//     var urlData = url.parse(req.url, true);

//     if (urlData.pathname === '/' && req.method === 'GET') {
//         res.writeHead(200, { 'Content-Type': 'text/html' });
//         fs.createReadStream(path.join(clientPath, 'index.html')).pipe(res);
//     } else if (urlData.pathname === '/api/chirps') {
//         switch (req.method) {
//             case 'GET':
//                 // GET LOGIC
//                 res.writeHead(200, { 'Content-Type': 'application/json' });
//                 fs.createReadStream(dataPath).pipe(res);
//                 break;
//             case 'POST':
//                 // POST LOGIC
//                 fs.readFile(dataPath, 'utf8', function(err, fileContents) {
//                     if (err) {
//                         console.log(err);
//                         res.writeHead(500, { 'Content-Type': 'text/plain' });
//                         res.end('Internal Server Error');
//                     } else {
//                         var chirps = JSON.parse(fileContents);

//                         var incomingData = '';
//                         req.on('data', function(chunk) {
//                             incomingData += chunk;
//                         });
//                         req.on('end', function() {
//                             var newChirp = JSON.parse(incomingData);
//                             chirps.push(newChirp);

//                             var chirpsJSONData = JSON.stringify(chirps);
//                             fs.writeFile(dataPath, chirpsJSONData, function(err) {
//                                 if (err) {
//                                     console.log(err);
//                                     res.writeHead(500, { 'Content-Type': 'text/plain' });
//                                     res.end('Internal Server Error');
//                                 } else {
//                                     res.writeHead(201);
//                                     res.end();
//                                 }
//                             });
//                         });
//                     }
//                 });
//                 break;
//         }
//     } else if (req.method === 'GET') { // For all other GET requests
//         var fileExtension = path.extname(urlData.pathname);
//         var contentType;
//         switch (fileExtension) {
//             case '.html':
//                 contentType = 'text/html';
//                 break;
//             case '.js':
//                 contentType = 'text/javascript';
//                 break;
//             case '.css':
//                 contentType = 'text/css';
//                 break;
//             default:
//                 contentType = 'text/plain';
//         }

//         var readStream = fs.createReadStream(path.join(clientPath, urlData.pathname));
//         readStream.on('error', function(err) {
//             res.writeHead(404);
//             res.end();
//         });
//         res.writeHead(200, { 'Content-Type': contentType });
//         readStream.pipe(res);
//     }
// });
// console.log('Server listening on port 3000!');
// server.listen(3000);

var path = require('path');
var fs = require('fs');
var express = require('express');
var bodyParser = require('body-parser');

var clientPath = path.join(__dirname, '../client');
var dataPath = path.join(__dirname, 'data.json');

var app = express();
app.use(express.static(clientPath));
app.use(bodyParser.json());

app.route('/api/chirps')
    .get(function(req, res) {
        res.sendFile(dataPath);
    }).post(function(req, res) {
        var newChirp = req.body;
        readFile(dataPath, 'utf8')
        .then(function(fileContents) {
            var chirps = JSON.parse(fileContents);
            chirps.push(newChirp);
            return writeFile(dataPath, JSON.stringify(chirps));
        }).then(function() {
            res.sendStatus(201);
        }).catch(function(err) {
            console.log(err);
            res.sendStatus(500);
        });
    });

app.listen(3000);

function readFile(filePath, encoding) {
    return new Promise(function(resolve, reject) {
        fs.readFile(filePath, encoding, function(err, data) {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
}

function writeFile(filePath, data) {
    return new Promise(function(resolve, reject) {
        fs.writeFile(filePath, data, function(err) {
            if(err) {
                reject(err);
            } else {
                resolve();
            }
        });
    });
}