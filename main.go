package main

import (
	router "github.com/hiroya8649/gomysite/web"
)

func main() {
	r := router.SetupRouter()
	r.Run() // listen and serve on 0.0.0.0:8080
}
