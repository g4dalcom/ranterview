package com.project.server.controller;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.project.server.common.ControllerTest;
import com.project.server.domain.Category;
import com.project.server.dto.ProblemDto;
import com.project.server.dto.ProblemSolvedDto;
import com.project.server.service.ProblemService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.restdocs.AutoConfigureRestDocs;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.restdocs.payload.JsonFieldType;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.ResultActions;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;

import java.time.LocalDate;
import java.util.List;

import static com.project.server.configuration.RestDocsConfiguration.field;
import static com.project.server.fixture.ProblemFixture.*;
import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.BDDMockito.given;
import static org.mockito.Mockito.when;
import static org.springframework.restdocs.payload.PayloadDocumentation.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;

@WebMvcTest(ProblemController.class)
@AutoConfigureRestDocs
class ProblemControllerTest extends ControllerTest {
    private static final ProblemDto.Request NEW_PROBLEM_REQUEST = new ProblemDto.Request(Category.SERVER, "서버 관련 질문", "질문에 대한 답변");

    @MockBean
    ProblemService problemService;
    @Autowired
    ObjectMapper objectMapper;

    @BeforeEach
    public void makeQuestion() {
        final ProblemDto.Request request_1 = new ProblemDto.Request(Category.SERVER, "질문1", "답안1");
        final ProblemDto.Request request_2 = new ProblemDto.Request(Category.OS, "질문2", "답안2");
        problemService.addProblem(request_1);
        problemService.addProblem(request_2);
    }

    @DisplayName("새로운 질문 등록")
    @Test
    void createProblem() throws Exception {
        ResultActions resultActions = mockMvc.perform(post("/api/problem")
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(NEW_PROBLEM_REQUEST)));

