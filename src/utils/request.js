// 封装请求数据的函数
//用promise封装

function request(url,method="GET"){
    return new Promise((resolve, reject)=>{
        wx.request({
            url,
            method,
            success:res=>{
                resolve(res);
            }
        })
    })
}
// 导出request函数
export default request;