package com.project.server.dto.count;

import com.project.server.domain.Category;
import com.project.server.domain.Problem;
import lombok.Builder;

import java.util.List;

@Builder
public record CategoryCount(long client, long server, long network, long os, long data_structure, long engineering) {
    public static CountResponse allOf(List<Problem> problems) {
        return new CountResponse(CategoryCount.builder()
                .client(getCount(problems, Category.CLIENT))
                .server(getCount(problems, Category.SERVER))
                .network(getCount(problems, Category.NETWORK))
                .os(getCount(problems, Category.OS))
                .data_structure(getCount(problems, Category.DATA_STRUCTURE))
                .engineering(getCount(problems, Category.ENGINEERING))
                .build(), problems.size());
    }

    public static CountResponse solvedOf(List<Problem> problems) {
        return new CountResponse(CategoryCount.builder()
                .client(getSolvedCount(problems, Category.CLIENT))
                .server(getSolvedCount(problems, Category.SERVER))
                .network(getSolvedCount(problems, Category.NETWORK))
                .os(getSolvedCount(problems, Category.OS))
                .data_structure(getSolvedCount(problems, Category.DATA_STRUCTURE))
                .engineering(getSolvedCount(problems, Category.ENGINEERING))
                .build(), problems.stream().filter(Problem::isSolved).count());
    }

    public static long getCount(List<Problem> problems, Category category) {
        return problems.stream().filter(p -> p.getCategory().equals(category)).count();
    }

    public static long getSolvedCount(List<Problem> problems, Category category) {
        return problems.stream().filter(p -> p.isSolved() && p.getCategory().equals(category)).count();
    }
}
