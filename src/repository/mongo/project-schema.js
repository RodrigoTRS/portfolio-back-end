const { Schema, model } = require("mongoose")

const project = new Schema({
    id: String,
    title: String,
    description: String,
    imageUrl: String,
    demoUrl: String,
    repositoryUrl: String,
    createdAt: {
        type: Date,
        default: Date.now,
    },})

const Project = model("Project", project)

module.exports = { Project }