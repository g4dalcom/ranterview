package com.project.server.repository;

import java.time.LocalDate;

public interface RecentlySolvedCount {
    LocalDate getCompletionDate();
    Long getSolvedCount();
}
