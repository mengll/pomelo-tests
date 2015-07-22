  var pomelo = window.pomelo;
      var host = "123.57.233.38"; // 服务器的地址
      var port = "3010"; // socket创建的端口
      function show() { //客户端发起的请求链接
        pomelo.init({
          host: host,
          port: port,
          log: true
        }, function() {//调用了服务器的 connector.entryHandler.entry 这个方法 第二个参数是传递的参数，第三个参数是回调的函数
        pomelo.request("connector.entryHandler.entry", "hello pomelo", function(data) {
            alert(data.msg);
          });
        });
      }
