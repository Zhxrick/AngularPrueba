import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Post } from '../models/post.model';
import { appsettings } from '../settings/appsettins';


@Injectable({
  providedIn: 'root',
})
export class PostService {
  private apiUrl = appsettings.apiUrl;

  constructor(private http: HttpClient) {}

  
  getListadoPost(): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.apiUrl}GetListadoPost`).pipe(
      catchError((error) => {
        console.error('Error al obtener los posts:', error);
        return of([]); 
      })
    );
  }


  createPost(post: Post): Observable<Post> {
    return this.http.post<Post>(`${this.apiUrl}CreatePost`, post).pipe(
      catchError((error) => {
        console.error('Error al crear el post:', error);
        return of({} as Post); 
      })
    );
  }

  updatePost(post: Post): Observable<string> { 
    return this.http.put(`${this.apiUrl}UpdatePost`, post, { responseType: 'text' }).pipe( 
      catchError((error) => {
        console.error('Error al actualizar el post:', error);
        return of('Error en la actualización');
      })
    );
  }
  
  deletePost(postId: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}DeletePost?PostId=${postId}`).pipe(
      catchError((error) => {
        console.error('Error al eliminar el post:', error);
        return of({ success: false, message: 'Error al eliminar el post.' });
      })
    );
  }


  
}
