# Kairo

bazel run @rules_go//go -- mod tidy -v

bazel run @rules_go//go mod init github.com/example/project

bazel run @rules_go//go get golang.org/x/text@v0.3.2

buildifier path/to/file

go程序 运行时镜像
gcr.io/distroless/static-debian13
