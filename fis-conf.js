
fis.match('*.*',{
	release:false
})
fis.match('jqz-banner.js',{
	optimizer: fis.plugin('uglify-js'),
	release:'./jqz-banner.min.js'
})
fis.match('jqz-banner.css',{
	release:'./jqz-banner.css'
})
fis.media('hb').match('*.*',{
	useHash:true,
	release:'/trunk/$0'
})
