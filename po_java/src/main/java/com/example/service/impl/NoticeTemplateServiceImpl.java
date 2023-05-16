package com.example.service.impl;

import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.example.dao.NoticeDao;
import com.example.dao.NoticeTemplateDao;
import com.example.domain.NoticeTemplate;
import com.example.service.NoticeTemplateService;
import com.example.util.Result;
import com.example.util.ResultList;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.HashMap;

@Service
public class NoticeTemplateServiceImpl implements NoticeTemplateService {
    @Autowired
    private NoticeTemplateDao noticeTemplateDao;

    @Override
    public ResultList selectAll(HashMap hashMap) {
        LambdaQueryWrapper<NoticeTemplate> lqw = new LambdaQueryWrapper();
        lqw.like(hashMap.get("name") != null && hashMap.get("name") != "", NoticeTemplate::getName, hashMap.get("name"));
        IPage iPage = new Page(Integer.parseInt(hashMap.get("page").toString()), Integer.parseInt(hashMap.get("size").toString()));
        noticeTemplateDao.selectPage(iPage, lqw);
        return new ResultList(iPage.getTotal(), 200, iPage.getRecords());
    }

    @Override
    public Result createTemplate(NoticeTemplate noticeTemplate) {
        noticeTemplate.setCreatetime(new Date().getTime());
        int resule = noticeTemplateDao.insert(noticeTemplate);
        return new Result(200, resule == 1);
    }

    @Override
    public Result updataTemplate(NoticeTemplate noticeTemplate) {
        int result = noticeTemplateDao.updateById(noticeTemplate);
        return new Result(200, result == 1);
    }

    @Override
    public Result deleteTemplate(int id) {
        int result = noticeTemplateDao.deleteById(id);
        return new Result(200, result == 1);
    }

    @Override
    public Result selectTemplateById(int id) {
        return new Result(200, noticeTemplateDao.selectById(id));
    }
}
