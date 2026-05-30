package rpc

import "github.com/qhai-dev/kairo/service/account/rpc/handler"

func NewRPCServer(handler *handler.AccountService) error {
	handler.Handler()

	return nil
}
