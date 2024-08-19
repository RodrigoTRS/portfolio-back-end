const { env } = require("../utils/env")

const config = {
    MONGO_CONNECTION_STRING: env.NODE_ENV === "development"
        ? env.DEV_MONGO_CONNECTION_STRING
        : env.PROD_MONGO_CONNECTION_STRING
}

module.exports = { config }