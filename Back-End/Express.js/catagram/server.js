const express = require('express');

const app = express();


app.get('/', (req,res)=>{
    res.send('hello World from express')
})

app.post('/cats', (req,res)=>{
    console.log('create cat');
    
})
app.all('/', (req, res)=>{
    console.log( 'handle all requests');
    
})


app.listen(5000, ()=> console.log('Server is running on port 5000'))