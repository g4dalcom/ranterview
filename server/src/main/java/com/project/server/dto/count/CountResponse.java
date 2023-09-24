package com.project.server.dto.count;

import com.project.server.domain.Problem;

import java.util.List;

public record CountResponse(CategoryCount problems, long total, CategoryCount solved, long solvedTotal) {
    public static CountResponse of(List<Problem> problems) {
        return new CountResponse(CategoryCount.allOf(problems), problems.size(), CategoryCount.solvedOf(problems), problems.stream().filter(Problem::isSolved).count());
    }
}
