//Install express server
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static('./dist'));


// path to where the files are stored on disk
var FILES_DIR = path.join(__dirname, 'files')


app.get('/', (req, res) =>
    res.sendFile('index.html')
);

app.get('/files/demo.json', function(req, res, next){
    const file_path= __dirname + "/files/demo.json";
    res.sendFile(path.join(file_path))
});


var portno = 3000; // Port number to use
// Start the app
var server = app.listen(portno, function () {
    var port = server.address().port;
    console.log(
        "Listening at http://localhost:" +
        port +
        " exporting the directory " +
        __dirname
    );
});
