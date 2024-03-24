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
    private static final String CREATE_PROJECT = "/api/v1/projects";
    private static final String GET_PROJECT = "/api/v1/project/{id}";

    @PostMapping(CREATE_PROJECT)
    public ResponseEntity<ProjectDto> createNewProject(@RequestParam("projectName") String projectName) {
        return ResponseEntity.ok(projectService.createProject(projectName));
    }

    @GetMapping(GET_PROJECT)
    public ResponseEntity<ProjectDto> getProject(@PathVariable String id) {
        return ResponseEntity.ok(projectService.getProjectById(id));
    }

}
