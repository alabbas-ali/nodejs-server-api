
export const port = process.env.SERVER_PORT || 3000
export const loglevel = process.env.LOG_LEVEL || "info"
export const environment = process.env.INVIRONMENT || "build"

export const allowedCorsDomains = [
    "http://localhost:3000",
    "chrome-extension://aejoelaoggembcahagimdiliamlcdmfm",
]
