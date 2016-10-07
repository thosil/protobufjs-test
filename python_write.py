#!/usr/bin/env python
import sys
from python.example_pb2 import Message
filename = sys.argv[1]
msg = Message()
msg.name = sys.argv[2]
msg.desc = sys.argv[3]
with open(filename, "wb") as f:
    f.write(msg.SerializeToString())
print "wrote %s" % filename
