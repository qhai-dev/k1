package conf

const (
	defaultConfPath = "./resources/application.yaml"
)

type Configuration interface {
	Load() error
	Scan() error
	Watch() error
}

// func New() Configuration {

// }
