package main

import (
	"net/http"
	"time"

	router "github.com/hiroya8649/gomysite/web"
)

func herokuKeepAlive() {
	for {
		time.Sleep(15 * time.Minute)
		http.Get("http://hiroya-resume.herokuapp.com")
	}
}

func main() {
	go herokuKeepAlive()
	r := router.SetupRouter()
	r.Run() // listen and serve on 0.0.0.0:8080
}
