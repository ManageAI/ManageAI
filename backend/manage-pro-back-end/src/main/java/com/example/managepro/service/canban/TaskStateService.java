package com.example.managepro.service.canban;

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


    public List<TaskState> creteDefaultTaskStates() {
        TaskState todo = new TaskState();
        todo.setTaskStateName(TODO);

        TaskState workInProgress = new TaskState();
        workInProgress.setTaskStateName(WORK_IN_PROGRESS);

        TaskState done = new TaskState();
        done.setTaskStateName(DONE);

        ArrayList<TaskState> defaultTaskStates = new ArrayList<>();
        defaultTaskStates.add(todo);
        defaultTaskStates.add(workInProgress);
        defaultTaskStates.add(done);

        return defaultTaskStates;
    }
}
