package com.project.server.fixture;

import com.project.server.domain.Category;
import com.project.server.domain.Problem;
import com.project.server.dto.ProblemCountDto;
import com.project.server.dto.ProblemDto;
import com.project.server.dto.ProblemSolvedDatesDto;
import com.project.server.dto.RecentlySolvedCountDto;
import com.project.server.repository.ProblemCount;
import com.project.server.repository.ProblemSolvedDate;
import org.springframework.data.projection.ProjectionFactory;
import org.springframework.data.projection.SpelAwareProxyProjectionFactory;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

public class ProblemFixture {
    public static final Problem PROBLEM_1 = new Problem(
            1L, "모든 질문 1", "답안", false, Category.SERVER, LocalDate.now()
    );

    public static final Problem PROBLEM_2 = new Problem(
            2L, "모든 질문 2", "답안", false, Category.OS, LocalDate.now()
    );

    public static final Problem SOLVED_PROBLEM_1 = new Problem(3L, "완료한 질문 1", "답안", true, Category.NETWORK, LocalDate.now());

    public static final Problem SOLVED_PROBLEM_2 = new Problem(4L, "완료한 질문 2", "답안", true, Category.CLIENT, LocalDate.now());

    public static List<ProblemDto.Response> PROBLEMS_INCLUDES_ALL_CATEGORIES() {
        List<ProblemDto.Response> problemList = new ArrayList<>();
        long number = 1L;
        for (Category c : Category.values()) {
            long randomize = (long) (Math.random() * 7);
            problemList.add(ProblemDto.Response.of(new Problem(number++, c + " 해결한 질문", c + " 해결한 답안", true, c, LocalDate.now().minusDays(randomize))));
            problemList.add(ProblemDto.Response.of(new Problem(number++, c + " 질문", c + " 답안", false, c, LocalDate.now())));
        }
        return problemList;
    }

    public static ProblemCountDto PROBLEM_COUNT() {
        List<ProblemDto.Response> problemList = PROBLEMS_INCLUDES_ALL_CATEGORIES();
        List<ProblemCount> problemCountList = new ArrayList<>();
        ProjectionFactory factory = new SpelAwareProxyProjectionFactory();
        int total = 0;
        int solvedTotal = 0;
        for (Category c : Category.values()) {
            ProblemCount problemCount = factory.createProjection(ProblemCount.class);
            int count = 0;
            int solved = 0;
            for (ProblemDto.Response p : problemList) {
                if (p.category().equals(c.getDescription())) {
                    if (p.isSolved()) {
                        solved++;
                        solvedTotal++;
                    }
                    count++;
                    total++;
                }
            }
            problemCount.setCategory(c);
            problemCount.setCount(count);
            problemCount.setSolved(solved);
            problemCountList.add(problemCount);
        }

        return new ProblemCountDto(problemCountList, total, solvedTotal);
    }

    public static RecentlySolvedCountDto RECENTLY_DATE_AND_COUNT() {
        List<ProblemDto.Response> problemList = PROBLEMS_INCLUDES_ALL_CATEGORIES();
        List<ProblemSolvedDate> dateList = new ArrayList<>();

        create_date_info(problemList, dateList);

        return new RecentlySolvedCountDto(dateList);
    }

    public static List<ProblemSolvedDatesDto> CALENDAR_DATA() {
        ArrayList<ProblemSolvedDatesDto> dataList = new ArrayList<>();

        List<ProblemDto.Response> problemList = PROBLEMS_INCLUDES_ALL_CATEGORIES();
        List<ProblemSolvedDate> dateList = new ArrayList<>();

        create_date_info(problemList, dateList);

        for (ProblemSolvedDate d : dateList) {
            List<Problem> problems = new ArrayList<>();
            for (ProblemDto.Response problem : problemList) {
                if (problem.completionDate().equals(d.getCompletionDate())) {
                    problems.add(Problem.builder()
                            .id(problem.id())
                            .category(problem.category())
                            .question(problem.question())
                            .answer(problem.answer())
                            .completionDate(problem.completionDate())
                            .build());
                }
            }
            dataList.add(new ProblemSolvedDatesDto(d, problems));
        }

        return dataList;
    }

    public static void create_date_info(List<ProblemDto.Response> problemList, List<ProblemSolvedDate> dateList) {
        HashMap<LocalDate, Long> map = new HashMap<>();

        for (ProblemDto.Response response : problemList) {
            map.put(response.completionDate(), map.getOrDefault(response.completionDate(), 0L) + 1L);
        }

        ProjectionFactory factory = new SpelAwareProxyProjectionFactory();
        for (LocalDate key : map.keySet()) {
            ProblemSolvedDate problemSolvedDate = factory.createProjection(ProblemSolvedDate.class);
            problemSolvedDate.setCompletionDate(key);
            problemSolvedDate.setSolvedCount(map.get(key));

            dateList.add(problemSolvedDate);
        }
    }
}
