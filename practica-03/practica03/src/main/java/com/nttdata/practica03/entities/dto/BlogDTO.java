package com.nttdata.practica03.entities.dto;

import lombok.Data;
import org.antlr.v4.runtime.misc.NotNull;
import jakarta.validation.constraints.Size;

import java.util.Date;
import java.util.List;

@Data
public class BlogDTO {
    private Long id;
    @NotNull
    private String titulo;
    @Size(min = 5, max = 25)
    private String autor;
    @Size(min = 5, max = 35)
    private String excerpt;
    @NotNull
    private Date fecha;

    private int canComentario;

}



