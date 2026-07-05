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

Allow people to use `bazel run @rules_buf_toolchains//:buf -- --version`


	github.com/evilmartians/lefthook/v2@v2.1.9
	github.com/google/wire/cmd/wire
	github.com/grpc-ecosystem/grpc-gateway/v2/protoc-gen-grpc-gateway
	google.golang.org/grpc/cmd/protoc-gen-go-grpc
	google.golang.org/protobuf/cmd/protoc-gen-go
	github.com/bufbuild/buf/cmd/buf@v1.71.0
	github.com/sqlc-dev/sqlc/cmd/sqlc@latest
	github.com/bazelbuild/buildtools/buildifier@latest
