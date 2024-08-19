const { z } = require("zod")
const { makeGetProjectByIdUseCase } = require("../../../domain/use-cases/factories/make-get-project-by-id-use-case")

const getProjectByIdParamsSchema = z.object({
    id: z.string(),
})

async function getProjectById(request, response) {

    const requestParams = getProjectByIdParamsSchema.safeParse(request.params)

    if (!requestParams.success) {
        return response.status(400).json({ error: "Bad Request", details: requestParams.error.errors })
    }

    const {
        id
    } = requestParams.data

    const useCase = makeGetProjectByIdUseCase()
    
    const project = await useCase.execute(id)

    if (project instanceof Error) {
        return response.status(404).send()
    }

    return response.status(200).json(project)
}

module.exports = { 
    getProjectById
}