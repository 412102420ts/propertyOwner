package com.example.service;

import com.example.domain.Notice;
import com.example.util.Result;
import com.example.util.ResultList;
import org.springframework.transaction.annotation.Transactional;

import java.util.HashMap;
import java.util.List;

@Transactional
public interface NoticeService {
    ResultList selectAll(HashMap hashMap);

    Result createNotice(Notice notice);

    Result selectById(int id);

    Result updataNotice(Notice notice);

    Result deleteById(int id);
}
