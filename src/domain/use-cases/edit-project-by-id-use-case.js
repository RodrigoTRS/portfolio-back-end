class EditProjectByIdUseCase {

    _projectRepository

    constructor(projectRepository) {
        this._projectRepository = projectRepository
    }

    async execute({
        id,
        title,
        description,
        imageUrl,
        demoUrl,
        repositoryUrl,
    }) {
        const project =  await this._projectRepository.editProjectById({
            id,
            title,
            description,
            imageUrl,
            demoUrl,
            repositoryUrl,
        })

        if (project instanceof Error) {
            return project
        }
        
        return project
    }
}

module.exports = { EditProjectByIdUseCase }