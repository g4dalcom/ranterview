package com.project.server.controller;

import com.project.server.dto.ProblemDto;
import com.project.server.service.ProblemService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
public class ProblemController {
    private final ProblemService problemService;
    @PostMapping("/problem")
    public ResponseEntity<Void> addProblem(@RequestBody ProblemDto.Request request) {
        problemService.addProblem(request);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/problem")
    public ResponseEntity<List<ProblemDto.Response>> getAllProblems() {
        return ResponseEntity.ok().body(problemService.getAllProblems());
    }
}
