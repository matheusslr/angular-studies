package com.clientsapi.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.time.LocalDate;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class WorkProvidedDTO {
    private String description;
    private Long idClient;
    private BigDecimal price;
    @JsonFormat(pattern = "dd/MM/yyyy")
    private LocalDate date;
}
