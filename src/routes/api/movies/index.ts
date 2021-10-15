import { Router, Response as ExpressResponse } from "express"
import { Movie, MovieTypes } from "./move"

import {
    MoviesService,
    MovieNotFoundError,
    MovieStoreError,
    MovieDeleteError,
} from "./moviesService"

const moviesRouter = Router()

const moviesService = new MoviesService()

moviesRouter.get(
    "/",
    async (req, res): Promise<any> => {
        const moves = await moviesService.getAll()

        return res.json(moves)
    },
)

moviesRouter.get(
    "/:id",
    async (req, res): Promise<ExpressResponse> => {
        try {
            const move = await moviesService.getOneByID(req.params.id)
            if (move)
                return res.json(move)
            else throw MovieNotFoundError

        } catch (e) {
            return res.status(404).json({
                message: "Invalid move ID",
            })
        }
    },
)

moviesRouter.get(
    "/type/:type",
    async (req, res): Promise<any> => {
        try {
            var ty: MovieTypes = req.params.type as unknown as MovieTypes
            if (!ty)
                return res.status(404).json({
                    message: "Invalid move Type",
                })

            const moves = await moviesService.getOneByType(ty)
            if (moves)
                return res.json(moves)
            else MovieNotFoundError
        } catch (e) {
            return res.status(500).json({ message: e.message })
        }
    },
)

moviesRouter.post(
    "/",
    async (req, res): Promise<any> => {
        try {
            const buildRequest: Movie = req.body
            const done = await moviesService.save(buildRequest)
            if (done)
                return res.json({ status: "ok" })
            else MovieStoreError
        } catch (e) {
            return res.status(500).json({ message: e.message })
        }
    },
)



moviesRouter.delete(
    "/:id",
    async (req, res): Promise<any> => {
        try {
            const done = await moviesService.delete(req.params.id)
            if (done)
                return res.json({ status: "ok" })
            else MovieDeleteError
        } catch (e) {
            return res.status(500).json({ message: e.message })
        }
    },
)


export { moviesRouter }
