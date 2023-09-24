package com.project.server.dto;

import com.project.server.repository.ProblemCount;

import java.util.List;

public record ProblemCountDto(List<ProblemCount> categoryCount, List<ProblemCount> solvedCount, long categoryTotal, long solvedTotal) {
}
