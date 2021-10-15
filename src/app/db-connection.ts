import { MongoClient, Db } from "mongodb"
import { log } from "../tools/log"
import { dbHost, mongo } from "../configs/db.config"

export class DbConnection {

    private db: Db

    private client

    constructor() {
        log.info(`(DbConnection) This is a new DbConnection class has been created . `)
        this.client = new MongoClient(dbHost, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
    }

    getConnection(): Promise<Db> {
        return new Promise((resolve, reject): void => {
            if (this.db !== undefined) resolve(this.db)
    
            this.client.connect(
                (error): void => {
                    if (error) {
                        log.error(
                            `Connecting to database failed (dbHost: ${dbHost})`,
                        )
    
                        reject(error)
                        return
                    }
    
                    log.verbose(`Connected successfully to database: ${dbHost}`)
                    this.db = this.client.db(mongo.DbName)
    
                    resolve(this.db)
                },
            )
        })
    }
}
 
