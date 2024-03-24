package com.example.managepro.service.canban;

import com.example.managepro.dto.canban.ProjectDto;
import com.example.managepro.exceptions.ProjectNotFoundException;
import com.example.managepro.model.canban.Project;
import com.example.managepro.model.canban.TaskState;
import com.example.managepro.repository.canban.ProjectRepository;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ProjectService {
    private final ProjectRepository projectRepository;
    private final TaskStateService taskStateService;
    private final ModelMapper modelMapper = new ModelMapper();

    @Transactional
    public ProjectDto createProject(String projectName) {
        Project project = new Project();
        project.setProjectName(projectName);
        project.setTaskStates(getDefaultTaskStates());

        for (TaskState taskState : project.getTaskStates()) {
            taskState.setProject(project);
        }

        Project savedProject = projectRepository.save(project);
        return modelMapper.map(savedProject, ProjectDto.class);
    }

    private List<TaskState> getDefaultTaskStates() {
        return taskStateService.creteDefaultTaskStates();
    }

    public ProjectDto getProjectById(String id) {
        Project project = projectRepository.findById(Long.parseLong(id)).orElseThrow(() ->  new ProjectNotFoundException(id));
        return modelMapper.map(project, ProjectDto.class);
    }
}
