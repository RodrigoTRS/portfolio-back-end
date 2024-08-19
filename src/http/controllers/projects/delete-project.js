const { z } = require("zod")
const { makeDeleteProjectUseCase } = require("../../../domain/use-cases/factories/make-delete-project-use-case")

const deleteProjectParamsSchema = z.object({
    id: z.string(),
})

async function deleteProject(request, response) {

    const requestParams = deleteProjectParamsSchema.safeParse(request.params)

    if (!requestParams.success) {
        return response.status(400).json({ error: "Bad Request", details: requestParams.error.errors })
    }

    const {
        id
    } = requestParams.data

    const useCase = makeDeleteProjectUseCase()
    
    const project = await useCase.execute(id)

    if (project instanceof Error) {
        return response.status(404).send()
    }

    return response.status(202).send()
}

module.exports = { 
    deleteProject
}