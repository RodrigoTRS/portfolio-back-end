const express = require("express")

const { projectsRoutes } = require("./http/controllers/projects/routes")
const { hello } = require("./http/controllers/hello")

const app = express()

app.use(express.json())

app.use("/projects", projectsRoutes)
app.get("/hello", hello)

module.exports = { app }