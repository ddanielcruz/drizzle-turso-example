import env from 'env-var'

export const DATABASE_URL = env.get('DATABASE_URL').required().asString()
export const DATABASE_AUTH_TOKEN = env.get('DATABASE_AUTH_TOKEN').required().asString()
