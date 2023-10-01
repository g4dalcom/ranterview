package com.project.server.dto;

import com.project.server.repository.ProblemSolvedDate;

import java.util.List;

public record RecentlySolvedCountDto(List<ProblemSolvedDate> recentlySolvedCount) {
}
