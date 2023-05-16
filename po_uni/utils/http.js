import config from './config.js'

function request(params) {
    uni.request({
        url: config.domain + params.url, //仅为示例，并非真实接口地址。
        method: params.method,
        data: params.data,
        timeout: 30000,
        // header: {
        //     'custom-header': 'hello' //自定义请求头信息
        // },
        success: (res) => {
            if(params.success) params.success(res.data)
        },
        fail: (err) => {
            console.log(err)
            if(params.fail) params.fail(err)
        },
        complete: () => {
            if(params.complete) params.complete()
        }
    });
}

export default {
    request
}