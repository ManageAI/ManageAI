package com.example.managepro.service.canban;

import com.example.managepro.dto.canban.ProjectDto;
import com.example.managepro.dto.canban.TaskStateDto;
import com.example.managepro.exceptions.ProjectNotFoundException;
import com.example.managepro.mapper.TaskStateMapper;
import com.example.managepro.model.canban.Project;
import com.example.managepro.model.canban.TaskState;
import com.example.managepro.repository.canban.ProjectRepository;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class ProjectService {
    private final ProjectRepository projectRepository;
    private final TaskStateService taskStateService;
    private final TaskStateMapper taskStateMapper;
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
        return mapProjectToProjectDto(savedProject);
    }

    private List<TaskState> getDefaultTaskStates() {
        return taskStateService.creteDefaultTaskStateList();
    }

    public ProjectDto getProjectById(String id) {
        Project project = projectRepository.findById(Long.parseLong(id)).orElseThrow(() -> new ProjectNotFoundException(id));
        return mapProjectToProjectDto(project);
    }

    private ProjectDto mapProjectToProjectDto(Project project) {
        ProjectDto projectDto = modelMapper.map(project, ProjectDto.class);
        List<TaskStateDto> taskStateDtos = project.getTaskStates().stream()
                .map(taskStateMapper::mapToDto)
                .toList();
        setProperConnectedTo(taskStateDtos);
        projectDto.setTaskStates(taskStateDtos);
        return projectDto;
    }

    private void setProperConnectedTo(List<TaskStateDto> taskStates) {
        for (TaskStateDto taskStateDto : taskStates) {
            List<String> connectedTo = new ArrayList<>();
            for (TaskStateDto taskStateDtoinner : taskStates) {
                if (!taskStateDto.getName().equals(taskStateDtoinner.getName())) {
                    connectedTo.add(taskStateDtoinner.getName());
                }
            }
            taskStateDto.setConnectedTo(connectedTo);
        }
    }

}
