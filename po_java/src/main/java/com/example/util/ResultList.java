package com.example.util;

import com.example.domain.Notice;
import lombok.Data;

import java.util.List;

@Data
public class ResultList {
    private Long total;
    private List<Notice> data;
    private int code;

    public ResultList(Long total, int code, List<Notice> data) {
        this.total = total;
        this.code = code;
        this.data = data;
    }

    public ResultList() {
    }
}
