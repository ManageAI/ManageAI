package com.example.managepro.service;

import com.example.managepro.model.Role;
import com.example.managepro.repository.RoleRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class RoleService {
    private final RoleRepository roleRepository;

    public Role getUserRole(){
        return roleRepository.findByName("ROLE_USER").get(); //TODO check is role exist or not
    }
}
