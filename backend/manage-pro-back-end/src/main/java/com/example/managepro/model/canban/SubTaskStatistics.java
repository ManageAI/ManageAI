package com.example.managepro.model.canban;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "sub_task_statistics")
public class SubTaskStatistics {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", updatable = false, nullable = false)
    private long id;

    @Column(name = "total_elements")
    private Integer totalElements;

    @Column(name = "total_done")
    private Integer totalDone;

    @OneToOne(mappedBy = "subTaskStatistics")
    private Task task;

}
