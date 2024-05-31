package com.nttdata.practica03.services;

import com.nttdata.practica03.entities.BlogEntities;
import com.nttdata.practica03.entities.dto.BlogDTO;

import java.util.List;

public interface BlogService {
    List<BlogEntities> obtenerListaBlogs();
    void registrarNuevoBlog(BlogDTO blog);
    void eliminarBlog (Long id);
    BlogEntities actualñizarBlog(BlogEntities blog);
}
