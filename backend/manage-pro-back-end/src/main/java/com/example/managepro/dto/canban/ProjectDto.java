package com.example.managepro.dto.canban;

import jakarta.validation.constraints.NotNull;
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
    @NotNull
    private long id;
    @NotNull
    private String name;
    @NotNull
    private List<TaskStateDto> taskStates;
}
