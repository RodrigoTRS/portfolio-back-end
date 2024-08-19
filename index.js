require("dotenv/config")
const { app } = require("./src/app")
const { env } = require("./src/utils/env")
const serverless = require("serverless-http")

if (env.NODE_ENV === "development") {
    app.listen(env.PORT, () => {
        console.log(`[${env.NODE_ENV}] Server running on port ${env.PORT}...`)
    })
}

module.exports.handler = serverless(app);
