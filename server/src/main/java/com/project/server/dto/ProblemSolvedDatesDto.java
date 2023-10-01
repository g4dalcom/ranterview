package com.project.server.dto;

import com.project.server.domain.Problem;
import com.project.server.repository.ProblemSolvedDate;
import lombok.Builder;

import java.util.List;

@Builder
public record ProblemSolvedDatesDto(ProblemSolvedDate dateInfo, List<Problem> problems) {
    public static ProblemSolvedDatesDto of(ProblemSolvedDate date, List<Problem> problems) {
        return ProblemSolvedDatesDto.builder()
                .dateInfo(date)
                .problems(problems)
                .build();
    }
}
