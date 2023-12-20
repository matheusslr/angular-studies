package com.clientsapi.exception;

import lombok.Builder;
import lombok.Data;

import java.util.Date;
import java.util.List;

@Data
@Builder
public class ExceptionResponse {
    private Date timestamp;
    private String message;
    private String details;
    private List<String> errors;
}
