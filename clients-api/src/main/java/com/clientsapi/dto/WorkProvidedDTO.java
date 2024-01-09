package com.clientsapi.dto;

import java.math.BigDecimal;
import java.time.LocalDate;

import com.fasterxml.jackson.annotation.JsonFormat;

import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class WorkProvidedDTO {
    @NotEmpty(message = "{field.description.required}")
    private String description;
    @NotNull(message = "{field.client.required}")
    private Long idClient;
    @NotNull(message = "{field.price.required}")
    private BigDecimal price;
    @NotNull(message = "{field.date.required}")
    @JsonFormat(pattern = "dd/MM/yyyy")
    private LocalDate date;
}
