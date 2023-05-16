package com.example.util;

import lombok.Data;

@Data
public class Result {
    private int code;
    private Object data;

    public Result(int code, Object data) {
        this.code = code;
        this.data = data;
    }

    public Result() {
    }
}
