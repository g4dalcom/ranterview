package com.project.server.domain;

import lombok.Getter;

import java.util.Arrays;

@Getter
public enum Category {
        SERVER("서버", 1),
        CLIENT("클라이언트", 2),
        NETWORK("네트워크", 3),
        OS("운영체제", 4),
        DATA_STRUCTURE("자료구조", 5),
        ENGINEERING("엔지니어링", 6);
        private final String description;
        private final Integer code;

        Category(final String description, final Integer code) {
                this.description = description;
                this.code = code;
        }

        public static Category ofCode(Integer code) {
                return Arrays.stream(Category.values())
                        .filter(v -> v.getCode().equals(code))
                        .findAny()
                        .orElseThrow(() -> new IllegalArgumentException("존재하지 않는 카테고리입니다."));
        }

}
