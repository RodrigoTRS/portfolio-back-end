const mongoose = require("mongoose")
const { Project } = require("./project-schema")
const { config } = require("../../utils/config")

class ProjectRepository {


    constructor() {
        mongoose.connect(config.MONGO_CONNECTION_STRING)
        .catch(err => {
            console.error('Error connecting to MongoDB:', err);
        });
    }

    async create({
        title,
        description,
        imageUrl,
        demoUrl,
        repositoryUrl,
    }) {

        try {
            const project = new Project({
                title,
                description,
                imageUrl,
                demoUrl,
                repositoryUrl,
            })
            await project.save()
            return project
        } catch (err) {
            return new Error(`${__filename} - Failed on creating project.\n${err}`,)
        }
    }

    async fetchAll() {

        try {
            const projects = await Project.find({}).exec()
            return projects
        } catch (err) {
            return new Error(`${__filename} - Failed on fetching projects.\n${err}`,)
        }
                
    }

    async delete({ id }) {
        try {
            const deletedProject = await Project.deleteOne({ _id: id })
            return deletedProject
        } catch (err) {
            return new Error(`${__filename} - Failed on fetching projects.\n${err}`)
        }
    }


    async getProjectById({ id }) {
        try {
            const project = await Project.findById(id)
            return project
        } catch (err) {
            return new Error(`${__filename} - Failed on fetching projects.\n${err}`)
        }
    }

    async editProjectById({
        id,
        title,
        description,
        imageUrl,
        demoUrl,
        repositoryUrl,
    }) {
        try {
            const project = await Project.updateOne(
                { "_id": id },
                {
                    title,
                    description,
                    imageUrl,
                    demoUrl,
                    repositoryUrl,
                }
            )
            return project
        } catch (err) {
            return new Error(`${__filename} - Failed on editing project.\n${err}`)
        }
    }

}

module.exports = { ProjectRepository }