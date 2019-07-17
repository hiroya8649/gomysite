package controllers

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

type pageController struct{}

var instance = &pageController{}

func PageController() *pageController {
	return instance
}

func (pageController) Index(c *gin.Context) {
	c.HTML(http.StatusOK, "index.html", gin.H{
		"title": "hello world",
	})
}
