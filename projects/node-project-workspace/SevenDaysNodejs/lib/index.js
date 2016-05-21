var http = require('http');
var url = require('./url');
var file = require('./file');
http.createServer((req, res) => {
    try {
        var filenames = url.parseURL(req.url),
            filecontents;
        if (filenames && filenames.length > 0) {
            filecontents = file.readFiles(filenames);
        }

    } catch (ex) {
        res.writeHead(404);
        res.end('can`t find any files');
        return;
    }

    res.writeHead(200);
    res.end(filecontents);
}).listen('1000');
 