package com.example.managepro.controller;

import com.example.managepro.model.User;
import com.example.managepro.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@RestController
@RequiredArgsConstructor
@RequestMapping("/user")
public class UserController {
    private final UserService userService;

    @GetMapping("{userId}")
    public ResponseEntity<User> getUserById(@PathVariable("userId") long userId) {
        return ResponseEntity.ok(userService.getUserById(userId));
    }

//    @PatchMapping("/{id}")
//    public ResponseEntity<User> updateUser(@PathVariable UUID id, @RequestBody UserUpdateDTO dto) {
//        User updatedUser = userService.updateUser(id, dto);
//        return ResponseEntity.ok(updatedUser);
//    }

//    @DeleteMapping(value = "/{email}")
//    @PreAuthorize("hasRole('ROLE_ADMIN')")
//    public ResponseEntity<String> delete(@PathVariable String email) {
//        userService.delete(email);
//        return ResponseEntity.ok("Delete user with email: " + email);
//    }
}
