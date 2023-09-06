package com.project.server.dto;

import com.project.server.domain.Category;
import com.project.server.domain.Problem;
import lombok.Builder;

public record ProblemDto() {
    @Builder
    public record Request(Category category, String question, String answer) {
        public Problem toEntity() {
            return Problem.builder()
                    .category(category)
                    .question(question)
                    .answer(answer)
                    .isSolved(false)
                    .build();
        }
    }

    @Builder
    public record Response(Long id, String category, String question, String answer, boolean isSolved) {
        public static Response of(Problem problem) {
            return Response.builder()
                    .id(problem.getId())
                    .category(problem.getCategory().getDescription())
                    .question(problem.getQuestion())
                    .answer(problem.getAnswer())
                    .isSolved(problem.isSolved())
                    .build();
        }
    }
}
