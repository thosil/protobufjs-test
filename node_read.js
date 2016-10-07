#!/usr/bin/env node
var fs = require("fs");
var ProtoBuf = require("protobufjs");
var Message = ProtoBuf.protoFromFile("schemas/example.proto").build("Message");
var filename = process.argv[2];
var stream = fs.createReadStream(filename);
var data = '';
stream.on("data", function(chunk){
    data += chunk;
});
stream.on('end', function(){
    var msg = Message.decode(new Buffer(data));
    console.log("name: " + msg.name);
    console.log("desc: " + msg.desc);
});
