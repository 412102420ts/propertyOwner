package com.example;

import com.example.dao.NoticeDao;
import com.example.service.NoticeService;
import com.example.service.impl.NoticeServiceImpl;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class PoJavaApplicationTests {
    @Autowired
    private NoticeDao noticeDao;

    @Test
    void contextLoads() {
        System.out.println(noticeDao.selectList(null).toString());
    }

}
