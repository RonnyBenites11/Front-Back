import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Blog } from 'src/app/modelos/blog.model';
import { BlogService } from '../service/blog.service';
import { BlogForm } from 'src/app/modelos/blog-form.model';
import { getLocaleDateTimeFormat } from '@angular/common';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  blogs: Blog[] = [];
  blogForm!: FormGroup;

  constructor(
    private blogService: BlogService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.loadBlogs();
    this.initializeForm();
  }

  loadBlogs(): void {
    this.blogService.obtenerBlogs()
      .subscribe((blogs: Blog[]) => {
        this.blogs = blogs;
      });
  }

  initializeForm(): void {
    this.blogForm = this.formBuilder.group({
      titulo: ['', Validators.required],
      autor: ['', Validators.required],
      excerpt: ['', Validators.required],
      fecha: ['', Validators.required],
      canComentario: ['', Validators.required]
    });
  }

  crearBlog(): void {
    if (this.blogForm.valid) {
      const blogData = this.blogForm.value;
      this.blogService.crearBlog(blogData)
        .subscribe(
          (response: any) => {
            console.log('Blog creado:', response);
            this.loadBlogs();
            this.blogForm.reset();
          },
          (error: any) => {
            console.error('Error al crear el blog:', error);
          }
        );
    }
  }

  eliminarBlog(id: number): void {
    this.blogService.eliminarBlog(id)
      .subscribe(
        (response: any) => {
          console.log('Blog eliminado:', response);
          this.loadBlogs(); 
        },
        (error: any) => {
          console.error('Error al eliminar el blog:', error);
        }
      );
  }
}
