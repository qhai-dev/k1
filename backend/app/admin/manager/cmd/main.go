package main

import (
	"fmt"

	"github.com/qhai-dev/kairo/backend/library/framework"
)

func main() {
	fmt.Printf("hello bazel build remote test")
	app := framework.New()
	app.Run()
}
