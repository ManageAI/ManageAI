package com.example.managepro.model.canban;

import com.example.managepro.enums.TaskLabelColors;
import jakarta.persistence.Embeddable;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Embeddable
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class TaskLabel {
    private String name;
    private TaskLabelColors taskLabelColors;
}
