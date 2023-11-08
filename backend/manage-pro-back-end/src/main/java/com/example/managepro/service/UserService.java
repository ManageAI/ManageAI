package com.example.managepro.service;

import com.example.managepro.dto.RegistrationUserDto;
import com.example.managepro.exceptions.UserNotFoundException;
import com.example.managepro.model.User;
import com.example.managepro.model.UserDetailsImpl;
import com.example.managepro.repository.UserRepository;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;

import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class UserService implements UserDetailsService {
    private final UserRepository userRepository;
    private final RoleService roleService;
    private final PasswordEncoder passwordEncoder;

    public Optional<User> findByUSerEmail(String userEmail) {
        return userRepository.findByUserEmail(userEmail);
    }

    @Override
    @Transactional
    public UserDetails loadUserByUsername(String userEmail) throws UsernameNotFoundException {
        User user = findByUSerEmail(userEmail).orElseThrow(() -> new UsernameNotFoundException(String.format("User '%s' not found", userEmail)));
        return UserDetailsImpl.build(user);
    }

    public User createNewUser(RegistrationUserDto registrationUserDto) {
        User user = new User();
        user.setUserName(registrationUserDto.getFullName());
        user.setUserEmail(registrationUserDto.getEmail());
        user.setUserPassword(passwordEncoder.encode(registrationUserDto.getPassword()));
        user.setRoles(List.of(roleService.getUserRole()));
        return userRepository.save(user);
    }

    public User getUserById(long userId) {
        return userRepository.findById(userId).orElseThrow(UserNotFoundException::new);
    }
}
