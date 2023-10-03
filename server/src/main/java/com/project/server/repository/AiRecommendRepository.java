package com.project.server.repository;

import com.project.server.domain.AiRecommend;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AiRecommendRepository extends JpaRepository<AiRecommend, Long> {
}
