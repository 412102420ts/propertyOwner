export default {
    // 替换列表
    assignmentList: (list_x:Array<any>, list_y:Array<any>) => {
        list_x.length = 0
        list_y.forEach((item:any, index:number) => {
        list_x[index] = item
        })
    },
    // 替换obj
    assignmentObj: (obj_x:any, obj_y:any) => {
        Object.keys(obj_y).forEach(item => {
          if(obj_y[item]) obj_x[item] = obj_y[item]
        })
    },
    // 时间戳转换
    filterCreatetime: (ct: number) => {
        if(!ct) return '-'
        const date = new Date(ct)
        const year = date.getFullYear()
        const month = date.getMonth() + 1
        const day = date.getDate()
        const hours = date.getHours()
        const minutes = date.getMinutes()
        return `${year}-${month}-${day} ${hours}:${minutes}`
    }
}