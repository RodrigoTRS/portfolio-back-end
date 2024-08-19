class DeleteProjectUseCase {

    _projectRepository

    constructor(projectRepository) {
        this._projectRepository = projectRepository
    }

    async execute(id) {

        const deleteResponse =  await this._projectRepository.delete({ id })

        if (deleteResponse instanceof Error) {
            return deleteResponse
        }

        const { acknowledged, deletedCount } = deleteResponse
        
        if (!acknowledged || (deletedCount === 0)) {
            return new Error(`${__filename} - Failed on deleting project.\n${err}`,)
        }

        return deleteResponse
    }
}

module.exports = { DeleteProjectUseCase }