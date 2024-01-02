package com.clientsapi.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotEmpty;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class RegisterDTO {
    @NotEmpty(message = "${field.username.required}")
    private String username;
    @NotEmpty(message = "${field.email.required}")
    @Email(message = "${field.email.invalid}")
    private String email;
    @NotEmpty(message = "${field.password.required}")
    private String password;
    @NotEmpty(message = "${field.confirm-password.required}")
    private String confirmPassword;
}
