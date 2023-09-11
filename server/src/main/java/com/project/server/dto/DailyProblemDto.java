package com.project.server.dto;

import com.project.server.domain.Category;
import lombok.Builder;

import java.util.HashMap;

@Builder
public record DailyProblemDto(ProblemDto.Response server, ProblemDto.Response client, ProblemDto.Response network, ProblemDto.Response os, ProblemDto.Response data_structure, ProblemDto.Response engineering) {
    public static DailyProblemDto of(HashMap<Category, ProblemDto.Response> problem) {
        return DailyProblemDto.builder()
                .server(problem.get(Category.SERVER))
                .client(problem.get(Category.CLIENT))
                .network(problem.get(Category.NETWORK))
                .os(problem.get(Category.OS))
                .data_structure(problem.get(Category.DATA_STRUCTURE))
                .engineering(problem.get(Category.ENGINEERING))
                .build();
    }
}