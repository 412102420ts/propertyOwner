package com.example.service.impl;

import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.api.R;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.example.dao.NoticeDao;
import com.example.domain.Notice;
import com.example.service.NoticeService;
import com.example.util.Result;
import com.example.util.ResultList;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.HashMap;
import java.util.List;


@Service
public class NoticeServiceImpl implements NoticeService {
    @Autowired
    private NoticeDao noticeDao;

    @Override
    public ResultList selectAll(HashMap hashMap) {
        LambdaQueryWrapper<Notice> lqw = new LambdaQueryWrapper<>();
        lqw.eq(hashMap.get("type") != null && hashMap.get("type") != "", Notice::getType, hashMap.get("type"));
        lqw.like(hashMap.get("title") != null && hashMap.get("title") != "", Notice::getTitle, hashMap.get("title"));
        lqw.orderByDesc(Notice::getCreatetime);
        if(hashMap.get("createtime") != null && hashMap.get("createtime") != "") {
            String start_create = hashMap.get("createtime").toString().split(",")[0];
            String end_create = hashMap.get("createtime").toString().split(",")[1];
            lqw.between(Notice::getCreatetime, start_create, end_create);
        }
        IPage iPage = new Page(Integer.parseInt(hashMap.get("page").toString()), Integer.parseInt(hashMap.get("size").toString()));
        noticeDao.selectPage(iPage, lqw);

        return new ResultList(iPage.getTotal(), 200, iPage.getRecords());
    }

    @Override
    public Result createNotice(Notice notice) {
        notice.setCreatetime(new Date().getTime());
        int result = noticeDao.insert(notice);
        return new Result(200, result == 1);
    }

    @Override
    public Result selectById(int id) {
        return new Result(200, noticeDao.selectById(id));
    }

    @Override
    public Result updataNotice(Notice notice) {
        int result = noticeDao.updateById(notice);
        return new Result(200, result == 1);
    }

    @Override
    public Result deleteById(int id) {
        int result = noticeDao.deleteById(id);
        return new Result(200, result == 1);
    }
}
