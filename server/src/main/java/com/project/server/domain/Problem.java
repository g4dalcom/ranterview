package com.project.server.domain;

import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Problem {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private String id;

    @Column(nullable = false)
    private String question;

    @Column(nullable = false)
    private String answer;

    @Column(nullable = false, columnDefinition = "true")
    private boolean visible;

    @Builder
    public Problem(final String id, final String question, final String answer, final boolean visible) {
        this.id = id;
        this.question = question;
        this.answer = answer;
        this.visible = visible;
    }
}