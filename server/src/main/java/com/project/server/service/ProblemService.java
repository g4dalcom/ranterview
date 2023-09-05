package com.project.server.service;

import com.project.server.Repository.ProblemRepository;
import com.project.server.domain.Problem;
import com.project.server.dto.ProblemDto;
import com.project.server.dto.ProblemSolvedDto;
import com.project.server.exception.ProblemNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class ProblemService {
    private final ProblemRepository problemRepository;

    @Transactional
    public void addProblem(ProblemDto.Request request) {
        Problem problem = request.toEntity();
        problemRepository.save(problem);
    }

    @Transactional
    public ProblemSolvedDto updateSolvedCondition(Long id) {
        Problem problem = problemRepository.findById(id).orElseThrow(ProblemNotFoundException::new);
        problem.updateSolvedCondition();
        problemRepository.save(problem);
        return ProblemSolvedDto.of(id, problem.isSolved());
    }

    @Transactional
    public List<ProblemDto.Response> getAllProblems() {
        List<Problem> problems = problemRepository.findAll();
        return problems.stream().map(ProblemDto.Response::of).collect(Collectors.toList());
    }

    @Transactional
    public List<ProblemDto.Response> getSolvingProblems() {
        List<Problem> problems = problemRepository.findAllByIsSolvedIsFalse();
        return problems.stream().map(ProblemDto.Response::of).collect(Collectors.toList());
    }
}
