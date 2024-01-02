package com.clientsapi.service.v1.security;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.interfaces.DecodedJWT;
import com.clientsapi.dto.TokenDTO;
import com.clientsapi.model.Role;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import java.util.Date;

@Service
public class JwtTokenService {
    @Value("${jwt.auth.secret-key}")
    private String SECRET_KEY;
    @Value("${jwt.auth.expiration-time}")
    private Long EXPIRATION_TIME;
    @Autowired
    private UserService userService;

    public TokenDTO createTokenDTO(String username, Role role) {
        Date now = new Date();
        Date validityTime = new Date(now.getTime() + EXPIRATION_TIME);
        String accessToken = getAccessToken(username, role, now, validityTime);

        return TokenDTO.builder()
                .username(username)
                .role(role)
                .createAt(now)
                .expiresAt(validityTime)
                .accessToken(accessToken)
                .build();
    }

    public String getAccessToken(String username, Role role, Date now, Date validityTime) {
        return JWT.create()
                .withSubject(username)
                .withClaim("role", role.getAuthority())
                .withIssuedAt(now)
                .withExpiresAt(validityTime)
                .sign(Algorithm.HMAC256(SECRET_KEY));
    }

    public String formatToken(String token){
        if(token != null && token.startsWith("Bearer ")){
            return token.substring("Bearer ".length());
        }
        return null;
    }

    public boolean validateToken(String token) {
        DecodedJWT decodedJWT = JWT.decode(token);
        Date time = decodedJWT.getExpiresAt();
        return !new Date().after(time);
    }

    public Authentication getAuthentication(String token) {
        DecodedJWT decodedJWT = JWT.decode(token);
        UserDetails user = userService.loadUserByUsername(decodedJWT.getSubject());
        return new UsernamePasswordAuthenticationToken(user, "", user.getAuthorities());
    }
}
