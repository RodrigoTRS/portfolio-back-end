const express = require("express")
const { createProject } = require("./create-project")
const { fetchProjects } = require("./fetch-projects")
const { deleteProject } = require("./delete-project")
const { getProjectById } = require("./get-project-by-id")
const { editProjectById } = require("./edit-project-by-id")


const projectsRoutes = express.Router()

projectsRoutes.get("/", fetchProjects)
projectsRoutes.get("/:id", getProjectById)
projectsRoutes.patch("/:id", editProjectById)
projectsRoutes.post("/", createProject)
projectsRoutes.delete("/:id", deleteProject)

module.exports = { projectsRoutes }