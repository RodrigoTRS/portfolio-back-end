class FetchProjectsUseCase {

    _projectRepository

    constructor(projectRepository) {
        this._projectRepository = projectRepository
    }

    async execute() {

        const projects =  await this._projectRepository.fetchAll()

        if (projects instanceof Error) {
            return projects
        }
        
        return projects
    }
}

module.exports = { FetchProjectsUseCase }