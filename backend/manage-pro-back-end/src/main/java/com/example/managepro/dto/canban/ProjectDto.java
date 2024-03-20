package com.example.managepro.dto.canban;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ProjectDto {
    private long id;
    private String projectName;
    private List<TaskStateDto> taskStates;
}
