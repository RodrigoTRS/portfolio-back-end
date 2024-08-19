class GetProjectByIdUseCase {

    _projectRepository

    constructor(projectRepository) {
        this._projectRepository = projectRepository
    }

    async execute(id) {


        const project =  await this._projectRepository.getProjectById({ id })

        if (project instanceof Error) {
            return project
        }

        return project
    }
}

module.exports = { GetProjectByIdUseCase }