package router

import (
	"github.com/gin-gonic/gin"

	c "github.com/hiroya8649/gomysite/web/controllers"
)

func SetupRouter() *gin.Engine {
	router := gin.Default()

	router.LoadHTMLFiles("web/index.html")
	router.GET("/", c.PageController().Index)

	return router
}
