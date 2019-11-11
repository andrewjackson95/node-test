var express = require('express');

var app = express();
var data = [];

app.use(express.json());

app.use((req, res, next) => {
    //console.log('Testing that this happens', req.url);
    next();
})

app.get('/item/all', (req,res) => {
    res.send(data);
});

app.get('/item/:index', (req, res) => {
    res.send(data[req.params.index]);
});

app.post('/item/:index', (req,res) => {
    data.push(req.params.index);
    //res.status(201).send();
    res.send(data);
});

app.put('/item/:index/:newData', (req, res) => {
    data[+req.params.index] = req.params.newData;
    res.send(data);
});

app.delete('/item/:index', (req, res) => {
    data.splice(+req.params.index, 1);
    res.send(data);
});

// app.get('/home', (req, res) => {
//     console.log('hello');
//     res.status(500);
//     res.send('Please work');
// });

// app.post('/page2', (req, res) => {
//     console.log('world');
//     res.status(500);
//     res.send(req.body);
// });

// app.post('/page3', (req, res) => {
//     console.log('!');
//     res.status(500);
//     res.send('Page 3');
// });

app.listen(8080);