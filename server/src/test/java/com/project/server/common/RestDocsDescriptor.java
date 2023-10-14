package com.project.server.common;

import lombok.RequiredArgsConstructor;
import lombok.ToString;

import java.util.Arrays;
import java.util.stream.Stream;

@RequiredArgsConstructor
@ToString(of = "descriptors")
public class RestDocsDescriptor {
    private final Stream<Descriptor> descriptors;

    public RestDocsDescriptor(Descriptor... descriptor) {
        this.descriptors = Arrays.stream(descriptor);
    }

    public DescriptorStream of() {
        return new DescriptorStream(this.descriptors);
    }

    public DescriptorStream of(Descriptor... descriptor) {
        if (descriptor == null || descriptor.length < 1) {
            throw new IllegalArgumentException("descriptor argument must have length; it must not be null or empty");
        }

        return new DescriptorStream(Arrays.stream(descriptor));
    }
}
