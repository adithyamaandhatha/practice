import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieAddComponent } from './movie-add/movie-add.component';
import { MovieEditComponent } from './movie-edit/movie-edit.component';
const routes: Routes = [
 { path: '', component: MovieListComponent }, // Default path showing the list of movies
 { path: 'add', component: MovieAddComponent }, // Path to add a new movie
 { path: 'edit/:id', component: MovieEditComponent }, // Path to edit a movie by id
 { path: '**', redirectTo: '' } // Wildcard path to redirect to the list if no other path matches
];
@NgModule({
 imports: [RouterModule.forRoot(routes)], // Registers the routes with the Angular Router
 exports: [RouterModule] // Exports the RouterModule for use in the AppModule
})
export class AppRoutingModule {}