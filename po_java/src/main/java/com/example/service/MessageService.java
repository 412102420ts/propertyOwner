package com.example.service;

import com.example.domain.Message;
import com.example.util.Result;
import org.springframework.transaction.annotation.Transactional;

import java.util.HashMap;

@Transactional
public interface MessageService {
    void newMessage(Message message);

    Result selectMessage(HashMap hashMap);
}
