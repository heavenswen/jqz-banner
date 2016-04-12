# jqz-banner

<p>基于jquery,zeptojs开发的支持手机端，pc端双端的轮播图片，支持窗口自适应，左右拖动，无限轮播，可扩展性</p>

<p style = 'color:red'>核心css:<br/>
.banner ul{ white-space: nowrap;font-size:0}<br/>
.banner ul li{width: 100%;display:inline-block;font-size:1.4rem}
</p>
<h5>基础结构</h5>
<code>
	&lt;div class =&#x27;banner&#x27;&gt;
		&lt;ul&gt;
			&lt;li&gt;&lt;img /&gt;&lt;li&gt;
		&lt;/ul&gt;
	&lt;/div&gt;
</code>
<h5>初始化</h5>
<code>
	&lt;script&gt;
		var banner = new $.jqz_banner();
	&lt;/script&gt;
</code>
<h5>参数：</h5>	
<ol>
	<li>obj:指定一个对象将作为轮播图;默认‘.banner’。
	<li>cell:输入图片目标className,默认'cell'
	<li>time:间隔时间,默认3s;当为false时不轮播
	<li>duration:滑动速度，默认200ms
	<li>distence://当达到多少距离时触发，默认图片的一半宽
	<li>loop：为true时循环播放，默认为true
	<li>fun:返回一个当前目标的index,不受loop影响
	<li>nav:给一个对象添加为轮播图导航，会在目标对象下生成图片集的<a>标签，并添加class='active'标记当前的位置，默认是没有样式的，方便用css自定样式。
</ol>
<h5>事件：</h5>
<ul>
	
	<li> this.goto(index)传入一个index,默认0为第一张
	
	<li>this.swipe(val)val为‘right时右滑动，其他为左
	
	<li>this.stop()停止播放
	
	<li>this.start(val)开始播放可以传人一个时间(s)
</ul>

