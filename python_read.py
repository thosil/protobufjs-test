#!/usr/bin/env python
import sys
from python.example_pb2 import Message
filename = sys.argv[1]
msg = Message()
with open(filename, "rb") as f:
    msg.ParseFromString(f.read())
print "name: %s" % msg.name
print "desc: %s" % msg.desc
