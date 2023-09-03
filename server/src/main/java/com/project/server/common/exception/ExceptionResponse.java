package com.project.server.common.exception;

public record ExceptionResponse(Integer code, String message) {
    public static ExceptionResponse from(ExceptionSituation exceptionSituation) {
        return new ExceptionResponse(exceptionSituation.errorCode(), exceptionSituation.message());
    }
}
