package com.example.domain;

import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableName;
import lombok.Data;

@Data
@TableName("message")
public class Message {
    @TableField("fromId")
    private int fromId;
    @TableField("toId")
    private int toId;
    private String context;
    private Long datetime;

    public Message(int fromId, int toId, String context, Long datetime) {
        this.fromId = fromId;
        this.toId = toId;
        this.context = context;
        this.datetime = datetime;
    }

    public Message() {
    }
}