        resultActions.andExpect(MockMvcResultMatchers.status().isOk())
                .andDo(restDocs.document(
                        requestFields(
                                fieldWithPath("category")
                                        .type(JsonFieldType.STRING)
                                        .description("문제유형")
                                        .attributes(field("constraint", "문자열")),
                                fieldWithPath("question")
                                        .type(JsonFieldType.STRING)
                                        .description("문제")
                                        .attributes(field("constraint", "문자열")),
                                fieldWithPath("answer")
                                        .type(JsonFieldType.STRING)
                                        .description("답안")
                                        .attributes(field("constraint", "문자열"))
                )));
    }

    @DisplayName("질문의 해결 여부를 변경한다.")
    @Test
    void updateSolvedCondition() throws Exception {
        given(problemService.updateSolvedCondition(1L)).willReturn(new ProblemSolvedDto(1L, true, LocalDate.now()));

        ResultActions resultActions = mockMvc.perform(patch("/api/problem/1")
                .contentType(MediaType.APPLICATION_JSON));

        resultActions.andExpect(MockMvcResultMatchers.status().isOk())
                .andDo(restDocs.document(
                        responseFields(
                                fieldWithPath("id")
                                        .type(JsonFieldType.NUMBER)
                                        .description("질문 고유 번호")
                                        .attributes(field("constraint", "양의 정수")),
                                fieldWithPath("isSolved")
                                        .type(JsonFieldType.BOOLEAN)
                                        .description("해결여부")
                                        .attributes(field("constraint", "불리언")),
                                fieldWithPath("completionDate")
                                        .type(JsonFieldType.STRING)
                                        .description("완료일자")
                                        .attributes(field("constraint", "날짜 형식의 문자열"))
                        )
                ));
    }

    @DisplayName("질문을 삭제한다.")
    @Test
    void deleteProblem() throws Exception {
        ResultActions resultActions = mockMvc.perform(delete("/api/problem/1"));

        resultActions.andExpect(MockMvcResultMatchers.status().isNoContent());
    }

    @DisplayName("특정 질문 1개의 데이터를 불러온다.")
    @Test
    void getProblem() throws Exception {
        when(problemService.getProblem(1L)).thenReturn(ProblemDto.Response.of(PROBLEM_1));

        ResultActions resultActions = mockMvc.perform(get("/api/problem/1"));

        MvcResult mvcResult = resultActions.andExpect(MockMvcResultMatchers.status().isOk())
                .andDo(restDocs.document(
                        responseFields(
                                fieldWithPath("id")
                                        .type(JsonFieldType.NUMBER)
                                        .description("질문 고유 번호")
                                        .attributes(field("constraint", "양의 정수")),
                                fieldWithPath("category")
                                        .type(JsonFieldType.STRING)
                                        .description("문제유형")
                                        .attributes(field("constraint", "문자열")),
                                fieldWithPath("question")
                                        .type(JsonFieldType.STRING)
                                        .description("문제")
                                        .attributes(field("constraint", "문자열")),
                                fieldWithPath(".answer")
                                        .type(JsonFieldType.STRING)
                                        .description("답안")
                                        .attributes(field("constraint", "문자열")),
                                fieldWithPath("isSolved")
                                        .type(JsonFieldType.BOOLEAN)
                                        .description("해결여부")
                                        .attributes(field("constraint", "불리언")),
                                fieldWithPath("completionDate")
                                        .type(JsonFieldType.STRING)
                                        .description("완료일자")
                                        .attributes(field("constraint", "날짜 형식의 문자열"))
                        )
                )).andReturn();

        final ProblemDto.Response response = objectMapper.readValue(
                mvcResult.getResponse().getContentAsString(), new TypeReference<>() {
                }
        );
        assertThat(response).usingRecursiveComparison().isEqualTo(ProblemDto.Response.of(PROBLEM_1));
    }

    @DisplayName("모든 질문 목록을 불러온다.")
    @Test
    void getAllProblems() throws Exception {
        when(problemService.getAllProblems(null)).thenReturn(List.of(ProblemDto.Response.of(PROBLEM_1), ProblemDto.Response.of(PROBLEM_2)));

        ResultActions resultActions = mockMvc.perform(get("/api/problem")
                .contentType(MediaType.APPLICATION_JSON));

        MvcResult mvcResult = resultActions.andExpect(MockMvcResultMatchers.status().isOk())
                .andDo(restDocs.document(
                        responseFields(
                                fieldWithPath("[].id")
                                        .type(JsonFieldType.NUMBER)
                                        .description("질문 고유 번호")
                                        .attributes(field("constraint", "양의 정수")),
                                fieldWithPath("[].category")
                                        .type(JsonFieldType.STRING)
                                        .description("문제유형")
                                        .attributes(field("constraint", "문자열")),
                                fieldWithPath("[].question")
                                        .type(JsonFieldType.STRING)
                                        .description("문제")
                                        .attributes(field("constraint", "문자열")),
                                fieldWithPath("[].answer")
                                        .type(JsonFieldType.STRING)
                                        .description("답안")
                                        .attributes(field("constraint", "문자열")),
                                fieldWithPath("[].isSolved")
                                        .type(JsonFieldType.BOOLEAN)
                                        .description("해결여부")
                                        .attributes(field("constraint", "불리언")),
                                fieldWithPath("[].completionDate")
                                        .type(JsonFieldType.STRING)
                                        .description("완료일자")
                                        .attributes(field("constraint", "날짜 형식의 문자열"))
                        )
                )).andReturn();

        final List<ProblemDto.Response> response = objectMapper.readValue(
                mvcResult.getResponse().getContentAsString(), new TypeReference<>() {
                }
        );
        assertThat(response).usingRecursiveComparison().isEqualTo(List.of(ProblemDto.Response.of(PROBLEM_1), ProblemDto.Response.of(PROBLEM_2)));
    }

    @DisplayName("완료한 질문 목록을 불러온다.")
    @Test
    void getSolvedProblems() throws Exception {
        when(problemService.getSolvingProblems(null))
                .thenReturn(List.of(ProblemDto.Response.of(SOLVED_PROBLEM_1), ProblemDto.Response.of(SOLVED_PROBLEM_2)));

        ResultActions resultActions = mockMvc.perform(get("/api/problem/solving")
                .contentType(MediaType.APPLICATION_JSON));

        MvcResult mvcResult = resultActions.andExpect(MockMvcResultMatchers.status().isOk())
                .andDo(restDocs.document(
                        responseFields(
                                fieldWithPath("[].id")
                                        .type(JsonFieldType.NUMBER)
                                        .description("질문 고유 번호")
                                        .attributes(field("constraint", "양의 정수")),
                                fieldWithPath("[].category")
                                        .type(JsonFieldType.STRING)
                                        .description("문제유형")
                                        .attributes(field("constraint", "문자열")),
                                fieldWithPath("[].question")
                                        .type(JsonFieldType.STRING)
                                        .description("문제")
                                        .attributes(field("constraint", "문자열")),
                                fieldWithPath("[].answer")
                                        .type(JsonFieldType.STRING)
                                        .description("답안")
                                        .attributes(field("constraint", "문자열")),
                                fieldWithPath("[].isSolved")
                                        .type(JsonFieldType.BOOLEAN)
                                        .description("해결여부")
                                        .attributes(field("constraint", "불리언")),
                                fieldWithPath("[].completionDate")
                                        .type(JsonFieldType.STRING)
                                        .description("완료일자")
                                        .attributes(field("constraint", "날짜 형식의 문자열"))
                        )
                )).andReturn();

        final List<ProblemDto.Response> response = objectMapper.readValue(
                mvcResult.getResponse().getContentAsString(), new TypeReference<>() {
                }
        );
        assertThat(response).usingRecursiveComparison().isEqualTo(List.of(ProblemDto.Response.of(SOLVED_PROBLEM_1), ProblemDto.Response.of(SOLVED_PROBLEM_2)));
    }
}