### index.html 首页

### vote/voteList 投票列表
### vote/voteVideoDetail.html 投票-参赛视屏视频详情页

### commonDataList.html 新闻中心列表页面
### commonDataDetail.html 详细页面
### commonDataDetail.html 关于大赛列表页面


### signUp/entryCompetition.html 参加比赛
### signUp/otherSignUp.html  媒体报名
### signUpSuccess.html  报名成功

### leaveMsg.html 客户留言

### user/login.html 登录
### user/register.html 注册	
### user/findPwd.html 找回密码
### user/registeSuccess.html 注册成功
### user/accountInfo.html 账户信息
### user/message.html 站内消息
### user/myVideo.html 拍客
### user/changePwd.html 修改密码

### versionUpgrade.html 浏览器升级提示页面

# 公用弹窗的用法
### 1、alert弹窗
#### 方法：commFuncs.alert("消息",function(){});
#### 说明：第二个参数可以不要，看情况使用，若是有这个方法，怎么点击确定的时候会触发该方法

### 2、confirm弹窗
#### 方法：commFuncs.confirm("消息",function(){},function(){});
#### 说明：第二个参数可以不要，看情况使用，若是有这个方法，怎么点击确定的时候会触发该方法；
#### 同样第三个参数也可以不要，若是有的话，点击取消的时候回触发该方法

### 3、手动删除弹窗
#### 方法：commFuncs.removePopup()
#### 说明：这个方法一般不用调用，但当调用alert、confirm方法里有第二个或第二个方法参数时，就需要在自定义的方法里手动调用这个方法让弹窗消失
