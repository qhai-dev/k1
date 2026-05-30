//go:build wireinject
// +build wireinject

package main

import (
	"github.com/google/wire"
	"github.com/qhai-dev/kairo/library/framework"
	"github.com/qhai-dev/kairo/service/account/rpc"
)

func initialize(*framework.App) error {
	wire.Build(
		rpc.ProviderSet,
	)

	return nil
}
