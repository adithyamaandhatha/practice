import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MovieService } from '../movie.service';
import { Router } from '@angular/router';
@Component({
 selector: 'app-movie-add',
 templateUrl: './movie-add.component.html',
 styleUrls: ['./movie-add.component.css']
})
export class MovieAddComponent {
 movieForm: any;
 movies:any= [];
 movieId:any;
 constructor(
 private fb: FormBuilder,
 private movieService: MovieService,
 private router: Router
 ) {
 this.movieForm = this.fb.group({
 title: ['', Validators.required],
 director: ['', Validators.required],
 year: [null, [Validators.required, Validators.min(1900), Validators.max(new 
Date().getFullYear())]]
 });
 }
 addMovie(): void {
 if (this.movieForm.valid) {
 this.movieService.getMovies().subscribe((res)=> {
    this.movies = res;
    console.log(this.movies);
 this.movieId = +this.movies[this.movies.length-1].id+1;
 let strId = this.movieId+''
//  console.log(this.movieId);
// this.movieId =
 this.movieService.createMovie({...this.movieForm.value,id:strId}).subscribe(() => {
 this.router.navigate(['/']);
 });
    
 });
 
 }
 }
}