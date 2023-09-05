package com.project.server.controller;

import com.project.server.dto.ProblemDto;
import com.project.server.service.ProblemService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/problem")
@RequiredArgsConstructor
public class ProblemController {
    private final ProblemService problemService;
    @PostMapping
    public ResponseEntity<Void> addProblem(@RequestBody ProblemDto.Request request) {
        problemService.addProblem(request);
        return ResponseEntity.ok().build();
    }

    @GetMapping
    public ResponseEntity<List<ProblemDto.Response>> getAllProblems() {
        return ResponseEntity.ok().body(problemService.getAllProblems());
    }

    @GetMapping("/visible")
    public ResponseEntity<List<ProblemDto.Response>> getVisibleProblems() {
        return ResponseEntity.ok().body(problemService.getVisibleProblems());
    }
}
