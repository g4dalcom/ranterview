package com.project.server.domain;

import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.format.annotation.DateTimeFormat;

import java.time.LocalDate;

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

    @Column
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private LocalDate completionDate;

    @Builder
    public Problem(final Long id, final String question, final String answer, final boolean isSolved, final Category category, final LocalDate completionDate) {
        this.id = id;
        this.question = question;
        this.answer = answer;
        this.isSolved = isSolved;
        this.category = category;
        this.completionDate = completionDate;
    }

    public void updateSolvedCondition() {
        if (!isSolved) {
            this.completionDate = LocalDate.now();
        } else {
            this.completionDate = null;
        }
        this.isSolved = !isSolved;
    }
}