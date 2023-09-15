package com.project.server.dto;

import java.time.LocalDateTime;

public record ProblemSolvedDto(Long id, boolean isSolved, LocalDateTime completionDate) {
    public static ProblemSolvedDto of(Long id, boolean isSolved, LocalDateTime completionDate) {
        return new ProblemSolvedDto(id, isSolved, completionDate);
    }
}
