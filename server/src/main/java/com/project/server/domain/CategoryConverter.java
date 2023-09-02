package com.project.server.domain;

import jakarta.persistence.AttributeConverter;

public class CategoryConverter implements AttributeConverter<Category, String> {
    @Override
    public String convertToDatabaseColumn(final Category attribute) {
        return attribute.getCode();
    }

    @Override
    public Category convertToEntityAttribute(final String dbData) {
        return Category.ofCode(dbData);
    }
}
