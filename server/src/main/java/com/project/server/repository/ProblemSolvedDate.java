package com.project.server.repository;

import java.time.LocalDate;

public interface ProblemSolvedDate {
    LocalDate getCompletionDate();
    Long getSolvedCount();
}
