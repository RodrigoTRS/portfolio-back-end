const z = require("zod")

const envSchema = z.object({
    NODE_ENV: z.enum(["development", "production"]).default("development"),
    PORT: z.string().transform((a) => parseInt(a)).default(3000),
    DEV_MONGO_CONNECTION_STRING: z.string(),
    PROD_MONGO_CONNECTION_STRING: z.string(),
})

const _env = envSchema.safeParse(process.env)

if (_env.error) {
    throw new Error("Failed on parsing process.env")
}

const env = _env.data

module.exports = { env }