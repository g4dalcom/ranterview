package com.project.server.repository;

import com.project.server.domain.Category;

public interface ProblemCount {
    Category getCategory();
    Long getCount();
}
