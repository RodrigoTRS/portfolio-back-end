const { ProjectRepository } = require("../../../repository/mongo/project-repository")
const { EditProjectByIdUseCase } = require("../edit-project-by-id-use-case")

function makeEditProjectByIdUseCase() {
    const projectRepository = new ProjectRepository()
    const useCase = new EditProjectByIdUseCase(projectRepository)

    return useCase
}

module.exports = { makeEditProjectByIdUseCase }