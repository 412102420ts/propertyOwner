package com.example.domain;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import lombok.Data;

@Data
@TableName("notice")
public class Notice {
    @TableId(type = IdType.AUTO)
    private int id;
    private String title;
    private String context;
    private Long createtime;
    private int type;
    private String author;
}
