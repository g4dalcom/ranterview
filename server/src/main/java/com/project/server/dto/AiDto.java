package com.project.server.dto;

import com.theokanning.openai.completion.CompletionChoice;
import com.theokanning.openai.completion.CompletionResult;
import lombok.Builder;

import java.util.List;
import java.util.stream.Collectors;

public record AiDto() {

    public record Request(String model, String prompt) {
        static final String DEFAULT_MODEL = "gpt-3.5-turbo";

        public Request(String prompt) {
            this(DEFAULT_MODEL, prompt);
        }
    }

    @Builder
    public record Response(String id, String object, Long created, String model, List<Message> messages, Usage usage) {
        public Response of(CompletionResult result) {
            return Response.builder()
                    .id(result.getId())
                    .object(result.getObject())
                    .created(result.getCreated())
                    .model(result.getModel())
                    .messages(toResponseListBy(result.getChoices()))
                    .usage(Usage.of(result.getUsage()))
                    .build();
        }
    }

    @Builder
    public record Message(String text, Integer index, String finishReason) {
        public static Message of(CompletionChoice choice) {
            return Message.builder()
                    .text(choice.getText())
                    .index(choice.getIndex())
                    .finishReason(choice.getFinish_reason())
                    .build();
        }
    }

    @Builder
    public record Usage (Long promptTokens, Long completionTokens, Long totalTokens) {
        public static Usage of(com.theokanning.openai.Usage usage) {
            return Usage.builder()
                    .promptTokens(usage.getPromptTokens())
                    .completionTokens(usage.getCompletionTokens())
                    .totalTokens(usage.getTotalTokens())
                    .build();
        }
    }

    public static List<Message> toResponseListBy(List<CompletionChoice> choices) {
        return choices.stream()
                .map(Message::of)
                .collect(Collectors.toList());
    }
}
