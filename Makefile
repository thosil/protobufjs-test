all: python

python: python/example_pb2.py

python/example_pb2.py:
	protoc -I=schemas --python_out=python schemas/example.proto
