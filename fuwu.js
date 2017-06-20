var http = require("http");//nodejs 加载模块的方法，

http.createServer(function(req,res){
	var postHTML =
	'<p>'+"好烦啊"+'</p>';
	res.writeHead(200,{"Content-Type":"text/html"});
	res.write(postHTML);
	res.end()
}).listen(8090);
