import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
interface Movie {
 id: number;
 title: string;
 director: string;
 year: number;
}
@Injectable({
 providedIn: 'root'
})
export class MovieService {
 private apiUrl = 'http://localhost:3000/movies'; //OR We can have it from Environment
 constructor(private http: HttpClient) {}
 // Get all movies
 getMovies(): Observable<Movie[]> {
 return this.http.get<Movie[]>(this.apiUrl);
 }
 // Get a single movie by ID
 getMovie(id: number): Observable<Movie> {
 return this.http.get<Movie>(`${this.apiUrl}/${id}`);
 }
 // Create a new movie
 createMovie(movie: Movie): Observable<Movie> {
 return this.http.post<Movie>(this.apiUrl, movie);
 }
 // Update an existing movie
 updateMovie(movie: Movie): Observable<Movie> {
 return this.http.put<Movie>(`${this.apiUrl}/${movie.id}`, movie);
 }
 // Delete a movie
 deleteMovie(id: number): Observable<void> {
 return this.http.delete<void>(`${this.apiUrl}/${id}`);
 }
}
