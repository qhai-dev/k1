//go:build wireinject
// +build wireinject

package main

import (
	"github.com/google/wire"
	"github.com/qhai-dev/kairo/library/framework"
)

func initialize(*framework.App) error {
	wire.Build()

	return nil
}
