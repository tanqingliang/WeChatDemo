/**
 * Created by QingLiang.TAN on 2016/9/27.
 */


//获取应用实例
var app = getApp();
Page({
    data : {
        modalMsg : '对话框内容',
        modalHidden : true
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
        // console.log(e)
        console.log(e.detail.value);
        if(!e.detail.value.mobile || !e.detail.value.pwd){
            return;
        }

        if(e.detail.value.mobile != '17091959740' || e.detail.value.pwd != '123456'){
            //弹出对话框
            this.setData({
                modalMsg : '手机或密码错误，登陆失败。',
                modalHidden : false
            })
        } else {
            app.globalData.userInfo = {
                userName : '谭青亮',
                mobile : '17091959740'
            };
            wx.redirectTo({url : '../news/list'});
        }
    },
    modalConfirm : function(){
        //确认对话框
        this.setData({
            modalMsg : '',
            modalHidden : true
        })
    }
})