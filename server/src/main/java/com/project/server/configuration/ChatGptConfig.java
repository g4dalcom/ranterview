package com.project.server.configuration;

import com.theokanning.openai.service.OpenAiService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.time.Duration;

@Slf4j
@Configuration
public class ChatGptConfig {
    @Value("${gpt.token}")
    private String token;

    @Bean
    public OpenAiService openAiService() {
        log.info("token = {}", token);
        return new OpenAiService(token, Duration.ofSeconds(60));
    }
}
