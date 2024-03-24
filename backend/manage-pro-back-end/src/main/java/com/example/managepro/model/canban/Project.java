package com.example.managepro.model.canban;

import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Table(name = "project")
public class Project {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", updatable = false, nullable = false)
    private long id;

    @Column(name = "project_name")
    private String projectName;

    @OneToMany(mappedBy = "project", cascade = CascadeType.ALL, orphanRemoval = true )
    private List<TaskState> taskStates;

    @OneToOne(cascade = CascadeType.REMOVE)
    @JoinColumn(name = "team_id", referencedColumnName = "id")
    private Team team;

    //TODO project statistics to DTO
    //TODO add selected project boolean field
}
