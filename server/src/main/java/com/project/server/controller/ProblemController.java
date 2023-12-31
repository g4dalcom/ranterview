package com.project.server.controller;

import com.project.server.domain.Category;
import com.project.server.dto.*;
import com.project.server.service.ProblemService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/problem")
@Slf4j
@RequiredArgsConstructor
public class ProblemController {
    private final ProblemService problemService;
    @PostMapping
    public ResponseEntity<Void> addProblem(@RequestBody ProblemDto.Request request) {
        problemService.addProblem(request);
        return ResponseEntity.ok().build();
    }

    @PatchMapping("/{id}")
    public ResponseEntity<ProblemSolvedDto> updateSolvedCondition(@PathVariable Long id) {
        return ResponseEntity.ok().body(problemService.updateSolvedCondition(id));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteProblem(@PathVariable Long id) {
        problemService.deleteProblem(id);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/{id}")
    public ResponseEntity<ProblemDto.Response> getProblem(@PathVariable Long id) {
        return ResponseEntity.ok().body(problemService.getProblem(id));
    }

    @GetMapping
    public ResponseEntity<List<ProblemDto.Response>> getAllProblems(@RequestParam(required = false) Category category) {
        return ResponseEntity.ok().body(problemService.getAllProblems(category));
    }

    @GetMapping("/solving")
    public ResponseEntity<List<ProblemDto.Response>> getSolvingProblems(@RequestParam(required = false) Category category) {
        return ResponseEntity.ok().body(problemService.getSolvingProblems(category));
    }

    @GetMapping("/daily")
    public ResponseEntity<List<ProblemDto.Response>> getDailyProblems() {
        return ResponseEntity.ok().body(problemService.getDailyProblems());
    }

    @GetMapping("/count")
    public ResponseEntity<ProblemCountDto> getCount() {
        return ResponseEntity.ok().body(problemService.getProblemCount());
    }

    @GetMapping("/recently")
    public ResponseEntity<RecentlySolvedCountDto> getRecentlySolvedCount() {
        return ResponseEntity.ok().body(problemService.getRecentlySolvedCount());
    }

    @GetMapping("/calendar")
    public ResponseEntity<List<ProblemSolvedDatesDto>> getSolvedDates() {
        return ResponseEntity.ok().body(problemService.getSolvedDates());
    }
}
