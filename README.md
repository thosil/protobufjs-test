# Protocol Buffers Demo

simple javascript (node) and python demo using google's protocol buffers

# Install

* clone me

## node.js

* `npm install` (for the node.js part)

## python

* install python's protocol buffers implementation (https://github.com/google/protobuf/releases)
  * get the protobuf-python-xxx.tar.gz
  * uncompress, got to python directory
  * sudo python setup.py install
* install `protoc`compiler
  * on the same page get protoc-xxx-os.zip
  * uncompress bin/protoc to your path

# build

## javascript

nothing :-) (because we're using an implementation that does not requires to compile .proto files).

## python

create the class files from schema :

    make

# play

    ./node_write.js filename "some text" "more text"
    ./python_write.py filename "some text" "more text"
    ./node_read.js filename
    ./python_read.py filename

Files produced with "writers" should be exactly the same (md5sum) and they should be readable with both "readers".

