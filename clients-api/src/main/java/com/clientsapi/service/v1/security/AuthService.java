package com.clientsapi.service.v1.security;

import com.clientsapi.dto.LoginDTO;
import com.clientsapi.dto.RegisterDTO;
import com.clientsapi.dto.TokenDTO;
import com.clientsapi.enums.RoleEnum;
import com.clientsapi.exception.BadRequestException;
import com.clientsapi.model.Role;
import com.clientsapi.model.User;
import com.clientsapi.repository.RoleRepository;
import com.clientsapi.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AuthService {
    @Autowired
    private AuthenticationManager authenticationManager;
    @Autowired
    private JwtTokenService jwtTokenService;
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private RoleRepository roleRepository;

    public TokenDTO login(LoginDTO dto) {
        if (dto == null)
            throw new BadRequestException("Params cannot be null");

        this.authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(dto.getUsername(), dto.getPassword())
        );

        User user = userRepository.findByUsername(dto.getUsername());

        return jwtTokenService.createTokenDTO(user.getUsername(), user.getRole());
    }

    public User register(RegisterDTO dto) {
        if (!dto.getPassword().equals(dto.getConfirmPassword()))
            throw new BadRequestException("Password and Confirm Password fields must be the same");

        User user = userRepository.findByUsername(dto.getUsername());

        if (user != null)
            throw new BadRequestException("Username already taken!");

        Role role = roleRepository.findByDescription(RoleEnum.ROLE_USER);

        User userToPersist = User.builder()
                .username(dto.getUsername())
                .password(new BCryptPasswordEncoder().encode(dto.getPassword()))
                .email(dto.getEmail())
                .role(role)
                .isEnabled(true)
                .isAccountNonExpired(true)
                .isAccountNonLocked(true)
                .isCredentialsNonExpired(true)
                .build();

        return userRepository.save(userToPersist);
    }
}
