package com.project.server.common;

import org.springframework.restdocs.payload.FieldDescriptor;

import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

import static org.springframework.restdocs.payload.PayloadDocumentation.fieldWithPath;

public interface DescriptorCollectors<T> {
    List<T> toList(Stream<Descriptor> stream);

    static List<FieldDescriptor> fieldDescriptor(Stream<Descriptor> stream) {
        return stream.map(it -> {
            return fieldWithPath(it.name()).description(it.getDescription()).type(it.getJsonFieldType()).attributes(it.getAttribute());
        }).collect(Collectors.toList());
    }
}
