package com.example.managepro.service;

import com.example.managepro.exceptions.AppError;
import com.example.managepro.dto.JwtRequest;
import com.example.managepro.dto.JwtResponse;
import com.example.managepro.dto.RegistrationUserDto;
import com.example.managepro.dto.UserDto;
import com.example.managepro.exceptions.UserAlreadyExistsException;
import com.example.managepro.exceptions.UserNotFoundException;
import com.example.managepro.model.Role;
import com.example.managepro.model.User;
import com.example.managepro.utils.JwtTokenUtils;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.context.annotation.Lazy;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.server.ResponseStatusException;

import java.util.HashSet;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor(onConstructor = @__(@Lazy))
public class AuthService {
    private final UserService userService;
    private final JwtTokenUtils jwtTokenUtils;
    private final AuthenticationManager authenticationManager;


    public JwtResponse createAuthToken(@RequestBody JwtRequest authRequest) {
        try{
            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(authRequest.getEmail(), authRequest.getPassword()));
        } catch (BadCredentialsException e){
            throw new ResponseStatusException(HttpStatus.UNAUTHORIZED, "Bad credentials");
        }

        User user = userService.findByUSerEmail(authRequest.getEmail()).orElseThrow(UserNotFoundException::new);
        UserDetails userDetails = userService.loadUserByUsername(authRequest.getEmail());
        String token = jwtTokenUtils.generateToken(userDetails);

        return JwtResponse.builder()
                .id(user.getId())
                .token(token)
                .email(user.getUserEmail())
                .fullName(user.getUserName())
                .userRoles(new HashSet<>(user.getRoles().stream().map(Role::getName).collect(Collectors.toSet())))
                .build();
    }


    @Transactional
    public JwtResponse signup(RegistrationUserDto registrationUserDto) {
        if (userService.findByUSerEmail(registrationUserDto.getEmail()).isPresent()) {
            throw new UserAlreadyExistsException();
        }
        User user = userService.createNewUser(registrationUserDto);
        UserDetails userDetails = userService.loadUserByUsername(user.getUserEmail());
        String token = jwtTokenUtils.generateToken(userDetails);

        return JwtResponse.builder()
                .id(user.getId())
                .email(user.getUserEmail())
                .fullName(user.getUserName())
                .userRoles(new HashSet<>(user.getRoles().stream().map(Role::getName).collect(Collectors.toSet())))
                .token(token)
                .build();

    }
}
