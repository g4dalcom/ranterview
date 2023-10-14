package com.project.server.fixture;

import com.project.server.domain.Category;
import com.project.server.domain.Problem;

import java.time.LocalDate;

public class ProblemFixture {
    public static final Problem PROBLEM_1 = new Problem(
            1L, "모든 질문 1", "답안", false, Category.SERVER, LocalDate.now()
    );

    public static final Problem PROBLEM_2 = new Problem(
            2L, "모든 질문 2", "답안", false, Category.OS, LocalDate.now()
    );

    public static final Problem SOLVED_PROBLEM_1 = new Problem(3L, "완료한 질문 1", "답안", true, Category.NETWORK, LocalDate.now());

    public static final Problem SOLVED_PROBLEM_2 = new Problem(4L, "완료한 질문 2", "답안", true, Category.CLIENT, LocalDate.now());
}
