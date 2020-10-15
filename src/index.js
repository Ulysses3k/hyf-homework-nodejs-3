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

app.post('/user', function(req,res) {
    user.push({ id: 0  })
    res.json(user[0])
})

app.get('/user/:id', function(req,res) {
    res.json(user[req.params.id])
})

app.delete('/user/:id', function(req,res) {
    if (user.length===0) {
        res.status(204).send()
    } else {
        user.splice(req.params.id,1)
        res.status(202).send()
    }
})

app.listen(port,function(){console.log('server is running')})
