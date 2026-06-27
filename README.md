# Kairo

bazel run @rules_go//go -- mod tidy -v

bazel run @rules_go//go mod init github.com/example/project

bazel run @rules_go//go get golang.org/x/text@v0.3.2

buildifier path/to/file

go程序 运行时镜像
gcr.io/distroless/static-debian13

pull = use_repo_rule("@rules_img//img:pull.bzl", "pull")

pull(
    digest = "sha256:3592aa8171c77482f62bbc4164e6a2d141c6122554ace66e5cc910cadb961ff0",
    registry = "gcr.io",
    repository = "distroless/static-debian13",
)


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
air
lefthook
sqlc
