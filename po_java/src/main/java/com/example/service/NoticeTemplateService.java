package com.example.service;

import com.example.domain.NoticeTemplate;
import com.example.util.Result;
import com.example.util.ResultList;
import org.springframework.transaction.annotation.Transactional;

import java.util.HashMap;

@Transactional
public interface NoticeTemplateService {
    ResultList selectAll(HashMap hashMap);

    Result createTemplate(NoticeTemplate noticeTemplate);

    Result updataTemplate(NoticeTemplate noticeTemplate);

    Result deleteTemplate(int id);

    Result selectTemplateById(int id);
}
