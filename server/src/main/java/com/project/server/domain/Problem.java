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

    @Column(nullable = false)
    private String answer;

    @Column(nullable = false)
    private boolean visible = true;

    @Column(nullable = false)
    private boolean solved = false;

    @Convert(converter = CategoryConverter.class)
    private Category category;

    @Builder
    public Problem(final Long id, final String question, final String answer, final boolean visible, final boolean solved, final Category category) {
        this.id = id;
        this.question = question;
        this.answer = answer;
        this.visible = visible;
        this.solved = solved;
        this.category = category;
    }
}