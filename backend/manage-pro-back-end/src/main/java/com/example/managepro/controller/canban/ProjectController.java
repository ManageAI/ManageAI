package com.example.managepro.controller.canban;

import com.example.managepro.dto.canban.ProjectDto;
import com.example.managepro.service.canban.ProjectService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
public class ProjectController {
    private final ProjectService projectService;
    private static final String CREATE_PROJECT = "/api/projects";

    @PostMapping(CREATE_PROJECT)
    public ResponseEntity<ProjectDto> createNewProject(@RequestParam("projectName") String projectName) {
        return ResponseEntity.ok(projectService.createProject(projectName));
    }

}
