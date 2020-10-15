const express = require('express');
const app = express();
const port = 3000;

var user = [];

app.get('/', function(req,res) {
    res.send('Hello World!')
})

app.get('/users', function(req,res) {
    res.send(user)
})

app.post('/users', function(req,res) {
    user.push({id: 0})
    res.json(user)
})

app.get('/users/:id', function(req,res) {
    res.json(user)
})

app.listen(port,function(){console.log('server is running')})
