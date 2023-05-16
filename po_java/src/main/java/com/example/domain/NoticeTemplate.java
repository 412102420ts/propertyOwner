package com.example.domain;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import lombok.Data;

@Data
@TableName("notice_template")
public class NoticeTemplate {
    @TableId(type = IdType.AUTO)
    private int id;
    private String name;
    private String context;
    private Long createtime;
}
