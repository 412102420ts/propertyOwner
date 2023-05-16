package com.example.controller;

import com.example.domain.Notice;
import com.example.domain.NoticeTemplate;
import com.example.service.NoticeService;
import com.example.service.NoticeTemplateService;
import com.example.util.Result;
import com.example.util.ResultList;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;

@RestController
@RequestMapping("/notice")
@CrossOrigin
public class NoticeController {
    @Autowired
    private NoticeService noticeService;
    @Autowired
    private NoticeTemplateService noticeTemplateService;

    @GetMapping("/getDataPage")
    public ResultList getDataPage(@RequestParam HashMap hashMap) {
        return noticeService.selectAll(hashMap);
    }

    @GetMapping("/selectById")
    public Result selectById(int id) {
        return noticeService.selectById(id);
    }

    @PostMapping("/createNotice")
    public Result createNotice(@RequestBody Notice notice) {
        return noticeService.createNotice(notice);
    }

    @PostMapping("/updataNotice")
    public Result updataNotice(@RequestBody Notice notice) {
        return noticeService.updataNotice(notice);
    }

    @PostMapping("/deletetById/{id}")
    public Result deletetById(@PathVariable("id") int id) {
        System.out.println(id);
        return noticeService.deleteById(id);
    }

    @GetMapping("/selectAllTemplate")
    public ResultList selectAllTemplate(@RequestParam HashMap hashMap) {
        return noticeTemplateService.selectAll(hashMap);
    }

    @PostMapping("/createNoticeTemplate")
    public Result createNoticeTemplate(@RequestBody NoticeTemplate noticeTemplate) {
        System.out.println(noticeTemplate.toString());
        return noticeTemplateService.createTemplate(noticeTemplate);
    }

    @PostMapping("/updataNoticeTemplate")
    public Result updataNoticeTemplate(@RequestBody NoticeTemplate noticeTemplate) {
        return noticeTemplateService.updataTemplate(noticeTemplate);
    }

    @PostMapping("/deleteNoticeTemplate/{id}")
    public Result deleteNoticeTemplate(@PathVariable("id") int id) {
        return noticeTemplateService.deleteTemplate(id);
    }

    @GetMapping("/selectTemplateById")
    public Result selectTemplateById(int id) {
        return noticeTemplateService.selectTemplateById(id);
    }
}
