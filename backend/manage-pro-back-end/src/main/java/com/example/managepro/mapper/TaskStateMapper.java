package com.example.managepro.mapper;

import com.example.managepro.dto.canban.TaskStateDto;
import com.example.managepro.model.canban.TaskState;
import org.modelmapper.ModelMapper;
import org.modelmapper.PropertyMap;
import org.springframework.stereotype.Component;

@Component
public class TaskStateMapper {

    private final ModelMapper modelMapper;

    public TaskStateMapper() {
        this.modelMapper = new ModelMapper();
        this.modelMapper.addMappings(taskStateMap());
    }

    private PropertyMap<TaskState, TaskStateDto> taskStateMap() {
        return new PropertyMap<>() {
            @Override
            protected void configure() {
                map().setId(source.getId());
                map().setName(source.getName());
                map().setColor(source.getColor());
                map().setOrdinal(source.getOrdinal());
                map().setTasks(source.getTaskIds());
            }
        };
    }

    public TaskStateDto mapToDto(TaskState taskState) {
        return modelMapper.map(taskState, TaskStateDto.class);
    }
}
