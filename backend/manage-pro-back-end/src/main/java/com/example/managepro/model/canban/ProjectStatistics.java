package com.example.managepro.model.canban;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.HashMap;
import java.util.Map;

@AllArgsConstructor
@Getter
@Setter
@NoArgsConstructor
public class ProjectStatistics {
    private long totalTaskCount;
    private long totalDoneTaskCount;
    private StateStatistic stateStatistic;


    @NoArgsConstructor
    @AllArgsConstructor
    @Getter
    @Setter
    private static class StateStatistic {
       Map<String, Integer> statisticForEachTaskState = new HashMap<>();
    }
}
