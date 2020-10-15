const express = require('express');
const app = express();
const port = 3000;

app.get('/', function(req,res) {
    res.send('Hello World!')
})

app.get('/users', function(req,res) {
    res.send([])
})

app.listen(port,function(){console.log('server is running')})
