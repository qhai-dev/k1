package framework

import (
	"context"
	"net/http"
	"sync"

	"github.com/spf13/viper"
	"google.golang.org/grpc"
)

type App struct {
	ctx context.Context

	gs   *grpc.Server
	rs   *http.Server
	conf *viper.Viper

	startHooks    []func()
	shutdownHooks []func()

	mu sync.Mutex
}

func New() *App {
	app := &App{
		ctx: context.Background(),
	}

	// 初始化 conf
	// 初始化 logger
	// 初始化 rpc / rest
	//

	return app
}

func (app *App) Run() {
	err := app.runStartHooks()
	if err != nil {
		panic(err)
	}
}

func (app *App) RegisterStartHooks(hook func()) {
	app.startHooks = append(app.startHooks, hook)
}

func (app *App) RegisterShutdownHooks(hook func()) {
	app.shutdownHooks = append(app.shutdownHooks, hook)
}

func (app *App) Shutdown(ctx context.Context) error {
	err := app.runShutdownHooks()
	if err != nil {
		return err
	}

	return nil
}

func (app *App) runStartHooks() error {
	for _, hook := range app.startHooks {
		hook()
	}

	return nil
}

func (app *App) runShutdownHooks() error {
	for _, hook := range app.shutdownHooks {
		hook()
	}
	return nil
}
