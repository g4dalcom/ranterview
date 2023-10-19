package com.project.server.repository;

import com.project.server.domain.Category;

public interface ProblemCount {
    Category getCategory();
    Long getCount();
    Long getSolved();
    void setCategory(Category category);
    void setCount(long count);
    void setSolved(long solved);

}
