package com.project.server.dto;

import java.time.LocalDate;

public record ProblemSolvedDto(Long id, boolean isSolved, LocalDate completionDate) {
    public static ProblemSolvedDto of(Long id, boolean isSolved, LocalDate completionDate) {
        return new ProblemSolvedDto(id, isSolved, completionDate);
    }
}
