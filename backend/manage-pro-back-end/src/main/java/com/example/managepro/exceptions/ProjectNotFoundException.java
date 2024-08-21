package com.example.managepro.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.server.ResponseStatusException;

public class ProjectNotFoundException extends ResponseStatusException {

    public ProjectNotFoundException(String id) {
        super(HttpStatus.NOT_FOUND, String.format("Project with id: %s not found", id));
    }


}
