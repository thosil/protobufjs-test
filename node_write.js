#!/usr/bin/env node
var fs = require("fs");
var ProtoBuf = require("protobufjs");
var Message = ProtoBuf.protoFromFile("schemas/example.proto").build("Message");
var filename = process.argv[2];
var msg = new Message(process.argv[3], process.argv[4]);
var stream = fs.createWriteStream(filename);
stream.once("open", function(fd) {
    stream.write(msg.toBuffer());
    stream.end();
    console.log("wrote" + filename);
});
