package com.example.managepro.controller;

import com.example.managepro.service.CurrentUserService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

@RestController
@RequestMapping("/currentUser")
@AllArgsConstructor
public class CurrentUserController {
    private final CurrentUserService currentUserService;

    @GetMapping("/profile")
    public ResponseEntity<?> getCurrentUser () {
        try {
            return ResponseEntity.ok().body(currentUserService.getCurrentUserProfile());
        } catch (ResponseStatusException e) {
            return ResponseEntity.badRequest().body("User not found");
        }
    }
}
