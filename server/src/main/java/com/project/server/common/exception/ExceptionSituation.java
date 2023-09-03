package com.project.server.common.exception;

import lombok.Getter;
import org.springframework.http.HttpStatus;

public record ExceptionSituation(String message, HttpStatus statusCode, Integer errorCode) {

    public static ExceptionSituation of(String message, HttpStatus httpStatus, Integer errorCode) {
        return new ExceptionSituation(message, httpStatus, errorCode);
    }
}
