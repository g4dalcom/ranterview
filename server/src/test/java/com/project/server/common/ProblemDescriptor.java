package com.project.server.common;

import lombok.Getter;
import org.springframework.restdocs.payload.JsonFieldType;
import org.springframework.restdocs.snippet.Attributes;

import static com.project.server.configuration.RestDocsConfiguration.field;

@Getter
public enum ProblemDescriptor implements Descriptor {
    id(JsonFieldType.NUMBER, "고유번호", field("constraint", "양의 정수")),
    category(JsonFieldType.STRING, "문제유형", field("constraint", "문자열")),
    question(JsonFieldType.STRING, "문제", field("constraint", "문자열")),
    answer(JsonFieldType.STRING, "답안", field("constraint", "문자열")),
    isSolved(JsonFieldType.BOOLEAN, "해결여부", field("constraint", "불리언")),
    completionDate(JsonFieldType.STRING, "완료일자", field("constraint", "날짜 형식의 문자열"));

    private final JsonFieldType jsonFieldType;
    private final String description;
    private final Attributes.Attribute attribute;

    ProblemDescriptor(JsonFieldType jsonFieldType, String description, Attributes.Attribute attribute) {
        this.jsonFieldType = jsonFieldType;
        this.description = description;
        this.attribute = attribute;
    }

    public static Descriptor[] problem() {
        return new Descriptor[] {
                id,
                category,
                question,
                answer,
                isSolved,
                completionDate,
        };
    }
}