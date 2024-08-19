const { makeFetchProjectsUseCase } = require("../../../domain/use-cases/factories/make-fetch-projects-use-case")

async function fetchProjects(request, response) {

    const useCase = makeFetchProjectsUseCase()
    
    const projects = await useCase.execute()

    if (projects instanceof Error) {
        return response.status(500).send()
    }

    return response.status(200).json(projects)
}

module.exports = { 
    fetchProjects
}