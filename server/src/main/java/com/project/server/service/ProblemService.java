package com.project.server.service;

import com.project.server.Repository.ProblemRepository;
import com.project.server.domain.Problem;
import com.project.server.dto.ProblemDto;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class ProblemService {
    private final ProblemRepository problemRepository;

    @Transactional
    public void addProblem(ProblemDto.Request request) {
        Problem problem = request.toEntity();
        problemRepository.save(problem);
    }
}
