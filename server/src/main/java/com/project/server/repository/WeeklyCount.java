package com.project.server.repository;

import java.time.LocalDate;

public interface WeeklyCount {
    LocalDate getCompletionDate();
    Long getSolvedCount();
}
