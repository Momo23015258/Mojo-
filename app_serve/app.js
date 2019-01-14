//加载express
const express = require("express");
const pool = require("./pool");
//创建express对象
var app = express();
//2.1加载跨域访问组件
const cors = require("cors");
//2.2配置允许脚手架访问程序
app.use(cors({
  origin:["http://127.0.0.1:3001","http://localhost:3001"],
  credentials:true
}));

//3.指定端口
app.listen(3044);
//指定静态目录
app.use(express.static(__dirname+"/public"));

