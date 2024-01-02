package com.clientsapi.controller.v1.security;

import com.clientsapi.dto.LoginDTO;
import com.clientsapi.dto.RegisterDTO;
import com.clientsapi.dto.TokenDTO;
import com.clientsapi.model.User;
import com.clientsapi.service.v1.security.AuthService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/auth")
public class AuthController {
    @Autowired
    private AuthService authService;

    @PostMapping("/login")
    public ResponseEntity<TokenDTO> login(@RequestBody @Valid LoginDTO loginDTO) {
        return ResponseEntity.ok(authService.login(loginDTO));
    }

    @PostMapping("/register")
    public ResponseEntity<User> register(@RequestBody @Valid RegisterDTO dto){
        return new ResponseEntity<>(authService.register(dto), HttpStatus.CREATED);
    }
}
