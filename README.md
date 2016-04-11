# jqz-banner

<p>基于jquery,zeptojs开发的支持手机端，pc端双端的轮播图片，支持窗口自适应，左右拖动，无限轮播，可扩展性</p>

<p style = 'color:red'>核心css:<br/>
.banner ul{ white-space: nowrap;}</p>
<h5>基础结构</h5>
<code>
	<div class ='banner'>
		<ul>
			<li><img /><li>
		</ul>
	</div>
</code>
<h5>初始化</h5>
<code>
	<script>
		var banner = new $.jqz_banner();
	</script>
</code>
<h5>参数：</h5>	
<ol>
	<li>obj:指定一个对象将作为轮播图;默认‘.banner’。
	<li>list：指定一个轮播图的图片合集。
	<li>cell:输入图片目标className,默认'cell'
	<li>time:间隔时间,默认3s
	<li>duration:滑动速度，默认200ms
	<li>distence://当达到多少距离时触发，默认图片的一半宽
	<li>loop：为true时循环播放，默认为true
	<li>fun:返回一个当前目标的index,不受loop影响
</ol>
<h5>事件：</h5>
<ul>
	
	<li> this.trigger(index)传入一个index,注意看设置成循环是会生成两个dom，要算入生成以后的数目（！）
	
	<li>this.swipe(val)val为‘right时右滑动，其他为左
	
	<li>this.stop()停止播放
	
	<li>this.start(val)开始播放可以传人一个时间(s)
</ul>

