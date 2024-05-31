package com.nttdata.practica03.controller;

import com.nttdata.practica03.entities.BlogEntities;
import com.nttdata.practica03.entities.dto.BlogDTO;
import com.nttdata.practica03.services.BlogService;
import jakarta.validation.ConstraintViolation;
import jakarta.validation.Validation;
import jakarta.validation.Validator;
import jakarta.validation.ValidatorFactory;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;
@CrossOrigin ("http://localhost:4200/")
@RestController
@RequestMapping("/api/v1/blog")
@RequiredArgsConstructor
public class BlogController {
    private final BlogService blogService;

    @PostMapping
    public ResponseEntity<?> postRegistrarEmpresa(
            @RequestBody BlogDTO blogDTO
    ) {
        ValidatorFactory validatorFactory = Validation.buildDefaultValidatorFactory();
        Validator validator = validatorFactory.getValidator();
        Set<ConstraintViolation<BlogDTO>> validate = validator.validate(blogDTO);

        if (validate.size() > 0) {
            List<String> errorMensajes = new ArrayList<>();
            validate.forEach(val -> {
                errorMensajes.add(val.getMessage());
            });
            return ResponseEntity.badRequest().body(errorMensajes);
        }

        blogService.registrarNuevoBlog(blogDTO);
        return new ResponseEntity<>("Blog fue registrado", HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<?> getListaBlogs(

    ) {
        return ResponseEntity.ok(blogService.obtenerListaBlogs());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteBlogPorID(@PathVariable Long id) {
        blogService.eliminarBlog(id);
        return ResponseEntity.ok("Eliminado");

    }

    @PutMapping
    public ResponseEntity<?> putActualizarBlog(
            @RequestBody BlogEntities blog
    ) {
        blogService.actualñizarBlog(blog);
        return ResponseEntity.ok("Actualizado");
    }
}
