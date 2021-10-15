import { Movie, MovieTypes } from "./move"
import { movies } from './testmovesdata'

export class MovieNotFoundError extends Error {}
export class MovieInvalidError extends Error {}
export class MovieExistsError extends Error {}
export class MovieStoreError extends Error {}
export class MovieDeleteError extends Error {}
export class MovieUpdateError extends Error {}
export class RequestError extends Error {}

export class MoviesService { 

    constructor() {}

    getAll(): Array<Movie> {
        return movies
    }

    getOneByID(id: string): Movie {
        return movies.filter(it=> it.id === id)[0]
    }

    getOneByType(type: MovieTypes): Array<Movie> {
        return movies.filter(it => it.type === type)
    }

    // TODO(Alabbas): store the move in the database if you want 
    save(movie: Movie): boolean  {
        return true
    }

    // TODO(Alabbas): delete the move in the database if you want 
    delete(id: string): boolean {
        return true
    }
}