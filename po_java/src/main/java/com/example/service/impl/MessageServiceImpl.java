package com.example.service.impl;

import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.example.dao.MessageDao;
import com.example.domain.Message;
import com.example.service.MessageService;
import com.example.util.Result;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;

@Service
public class MessageServiceImpl implements MessageService {
    @Autowired
    private MessageDao messageDao;

    @Override
    public void newMessage(Message message) {
        messageDao.insert(message);
    }

    @Override
    public Result selectMessage(HashMap hashMap) {
        LambdaQueryWrapper<Message> lqw = new LambdaQueryWrapper<>();
        lqw.orderByAsc(Message::getDatetime);
        IPage<Message> iPage = new Page<>(1,10);
        messageDao.selectPage(iPage, lqw);
        return new Result(200, iPage.getRecords());
    }
}
