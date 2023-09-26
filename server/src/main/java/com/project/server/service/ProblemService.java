package com.project.server.service;

import com.project.server.dto.ProblemCountDto;
import com.project.server.dto.RecentlySolvedCountDto;
import com.project.server.repository.ProblemCount;
import com.project.server.repository.ProblemRepository;
import com.project.server.domain.Category;
import com.project.server.domain.Problem;
import com.project.server.dto.ProblemDto;
import com.project.server.dto.ProblemSolvedDto;
import com.project.server.exception.ProblemNotFoundException;
import com.project.server.repository.RecentlySolvedCount;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.*;
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
        return ProblemSolvedDto.of(id, problem.isSolved(), problem.getCompletionDate());
    }

    @Transactional
    public void deleteProblem(Long id) {
        Problem problem = problemRepository.findById(id).orElseThrow(ProblemNotFoundException::new);
        problemRepository.delete(problem);
    }

    public ProblemDto.Response getProblem(Long id) {
        Problem problem = problemRepository.findById(id).orElseThrow(ProblemNotFoundException::new);
        return ProblemDto.Response.of(problem);
    }

    public List<ProblemDto.Response> getAllProblems(Category category) {
        List<Problem> problems;
        if (category == null) problems = problemRepository.findAll();
        else problems = problemRepository.findAll(category);

        return problems.stream().map(ProblemDto.Response::of).collect(Collectors.toList());
    }

    public List<ProblemDto.Response> getSolvingProblems(Category category) {
        List<Problem> problems;
        if (category == null) problems = problemRepository.findAllByIsSolvedIsFalse();
        else problems = problemRepository.findAllByIsSolvedIsFalse(category);
        return problems.stream().map(ProblemDto.Response::of).collect(Collectors.toList());
    }

    public List<ProblemDto.Response> getDailyProblems() {
        List<Problem> dailyList = new ArrayList<>();

        for (Category c : Category.values()) {
            List<Problem> problemList = problemRepository.findAllByIsSolvedIsFalse(c);
            if (!problemList.isEmpty()) {
                Problem problem = problemList.get((int) (Math.random() * problemList.size()));
                dailyList.add(problem);
            }
        }
        return dailyList.stream().map(ProblemDto.Response::of).collect(Collectors.toList());
    }

    public ProblemCountDto getProblemCount() {
        List<Problem> problems = problemRepository.findAll();
        List<ProblemCount> categoryCount = problemRepository.getCategoryCount();

        return new ProblemCountDto(categoryCount, problems.size(), problems.stream().filter(Problem::isSolved).count());
    }

    public RecentlySolvedCountDto getRecentlySolvedCount() {
        List<RecentlySolvedCount> recentlyCount = problemRepository.getRecentlySolvedCount();
        return new RecentlySolvedCountDto(recentlyCount);
    }
}
