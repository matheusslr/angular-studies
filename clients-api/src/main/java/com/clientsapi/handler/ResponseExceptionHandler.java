package com.clientsapi.handler;

import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.context.support.DefaultMessageSourceResolvable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.context.request.WebRequest;

import com.clientsapi.exception.BadRequestException;
import com.clientsapi.exception.ExceptionResponse;
import com.clientsapi.exception.ResourceNotFound;

@RestControllerAdvice
public class ResponseExceptionHandler {
    @ExceptionHandler(Exception.class)
    public final ResponseEntity<ExceptionResponse> handleAllExceptions(Exception ex, WebRequest request) {
        return new ResponseEntity<>(
                ExceptionResponse.builder()
                        .timestamp(new Date())
                        .message(ex.getMessage())
                        .details(request.getDescription(false))
                        .build(),
                HttpStatus.INTERNAL_SERVER_ERROR);
    }

    @ExceptionHandler(BadRequestException.class)
    public final ResponseEntity<ExceptionResponse> badRequestHandler(Exception ex, WebRequest request) {
        return new ResponseEntity<>(
                ExceptionResponse.builder()
                        .message(ex.getMessage())
                        .timestamp(new Date())
                        .details(request.getDescription(false))
                        .build(),
                HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler(ResourceNotFound.class)
    public final ResponseEntity<ExceptionResponse> resourceNotFoundHandler(Exception ex, WebRequest request) {
        return new ResponseEntity<>(
                ExceptionResponse.builder()
                        .message(ex.getMessage())
                        .timestamp(new Date())
                        .details(request.getDescription(false))
                        .build(),
                HttpStatus.NOT_FOUND);
    }

    @ExceptionHandler(MethodArgumentNotValidException.class)
    public final ResponseEntity<ExceptionResponse> invalidMethodArg(MethodArgumentNotValidException ex,
            WebRequest request) {
        BindingResult bindingResult = ex.getBindingResult();

        List<String> errorDetails = bindingResult.getAllErrors().stream()
                .map(DefaultMessageSourceResolvable::getDefaultMessage)
                .collect(Collectors.toList());

        ExceptionResponse exceptionResponse = ExceptionResponse.builder()
                .timestamp(new Date())
                .message(ex.getMessage())
                .details(request.getDescription(false))
                .errors(errorDetails)
                .build();

        return new ResponseEntity<>(exceptionResponse, HttpStatus.BAD_REQUEST);
    }
}
