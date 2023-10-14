package com.project.server.common;

import org.springframework.restdocs.payload.JsonFieldType;
import org.springframework.restdocs.snippet.Attributes;

public interface Descriptor {
    String name();
    JsonFieldType getJsonFieldType();
    String getDescription();
    Attributes.Attribute getAttribute();
}
