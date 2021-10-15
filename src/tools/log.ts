import winston from "winston"
import { loglevel } from "../configs/urls"

export const log = winston.createLogger({
    level: loglevel,
    transports: [new winston.transports.Console()],
    format: winston.format.combine(
        winston.format.colorize(),
        winston.format.timestamp(),
        winston.format.printf(
            (info): string => {
                return `${info.timestamp} ${info.level}: ${info.message}`
            },
        ),
    ),
})
