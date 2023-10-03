package com.project.server.service;

import com.project.server.domain.AiRecommend;
import com.project.server.dto.AiDto;
import com.project.server.repository.AiRecommendRepository;
import com.theokanning.openai.completion.CompletionResult;
import com.theokanning.openai.service.OpenAiService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class AiRecommendService {
    private final OpenAiService openAiService;
    private final AiRecommendRepository aiRecommendRepository;

    @Transactional
    public AiDto.Response completion(final AiDto.Request request) {
        CompletionResult result = openAiService.createCompletion(AiDto.Request.of(request));
        AiDto.Response response = AiDto.Response.of(result);

        List<String> messages = response.messages().stream()
                .map(AiDto.Message::text).toList();

        AiRecommend aiRecommend = save(messages);
        return response;
    }

    private AiRecommend save(List<String> response) {
        String answer = response.stream()
                .filter(Objects::nonNull)
                .collect(Collectors.joining());
        return aiRecommendRepository.save(new AiRecommend(answer));
    }
}
