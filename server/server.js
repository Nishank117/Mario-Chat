
const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

var app = express();
var server = http.createServer(app);
var io = socketIO(server);//websocket server

var publicPath = path.join(__dirname,'../public');

app.use(express.static(publicPath));

    io.on('connection',(socket)=>{
        console.log('New connection made',socket.id);

        socket.on('disconnect',()=>{
            console.log('User was disconnected');
        })
    })

var port = process.env.PORT||1337
server.listen(port,()=>{
    console.log(`Server running on Port ${port}`);
})
