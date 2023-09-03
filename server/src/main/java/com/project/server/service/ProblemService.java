package com.project.server.service;

import com.project.server.Repository.ProblemRepository;
import com.project.server.domain.Problem;
import com.project.server.dto.ProblemDto;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
@Slf4j
@RequiredArgsConstructor
public class ProblemService {
    private final ProblemRepository problemRepository;

    @Transactional
    public void addProblem(ProblemDto.Request request) {
        Problem problem = request.toEntity();
        problemRepository.save(problem);
    }

    @Transactional
    public List<ProblemDto.Response> getAllProblems() {
        List<Problem> problems = problemRepository.findAll();
        log.info("problems = {}", problems.get(0).getCategory());
        return problems.stream().map(ProblemDto.Response::of).collect(Collectors.toList());
    }
}
