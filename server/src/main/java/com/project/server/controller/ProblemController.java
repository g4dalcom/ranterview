package com.project.server.controller;

import com.project.server.dto.ProblemDto;
import com.project.server.service.ProblemService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class ProblemController {
    private final ProblemService problemService;
    @PostMapping("/api/problem")
    public ResponseEntity<Void> addProblem(@RequestBody ProblemDto.Request request) {
        problemService.addProblem(request);
        return ResponseEntity.noContent().build();
    }
}
