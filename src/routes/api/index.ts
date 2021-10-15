import { Router } from "express"
import { moviesRouter } from "./movies"
import expressBasicAuth from "express-basic-auth"

const apiRouter = Router()

apiRouter.use(
    expressBasicAuth({
        users: {
            test: "test",
        },
        realm: "Restricted",
        challenge: true,
    }),
)

apiRouter.use("/movies", moviesRouter)

export { apiRouter }
