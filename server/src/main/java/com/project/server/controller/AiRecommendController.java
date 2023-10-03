package com.project.server.controller;

import com.project.server.dto.AiDto;
import com.project.server.service.AiRecommendService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/chatgpt/rest")
public class AiRecommendController {
    private final AiRecommendService aiRecommendService;

    @PostMapping("/completion")
    public AiDto.Response completion(final @RequestBody AiDto.Request request) {
        return aiRecommendService.completion(request);
    }
}
