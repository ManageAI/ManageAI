package com.example.managepro.dto;

import lombok.*;

import java.util.Set;


@AllArgsConstructor
@Getter
@Setter
@Builder
public class JwtResponse {

    private long id;
    private String email;
    private String fullName;
    Set<String> userRoles;
    private String token;
}
