package com.example.managepro.model.canban;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "task_state")
public class TaskState {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", updatable = false, nullable = false)
    private long id;

    @Column(name = "name")
    private String taskStateName;

    @OneToMany(mappedBy = "taskState", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Task> taskIds;

    @ManyToOne
    @JoinColumn(name = "project_id")
    private Project project;

}
