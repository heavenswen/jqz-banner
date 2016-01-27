# qiu.banner
双端的轮播图片，支持窗口自适应，左右拖动，无限轮播

必须css
css：.banner{overflow:hidden}.banner ul{ white-space: nowrap;font-size: 0;}

参数：
*obj:输入轮播图的选择器名'.banner'

*list:输入图片集的选择器名如'.banner>ul'

*cell:输入图片集的classname,如'cell'

*time:间隔时间,默认3s

*duration:滑动速度，默认200ms

*distence://当达到多少距离时触发，默认图片的一半宽

*loop：为true时循环播放，默认为true

*fun:返回一个当前目标的index,不受loop影响

* this.trigger(index)传人一个index,注意看设置成循环是会生成连个dom

*this.swipe(val)val为‘right时右滑动，其他为左

*this.stop()停止播放

*this.start(val)开始播放可以传人一个时间(s)

其他：

ie9以上版本

支持jquery or zepto js框架,自适应窗口

支持pc和webkit浏览器鼠标手势左右滑动事件

支持无线循环滚动

支持回调函数
