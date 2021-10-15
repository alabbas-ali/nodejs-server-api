const defaultMongoHost = "localhost:27017"

export const mongo = {
    User: process.env.MONGODB_USER || "root",
    Password: process.env.MONGODB_PASSWORD || "root",
    Hosts: process.env.MONGODB_HOSTS || "localhost:27017",
    ReplicaSet: process.env.MONGODB_REPLICA_SET || "test",
    DbName: process.env.MONGODB_DB || "movies",
}

export const mongoParams =
    mongo.Hosts !== defaultMongoHost
        ? `?ssl=true&replicaSet=${mongo.ReplicaSet}`
        : ""

export const dbHost = `mongodb://${mongo.User}:${mongo.Password}@${mongo.Hosts}/${mongo.DbName}${mongoParams}`