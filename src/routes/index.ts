import { Router } from "express"
import { apiRouter } from "./api"
import { log } from "../tools/log"

const mainRouter = Router()

mainRouter.use(
    (req, res, next): void => {
        log.verbose(`HTTP ${req.method} ${req.path}`)

        next()
    },
)

mainRouter.get(
    "/",
    (_req, res): any => {
        return res.json({})
    },
)

mainRouter.get(
    "/health/health",
    (_req, res): any => {
        return res.json({
            status: "UP",
        })
    },
)

mainRouter.use("/api", apiRouter)

export { mainRouter }
