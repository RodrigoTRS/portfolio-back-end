const { z } = require("zod")
const { makeCreateProjectUseCase } = require("../../../domain/use-cases/factories/make-create-project-use-case")

const createProjectBodySchema = z.object({
    title: z.string(),
    description: z.string(),
    imageUrl: z.string(),
    demoUrl: z.string().optional(),
    repositoryUrl: z.string().optional(),
})

async function createProject(request, response) {

    const requestBody = createProjectBodySchema.safeParse(request.body)

    if (!requestBody.success) {
        return response.status(400).json({ error: "Bad Request", details: requestBody.error.errors })
    }

    const {
        title,
        description,
        imageUrl,
        demoUrl,
        repositoryUrl,
    } = requestBody.data

    const useCase = makeCreateProjectUseCase()
    
    const project = await useCase.execute({
        title: title,
        description: description,
        imageUrl: imageUrl,
        demoUrl: demoUrl,
        repositoryUrl: repositoryUrl,
    })

    if (project instanceof Error) {
        return response.status(422).send()
    }

    return response.status(201).send()
}

module.exports = { 
    createProject
}