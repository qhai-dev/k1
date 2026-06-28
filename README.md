# Kairo

```sh
    
```

bazel run @rules_go//go -- mod tidy -v

bazel run @rules_go//go mod init github.com/example/project

bazel run @rules_go//go get golang.org/x/text@v0.3.2

buildifier path/to/file

build --config=remote
build:remote --remote_cache=grpc://127.0.0.1:9092
build:remote --remote_upload_local_results=false
build:remote --remote_cache_compression
build:remote --remote_timeout=120
build:remote --remote_retries=5
build:remote --remote_max_connections=50
build:remote --remote_local_fallback
build:remote-write --config=remote
build:remote-write --remote_upload_local_results=true

go install 
sqlc
buf
protoc-gen-go
protoc-gen-go-grpc
buildifier

$ go install github.com/grpc-ecosystem/grpc-gateway/v2/protoc-gen-grpc-gateway@latest
$ go install google.golang.org/protobuf/cmd/protoc-gen-go@latest
$ go install google.golang.org/grpc/cmd/protoc-gen-go-grpc@latest

Allow people to use `bazel run @rules_buf_toolchains//:buf -- --version`
