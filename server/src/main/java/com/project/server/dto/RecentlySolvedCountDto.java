package com.project.server.dto;

import com.project.server.repository.RecentlySolvedCount;

import java.util.List;

public record RecentlySolvedCountDto(List<RecentlySolvedCount> weeklySolvedCount) {
}
