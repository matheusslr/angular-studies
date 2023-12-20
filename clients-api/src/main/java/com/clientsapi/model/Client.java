package com.clientsapi.model;

import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.validator.constraints.br.CPF;

import java.time.LocalDate;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Client {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotEmpty(message = "{field.name.required}")
    @Column(nullable = false, length = 150)
    private String name;

    @CPF(message = "{field.cpf.invalid}")
    @NotNull(message = "{field.cpf.required}")
    @Column(nullable = false, length = 11)
    private String cpf;

    @JsonFormat(pattern = "dd/MM/yyyy")
    @Column(name = "registration_date", updatable = false)
    private LocalDate registrationDate;
}
