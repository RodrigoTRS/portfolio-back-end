const { ProjectRepository } = require("../../../repository/mongo/project-repository")
const { DeleteProjectUseCase } = require("../delete-project-use-case")

function makeDeleteProjectUseCase() {
    const projectRepository = new ProjectRepository()
    const useCase = new DeleteProjectUseCase(projectRepository)

    return useCase
}

module.exports = { makeDeleteProjectUseCase }