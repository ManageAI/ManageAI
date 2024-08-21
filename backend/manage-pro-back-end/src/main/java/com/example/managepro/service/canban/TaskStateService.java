package com.example.managepro.service.canban;

import com.example.managepro.dto.canban.TaskStateDto;
import com.example.managepro.model.canban.DefaultTaskStateColor;
import com.example.managepro.model.canban.TaskState;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class TaskStateService {
    private static final String TODO = "To Do";
    private static final String WORK_IN_PROGRESS = "Work in progress";
    private static final String DONE = "Done";


    public List<TaskState> creteDefaultTaskStateList() {
        TaskState todo = createDefaultToDoTaskState();
        TaskState workInProgress = createDeaultWorkInProgressTaskState();
        TaskState done = createDefaultDoneTaskState();

        ArrayList<TaskState> defaultTaskStates = new ArrayList<>();
        defaultTaskStates.add(todo);
        defaultTaskStates.add(workInProgress);
        defaultTaskStates.add(done);

        return defaultTaskStates;
    }

    private static TaskState createDefaultDoneTaskState() {
        TaskState done = new TaskState();
        done.setName(DONE);
        done.setColor(DefaultTaskStateColor.GREEN.getHexValue());
        done.setOrdinal(3);
        return done;
    }

    private static TaskState createDeaultWorkInProgressTaskState() {
        TaskState workInProgress = new TaskState();
        workInProgress.setName(WORK_IN_PROGRESS);
        workInProgress.setColor(DefaultTaskStateColor.ORANGE.getHexValue());
        workInProgress.setOrdinal(2);
        return workInProgress;
    }

    private static TaskState createDefaultToDoTaskState() {
        TaskState todo = new TaskState();
        todo.setName(TODO);
        todo.setColor(DefaultTaskStateColor.RED.getHexValue());
        todo.setOrdinal(1);
        return todo;
    }

    public void setProperConnectedTo(List<TaskStateDto> taskStates) {
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


//    public TaskState createTaskState(Long projectId, TaskState taskState) {
//
//    }
//
//    public TaskState getTaskStateById(Long id) {
//    }
//
//    public TaskState updateTaskState(Long id, TaskState taskState) {
//    }
//
//    public void deleteTaskState(Long id) {
//    }
}
