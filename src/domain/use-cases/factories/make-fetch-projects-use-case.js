const { ProjectRepository } = require("../../../repository/mongo/project-repository")
const { FetchProjectsUseCase } = require("../fetch-projects-use-case")

function makeFetchProjectsUseCase() {
    const projectRepository = new ProjectRepository()
    const useCase = new FetchProjectsUseCase(projectRepository)

    return useCase
}

module.exports = { makeFetchProjectsUseCase }