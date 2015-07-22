1.Application Application prototype.应用程序对象原型
Application.getBase() // Application = pomelo.createApp();
type: method
Get application base path
// cwd: /home/game/ pomelo start // app.getBase() -> /home/game //获取当前的路径
Source //源代码
Application.getBase = function() {
  return this.get(Constants.Reserved.BASE);
};
