package com.project.server.repository;

import java.time.LocalDate;

public interface ProblemSolvedDate {
    LocalDate getCompletionDate();
    Long getSolvedCount();
    void setCompletionDate(LocalDate date);
    void setSolvedCount(Long count);
}
