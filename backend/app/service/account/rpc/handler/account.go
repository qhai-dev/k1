package handler

import (
	"fmt"

	"github.com/qhai-dev/kairo/library/framework"
)

type AccountService struct {
	//
}

func NewAccountService(app *framework.App) *AccountService {
	return &AccountService{
		//
	}
}

func (t *AccountService) Handler() {
	fmt.Print("rpc handler \n")
}
