package com.nttdata.practica03.entities.dto;


import jakarta.validation.constraints.Size;
import lombok.Data;
import org.antlr.v4.runtime.misc.NotNull;

import java.util.Date;


@Data
public class ComentarioDTO {
    private Long id;

    @Size(min = 5, max = 25)
    private String autor;
    @Size(min = 5, max = 35)
    private String contenido;
    @NotNull
    private Date fecha;


}
