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
                    .visible(true)
                    .solved(false)
                    .build();
        }

    }

    @Builder
    public record Response(Long id, Category category, String question, String answer, boolean visible, boolean solved) {

        public static Response of(Problem problem) {
            return Response.builder()
                    .id(problem.getId())
                    .category(problem.getCategory())
                    .question(problem.getQuestion())
                    .answer(problem.getAnswer())
                    .visible(problem.isVisible())
                    .solved(problem.isSolved())
                    .build();
        }
    }
}
