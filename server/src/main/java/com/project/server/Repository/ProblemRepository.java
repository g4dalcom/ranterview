package com.project.server.Repository;

import com.project.server.domain.Category;
import com.project.server.domain.Problem;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ProblemRepository extends JpaRepository<Problem, Long> {
    List<Problem> findAllByIsSolvedIsFalse();
    @Query("SELECT p FROM Problem p WHERE p.category =:category")
    List<Problem> findAll(@Param("category") Category category);
}
