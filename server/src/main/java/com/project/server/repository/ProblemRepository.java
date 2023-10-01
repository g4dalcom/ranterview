package com.project.server.repository;

import com.project.server.domain.Category;
import com.project.server.domain.Problem;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ProblemRepository extends JpaRepository<Problem, Long> {
    List<Problem> findAllByIsSolvedIsFalse();
    @Query("SELECT p FROM Problem p WHERE p.category =:category")
    List<Problem> findAllByIsSolvedIsFalse(@Param("category") Category category);
    List<Problem> findAllByIsSolvedIsTrue();
    @Query("SELECT p FROM Problem p WHERE p.category =:category")
    List<Problem> findAll(@Param("category") Category category);
    @Query("SELECT p.category AS category, COUNT(p.id) AS count, SUM(CASE WHEN p.isSolved = true THEN 1 ELSE 0 END) AS solved FROM Problem p GROUP BY p.category")
    List<ProblemCount> getCategoryCount();
    @Query("SELECT p.completionDate AS completionDate, COUNT(p.id) AS solvedCount FROM Problem p WHERE p.isSolved = true GROUP BY p.completionDate")
    List<ProblemSolvedDate> getSolvedDates();
}
