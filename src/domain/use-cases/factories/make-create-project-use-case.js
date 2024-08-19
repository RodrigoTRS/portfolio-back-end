const { ProjectRepository } = require("../../../repository/mongo/project-repository")
const { CreateProjectUseCase } = require("../create-project-use-case")

function makeCreateProjectUseCase() {
    const projectRepository = new ProjectRepository()
    const useCase = new CreateProjectUseCase(projectRepository)

    return useCase
}

module.exports = { makeCreateProjectUseCase }