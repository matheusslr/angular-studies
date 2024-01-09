package com.clientsapi.dto;

import jakarta.validation.constraints.NotEmpty;
import lombok.Data;

@Data
public class LoginDTO {
    @NotEmpty(message = "{field.username.required}")
    private String username;
    @NotEmpty(message = "{field.password.required}")
    private String password;
}
