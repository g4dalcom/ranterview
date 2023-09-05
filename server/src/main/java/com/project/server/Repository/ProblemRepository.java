package com.project.server.Repository;

import com.project.server.domain.Problem;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ProblemRepository extends JpaRepository<Problem, Long> {
    List<Problem> findAllByVisibleIsTrue();
}
