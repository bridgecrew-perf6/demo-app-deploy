const express = require('express');
const app = express();
const http = require('http').Server(app);

http.listen(process.env.PORT || 3000);

app.set('view engine', 'ejs');
app.get('/', (req, res)=>{
    //res.send('Congo..the app works!!');
    res.render('index', { time : new Date().toLocaleString()});
})

app.get('/about', (req, res)=>{
    res.render('index', { time : new Date().toLocaleTimeString()});
})
