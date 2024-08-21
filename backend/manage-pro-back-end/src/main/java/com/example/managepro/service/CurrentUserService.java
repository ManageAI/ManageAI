package com.example.managepro.service;

import com.example.managepro.dto.CurrentUserDTO;
import com.example.managepro.model.Role;
import com.example.managepro.model.User;
import com.example.managepro.model.UserDetailsImpl;
import com.example.managepro.repository.UserRepository;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.HashSet;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class CurrentUserService {
    private final UserRepository userRepository;

    public CurrentUserDTO getCurrentUserProfile() {
        if (SecurityContextHolder.getContext().getAuthentication() != null) {
            String userEmail = (String) SecurityContextHolder.getContext().getAuthentication().getPrincipal();

            if(userEmail != null) {
                Optional<User> currentUser = userRepository.findByUserEmail(userEmail);

                if (currentUser.isPresent()) {
                    return CurrentUserDTO.builder()
                            .email(currentUser.get().getUserEmail())
                            .fullName(currentUser.get().getUserName())
                            .userRoles(new HashSet<>(currentUser.get().getRoles().stream().map(role -> role.getName().toString()).collect(Collectors.toSet())))
                            .build();
                }
            }
        }
        throw new ResponseStatusException(HttpStatus.NOT_FOUND);
    }
}
