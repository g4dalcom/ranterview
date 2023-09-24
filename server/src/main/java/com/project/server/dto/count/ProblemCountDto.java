package com.project.server.dto.count;

import java.util.List;

public record ProblemCountDto(List<CategoryCount> categoryCount, List<CategoryCount> solvedCount) {
}
