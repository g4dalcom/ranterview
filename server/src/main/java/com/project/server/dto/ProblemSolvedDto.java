package com.project.server.dto;

public record ProblemSolvedDto(Long id, boolean isSolved) {
    public static ProblemSolvedDto of(Long id, boolean isSolved) {
        return new ProblemSolvedDto(id, isSolved);
    }
}
