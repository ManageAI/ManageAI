package com.example.managepro.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

import java.util.Set;

@Data
@AllArgsConstructor
@Builder
public class CurrentUserDTO {
    private String fullName;
    private String email;
    private Set<String> userRoles;
}
