package com.project.server.domain;

import jakarta.persistence.AttributeConverter;

public class CategoryConverter implements AttributeConverter<Category, Integer> {
    /**
     * @param attribute  카테고리 객체
     * @return 카테고리 객체에서 code를 가져와서 DB에 넣는다.
     */
    @Override
    public Integer convertToDatabaseColumn(final Category attribute) {
        if (attribute == null) throw new IllegalArgumentException("%s(은)는 NULL로 저장할 수 없습니다.");
        return attribute.getCode();
    }

    @Override
    public Category convertToEntityAttribute(final Integer dbData) {
        return Category.ofCode(dbData);
    }
}
