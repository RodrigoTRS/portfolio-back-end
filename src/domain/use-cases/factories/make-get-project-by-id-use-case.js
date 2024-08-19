const { ProjectRepository } = require("../../../repository/mongo/project-repository")
const { GetProjectByIdUseCase } = require("../get-project-by-id-use-case")

function makeGetProjectByIdUseCase() {
    const projectRepository = new ProjectRepository()
    const useCase = new GetProjectByIdUseCase(projectRepository)

    return useCase
}

module.exports = { makeGetProjectByIdUseCase }