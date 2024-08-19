class CreateProjectUseCase {

    _projectRepository

    constructor(projectRepository) {
        this._projectRepository = projectRepository
    }

    async execute({
        title,
        description,
        imageUrl,
        demoUrl,
        repositoryUrl,
    }) {

        const project =  await this._projectRepository.create({
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

module.exports = { CreateProjectUseCase }