/**
 * Created by QingLiang.TAN on 2016/9/27.
 */


//获取应用实例
var app = getApp();
Page({
    data : {
        // text:"这是一个页面"
    },
    onLoad : function(options){
        // 页面初始化 options为页面跳转所带来的参数
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
    },
    formSubmit : function(e){
        // 表单提交

        //判断是否有数据
        if(!e.detail.value.tag){
            return;
        }

        //跳转
        wx.navigateTo({
            url : '../movie/list?tag=' + e.detail.value.tag
        });

    }
})