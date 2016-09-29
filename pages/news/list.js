/**
 * Created by QingLiang.TAN on 2016/9/27.
 */

//获取应用实例
var app = getApp();
Page({
    data : {
        list : [
            {
                "id" : "146771400700",
                "image" : "http://image.ashermed.com/Upload/201601/21/837036be6e83961893abcd1efceccbee.jpg",
                "title" : "DAA时代中国丙型肝炎研究的挑战和机遇",
                "createtime" : "2016-06-03",
                "content" : "<video controls=\"controls\" id=\"_vid\" src=\"http://image.ashermed.com/Upload/201601/21/DAA时代中国丙型肝炎研究的挑战和机遇.mp4\" ontimeupdate=\"mytimeupdate(this)\" onseeked=\"myseeked(this)\" oncontextmenu=\"return false;\" webkit-playsinline=\"\">                            <!--    <source src=\"1_1.mp4\" type=\"video/mp4\"></source>-->                            <!--<source src=\"myvideo.ogv\" type=\"video/ogg\"></source>                    <source src=\"myvideo.webm\" type=\"video/webm\"></source>                    <object width=\"\" height=\"\" type=\"application/x-shockwave-flash\" data=\"myvideo.swf\">                        <param name=\"movie\" value=\"1_1.mp4\" />                        <param name=\"flashvars\" value=\"autostart=true&amp;file=1_1.mp4\" />                    </object>-->                            当前浏览器不支持 video直接播放，点击这里下载视频：                    <!--<a href=\"\">下载视频</a>-->                        </video>"
            },
            {
                "id" : "1467714009037",
                "image" : "http://image.ashermed.com/Upload/201601/21/a956ad449efe7abd5ea1013115fded93.jpg",
                "title" : "临床病例分享-肾移植术后HBV合并HCV",
                "createtime" : "2016-07-27",
                "content" : "<video controls=\"controls\" id=\"_vid\" src=\"http://image.ashermed.com/Upload/201601/21/DAA时代中国丙型肝炎研究的挑战和机遇.mp4\" ontimeupdate=\"mytimeupdate(this)\" onseeked=\"myseeked(this)\" oncontextmenu=\"return false;\" webkit-playsinline=\"\">                            <!--    <source src=\"1_1.mp4\" type=\"video/mp4\"></source>-->                            <!--<source src=\"myvideo.ogv\" type=\"video/ogg\"></source>                    <source src=\"myvideo.webm\" type=\"video/webm\"></source>                    <object width=\"\" height=\"\" type=\"application/x-shockwave-flash\" data=\"myvideo.swf\">                        <param name=\"movie\" value=\"1_1.mp4\" />                        <param name=\"flashvars\" value=\"autostart=true&amp;file=1_1.mp4\" />                    </object>-->                            当前浏览器不支持 video直接播放，点击这里下载视频：                    <!--<a href=\"\">下载视频</a>-->                        </video>"
            },
            {
                "id" : "1467714011076",
                "image" : "http://image.ashermed.com/Upload/201601/21/fb0ad2d4f11677dbd516d23e19bea228.jpg",
                "title" : "丙肝病例分享",
                "createtime" : "2016-05-17",
                "content" : "<video controls=\"controls\" id=\"_vid\" src=\"http://image.ashermed.com/Upload/201601/21/DAA时代中国丙型肝炎研究的挑战和机遇.mp4\" ontimeupdate=\"mytimeupdate(this)\" onseeked=\"myseeked(this)\" oncontextmenu=\"return false;\" webkit-playsinline=\"\">                            <!--    <source src=\"1_1.mp4\" type=\"video/mp4\"></source>-->                            <!--<source src=\"myvideo.ogv\" type=\"video/ogg\"></source>                    <source src=\"myvideo.webm\" type=\"video/webm\"></source>                    <object width=\"\" height=\"\" type=\"application/x-shockwave-flash\" data=\"myvideo.swf\">                        <param name=\"movie\" value=\"1_1.mp4\" />                        <param name=\"flashvars\" value=\"autostart=true&amp;file=1_1.mp4\" />                    </object>-->                            当前浏览器不支持 video直接播放，点击这里下载视频：                    <!--<a href=\"\">下载视频</a>-->                        </video>"
            },
            {
                "id" : "1467714011076",
                "image" : "http://image.ashermed.com/Upload/201601/21/39d08247dc701d7de195b38eb28d2a6a.jpg",
                "title" : "AASLD丙型肝炎速递",
                "createtime" : "2016-05-17",
                "content" : "<video controls=\"controls\" id=\"_vid\" src=\"http://image.ashermed.com/Upload/201601/21/DAA时代中国丙型肝炎研究的挑战和机遇.mp4\" ontimeupdate=\"mytimeupdate(this)\" onseeked=\"myseeked(this)\" oncontextmenu=\"return false;\" webkit-playsinline=\"\">                            <!--    <source src=\"1_1.mp4\" type=\"video/mp4\"></source>-->                            <!--<source src=\"myvideo.ogv\" type=\"video/ogg\"></source>                    <source src=\"myvideo.webm\" type=\"video/webm\"></source>                    <object width=\"\" height=\"\" type=\"application/x-shockwave-flash\" data=\"myvideo.swf\">                        <param name=\"movie\" value=\"1_1.mp4\" />                        <param name=\"flashvars\" value=\"autostart=true&amp;file=1_1.mp4\" />                    </object>-->                            当前浏览器不支持 video直接播放，点击这里下载视频：                    <!--<a href=\"\">下载视频</a>-->                        </video>"
            }
        ]
    },
    onLoad : function(options){
        // 页面初始化 options为页面跳转所带来的参数
        if(!app.globalData.userInfo){
            // wx.redirectTo({url : '../user/login'});
        }
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