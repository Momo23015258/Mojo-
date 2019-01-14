SET NAMES UTF8;
DROP DATABASE IF EXISTS kw;
CREATE DATABASE kw CHARSET=utf8;
#2:进入     fb
USE kw;
CREATE TABLE kw_user(
  uid   INT PRIMARY KEY AUTO_INCREMENT,
  uname VARCHAR(25),
  upwd  VARCHAR(32)
);
INSERT INTO kw_user VALUES(null,'tom',md5('123'));
INSERT INTO kw_user VALUES(null,'dongdong',md5('123'));
INSERT INTO kw_user VALUES(null,'jerry',md5('123'));
