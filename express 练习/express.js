var express = require('express');//导入express库
var bodyParser = require("body-parser");//导入处理post请求的中间件
var app = express();//创建express的实例
//使用这个中间件放置到自定义处理函数的前面
app.use(bodyParser.json())//use专门使用中间件的方法
app.use(bodyParser.urlencoded({//使用url编码来处理from表单提交post请求
	extended:true
}))
//指静态资源目录
app.use(express.static('html'));
app.use(express.static('css'));

app.get('/',function(req,res){//创建一个路由，处理“/”路径的前端请求
	res.send("撸霸天");//发送一段字符前端
	
})
app.post('/login',function(req,res){//处理登录的post请求
	res.json({code:0});//给前端相应一个json对象回去
})
app.listen(8090,function(){
	console.log("链接成功")
	})
