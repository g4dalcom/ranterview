package com.project.server.fixture;

import com.project.server.domain.Category;
import com.project.server.domain.Problem;

public class ProblemFixture {
    public static final Problem PROBLEM_1 = new Problem(
            1L, "질문1", "답안1", true, false, Category.SERVER
    );

    public static final Problem PROBLEM_2 = new Problem(
            2L, "질문2", "답안2", true, false, Category.OS
    );
}
