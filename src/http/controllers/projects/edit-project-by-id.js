const { z } = require("zod")
const { makeEditProjectByIdUseCase } = require("../../../domain/use-cases/factories/make-edit-project-by-id-use-case")

const editProjectByIdParamsSchema = z.object({
    id: z.string(),
})

const editProjectBodySchema = z.object({
    title: z.string(),
    description: z.string(),
    imageUrl: z.string(),
    demoUrl: z.string().optional(),
    repositoryUrl: z.string().optional(),
})
 

async function editProjectById(request, response) {

    const requestParams = editProjectByIdParamsSchema.safeParse(request.params)
    const requestBody = editProjectBodySchema.safeParse(request.body)

    if (!requestParams.success || !requestBody.success) {
        return response.status(400).json({ error: "Bad Request", details: requestParams.error.errors })
    }

    const {
        id
    } = requestParams.data

    const {
        title,
        description,
        imageUrl,
        demoUrl,
        repositoryUrl,
    } = requestBody.data

    const useCase = makeEditProjectByIdUseCase()
    
    const project = await useCase.execute({
        id,
        title,
        description,
        imageUrl,
        demoUrl,
        repositoryUrl,
    })

    if (project instanceof Error) {
        return response.status(404).send()
    }

    return response.status(200).json(project)
}

module.exports = { 
    editProjectById
}