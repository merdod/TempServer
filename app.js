const express = require('express');
const path = require('path');

const app = express();

const PORT = 5000;

//set public folder
app.use(express.static(path.join(__dirname,'public')))

app.get('/', function(req,res){
    res.sendFile(path.join(__dirname,'public','home.html'))
})

app.listen(PORT, function(){
    console.log(`Server running on port: ${PORT}`);
})