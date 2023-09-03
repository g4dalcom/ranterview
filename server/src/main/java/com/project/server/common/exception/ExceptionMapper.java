package com.project.server.common.exception;

import com.project.server.exception.ProblemNotFoundException;
import org.springframework.http.HttpStatus;

import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

public class ExceptionMapper {
    private static final Map<Class<? extends Exception>, ExceptionSituation> mapper = new LinkedHashMap<>();

    static {
        setUpProblemException();
    }

    private static void setUpProblemException() {
        mapper.put(ProblemNotFoundException.class, ExceptionSituation.of("해당하는 컨텐츠가 없습니다.", HttpStatus.NOT_FOUND, 400));
    }

    public static ExceptionSituation getSituationOf(Exception e) {
        return mapper.get(e.getClass());
    }

    public static List<ExceptionSituation> getExceptionSituations() {
        return mapper.values().stream().toList();
    }
}
