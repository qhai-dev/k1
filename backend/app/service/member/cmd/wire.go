//go:build wireinject
// +build wireinject

package main

import (
	"github.com/google/wire"
	"github.com/qhai-dev/kairo/library/framework"
	"github.com/qhai-dev/kairo/service/member/application"
	"github.com/qhai-dev/kairo/service/member/infra"
	"github.com/qhai-dev/kairo/service/member/rpc"
)

func initialize(*framework.App) error {
	wire.Build(
		application.ProviderSet,
		infra.ProviderSet,
		rpc.ProviderSet,
	)

	return nil
}
