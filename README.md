# node-cors-demo

## cors 跨域资源共享 Cross-Origin Resource Sharing
> XMLHttpRequest和FetchAPI遵循同源策略。这意味着使用这些API的Web应用程序只能从加载应用程序的用一个域请求HTTP资源除非使用CORS头文件    
> 浏览器支持在API容器中（例如XMLHttpRequest 或 Fetch）使用CORS，以降低跨域HTTP请求所带来的风险   
> 相关介绍  
> https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Access_control_CORS  

## 数据库 mac下安装
### 下载地址  
> https://dev.mysql.com/downloads/file/?id=479114
### 安装
> 双击mysql-xxx.dmg 进行安装  
> 安装完成后会有一个随机的初始密码一定要记住
### 启动
> 下载完成后可在“系统偏好设置”中找到MySQL 点击出现弹窗后可以启动
### 指令
> 启动指令  
> sudo /usr/local/mysql/support-files/mysql.server start
> 关闭指令  
> sudo /usr/local/mysql/support-files/mysql.server stop
> 重启指令  
> sudo /usr/local/mysql/support-files/mysql.server restart  
### 登录
> mysql -u root -p '安装完成后给出的那个随机密码'
### 密码
> 第一次登录后进行操作会提示你更改密码  
> set password = password('设置新的密码')  
### 帮助
> 服务未启动  
> ERROR 2002 (HY000): Can't connect to local MySQL server through socket '/tmp/mysql.sock' (2)  
> 账号密码不对  
> ERROR 1045 (28000): Access denied for user 'greatjiang'@'localhost' (using password: NO)  
> 首次访问需要重置密码  
> ERROR 1820 (HY000): You must reset your password using ALTER USER statement before executing this statement  
> command not found  
> https://www.jianshu.com/p/289d8ad3defa  
> https://www.jianshu.com/p/ba2216596569  
### 管理工具 Sequel Pro 开源
> 下载地址  
> http://www.sequelpro.com  
> 点击打开输入 Name、Host(127.0.0.1)、Username(root)、Password  
> 成功登陆  

## node MySQL 驱动配置
> npm i mysql  

  const mysql = require('mysql')

  const connection =  mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    port: '3306',
    database: 'system-jiang'
  })
  connection.connect()

  module.exports = connection

## 接口编写
    app.get('/getData', (req, res, next) => {
    const sql = "select * from usermes"
    connection.query(sql,(err,result) => {
      if(err) {
        console.log('[SELECT ERROR] - ', err.message)
        return false
      }
      console.log('result',result)
      res.status(200)
      res.json(result)
    })
    console.log('connection end')
    // connection.end()
  })

