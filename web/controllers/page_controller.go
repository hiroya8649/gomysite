package controllers

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

type pageController struct{}

var pageControllerInstance = &pageController{}

func PageController() *pageController {
	return pageControllerInstance
}

func (pageController) Index(c *gin.Context) {
	c.HTML(http.StatusOK, "index.html", gin.H{
		"title": "hello world",
	})
}
