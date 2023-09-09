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
    private Long id;

    @Column(nullable = false)
    private String question;

    @Column(nullable = false, length = 1000)
    private String answer;

    @Column(nullable = false)
    private boolean isSolved = false;

    @Convert(converter = CategoryConverter.class)
    private Category category;

    @Builder
    public Problem(final Long id, final String question, final String answer, final boolean isSolved, final Category category) {
        this.id = id;
        this.question = question;
        this.answer = answer;
        this.isSolved = isSolved;
        this.category = category;
    }

    public void updateSolvedCondition() {
        this.isSolved = !isSolved;
    }
}