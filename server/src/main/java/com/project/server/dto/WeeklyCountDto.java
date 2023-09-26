package com.project.server.dto;

import com.project.server.repository.WeeklyCount;

import java.util.List;

public record WeeklyCountDto(List<WeeklyCount> weeklySolvedCount) {
}
