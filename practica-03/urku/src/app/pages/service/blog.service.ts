import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Blog } from '../../modelos/blog.model';
import { BlogForm } from '../../modelos/blog-form.model';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private apiUrl = 'http://localhost:8080/api/v1/blog';

  constructor(private http: HttpClient) { }

  obtenerBlogs(): Observable<Blog[]> {
    return this.http.get<Blog[]>(this.apiUrl);
  }

  crearBlog(blogData: BlogForm): Observable<any> {
    return this.http.post<any>(this.apiUrl, blogData);
  }

  actualizarBlog(blogData: Blog): Observable<any> {
    return this.http.put<any>(this.apiUrl, blogData);
  }

  eliminarBlog(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<any>(url);
  }
}
