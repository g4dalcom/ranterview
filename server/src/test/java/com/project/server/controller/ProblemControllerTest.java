package com.project.server.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.project.server.common.ControllerTest;
import com.project.server.domain.Category;
import com.project.server.dto.ProblemDto;
import com.project.server.service.ProblemService;
import groovy.util.logging.Slf4j;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.restdocs.AutoConfigureRestDocs;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.ResultActions;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;

import static org.springframework.restdocs.payload.PayloadDocumentation.fieldWithPath;
import static org.springframework.restdocs.payload.PayloadDocumentation.requestFields;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;

@WebMvcTest(ProblemController.class)
@AutoConfigureRestDocs
class ProblemControllerTest extends ControllerTest {
    private static final ProblemDto.Request NEW_PROBLEM_REQUEST = new ProblemDto.Request(Category.SERVER, "서버 관련 질문", "질문에 대한 답변");

    @MockBean
    ProblemService problemService;
    @Autowired
    ObjectMapper objectMapper;

    @DisplayName("새로운 질문 등록")
    @Test
    void createProblem() throws Exception {
        ResultActions resultActions = mockMvc.perform(post("/api/problem")
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(NEW_PROBLEM_REQUEST)));

        resultActions.andExpect(MockMvcResultMatchers.status().isOk())
                .andDo(restDocs.document(
                        requestFields(
                                fieldWithPath("category").description("문제유형"),
                                fieldWithPath("question").description("문제"),
                                fieldWithPath("answer").description("답안")
                )));
    }
}