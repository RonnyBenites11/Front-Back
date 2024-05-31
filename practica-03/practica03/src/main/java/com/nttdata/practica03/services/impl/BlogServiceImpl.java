package com.nttdata.practica03.services.impl;

import com.nttdata.practica03.entities.BlogEntities;
import com.nttdata.practica03.entities.dto.BlogDTO;
import com.nttdata.practica03.repository.BlogRepository;
import com.nttdata.practica03.services.BlogService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
@RequiredArgsConstructor

public class BlogServiceImpl implements BlogService {
    private final BlogRepository blogRepository;


    @Override
    public List<BlogEntities> obtenerListaBlogs() {
        return blogRepository.findAll();
    }

    @Override
    public void registrarNuevoBlog(BlogDTO blog) {
        BlogEntities blogNuevo = BlogEntities.builder()
                .titulo(blog.getTitulo())
                .autor(blog.getAutor())
                .excerpt(blog.getExcerpt())
                .fecha(blog.getFecha())
                .canComentario(blog.getCanComentario())


                .build();

        blogRepository.save(blogNuevo);
    }

    @Override
    public void eliminarBlog(Long id) {
        blogRepository.deleteById(id);
    }

    @Override
    public BlogEntities actualñizarBlog(BlogEntities blog) {
        BlogEntities blogUpdated = blogRepository.save(blog);
        return blogUpdated;
    }
}
