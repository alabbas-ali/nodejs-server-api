
import express from "express"
import bodyParser from "body-parser"
import cors from "cors"
import { mainRouter } from "./routes"
import { log } from "./tools/log"
import { allowedCorsDomains, port } from "./configs/urls"

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(
    cors({
        origin: (origin, callback): void => {
            if (
                origin === undefined ||
                allowedCorsDomains.indexOf(origin) !== -1
            )
                callback(null, true)
            else
                callback(
                    new Error("This domain is not allowed to make requests"),
                )
        },
        allowedHeaders: ["Access-Control-Allow-Credentials", "Content-Type"],
        credentials: true,
    }),
)

app.use("/", mainRouter)


const main = async (): Promise<void> => {

    app.listen(
        port,
        (): void => {
            log.info(`Server started at http://localhost:${port}`)
        },
    )
}

main()
