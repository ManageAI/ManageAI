package com.example.managepro.dto.canban;

import com.example.managepro.model.canban.Task;
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
public class TaskStateDto {
    @NotNull
    private long id;
    @NotNull
    private String name;
    @NotNull
    private List<String> connectedTo;
    @NotNull
    private String color;
    @NotNull
    private List<Task> tasks;
    @NotNull
    private Integer ordinal;
}
