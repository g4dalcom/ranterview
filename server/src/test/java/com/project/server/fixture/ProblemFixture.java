package com.project.server.fixture;

import com.project.server.domain.Category;
import com.project.server.domain.Problem;

import java.time.LocalDate;

public class ProblemFixture {
    public static final Problem PROBLEM_1 = new Problem(
            1L, "질문1", "답안1", false, Category.SERVER, LocalDate.now()
    );

    public static final Problem PROBLEM_2 = new Problem(
            2L, "질문2", "답안2", false, Category.OS, LocalDate.now()
    );

    public static final Problem UPDATE_CONDITION = new Problem(
            1L, "질문1", "답안1", true, Category.SERVER, LocalDate.now()
    );
}
