package com.project.server.dto;

import java.time.LocalDate;
import java.time.LocalDateTime;

public record ProblemSolvedDto(Long id, boolean isSolved, LocalDate completionDate) {
    public static ProblemSolvedDto of(Long id, boolean isSolved, LocalDate completionDate) {
        return new ProblemSolvedDto(id, isSolved, completionDate);
    }
}
