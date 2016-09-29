/**
 * Created by QingLiang.TAN on 2016/9/27.
 */

//获取应用实例
var app = getApp();
Page({
    data : {
        loadingHidden : false,
        list : []
    },
    onLoad : function(options){
        // 页面初始化 options为页面跳转所带来的参数
        var that = this;

        //ajax请求数据
        wx.request({
            url : 'https://api.douban.com/v2/movie/search',
            data : options,
            header : {
                'Content-Type' : 'application/x-www-form-urlencoded'
            },
            success : function(res){
                // console.log(res.data);
                that.setData({
                    loadingHidden : true,
                    list : res.data.subjects
                })
            }
        });


    },
    onReady : function(){
        // 页面渲染完成
    },
    onShow : function(){
        // 页面显示
    },
    onHide : function(){
        // 页面隐藏
    },
    onUnload : function(){
        // 页面关闭
    }
})