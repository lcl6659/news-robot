var getCodeWaitState = 0; //是否正在获取验证码 0没有，1有
var uploader;
$(function() {

	//点击获取验证码
	$("#getCode").on("click", function() {
		if(getCodeWaitState == 0) {
			commFuncs.ajaxGetCode();
		}
	});

	//找回密码，用户注册提交
	$("#findPwdBtn,#regBtn").on("click", function() {
		var mobile = $("#mobileInput").val();
		var code = $("#codeInput").val();
		var newPwd = $("#newPwd").val();


		if(mobile == "") {
			$("#mobileInput").parent().next().text("必须填写");
			return false;
		} else if(!commFuncs.checkMobile(mobile)) {
			$("#mobileInput").parent().next().text("手机号码格式有误");
			return false;
		} else {
			$("#mobileInput").parent().next().text("");
		}

		if(code == "") {
			$("#codeInput").parent().next().text("必须填写");
			return false;
		} else {
			$("#codeInput").parent().next().text("");
		}
		
		if(newPwd == "") {
			$("#newPwd").parent().next().text("必须填写");
			return false;
		} else {
			$("#newPwd").parent().next().text("");
		}

		/*$("#form01").submit();*/
		location.href = "registeSuccess.html"

	});
	
	
	//登录
	$("#loginBtn").on("click",function(){
		var mobile = $("#mobileInput").val();
		var pwd = $("#pwd").val();


		if(mobile == "") {
			$("#mobileInput").parent().next().text("必须填写");
			return false;
		} else if(!commFuncs.checkMobile(mobile)) {
			$("#mobileInput").parent().next().text("手机号码格式有误");
			return false;
		} else {
			$("#mobileInput").parent().next().text("");
		}
		
		if(pwd == "") {
			$("#pwd").parent().next().text("必须填写");
			return false;
		} else {
			$("#pwd").parent().next().text("");
		}
		
		
		userFuncs.ajaxLogin(mobile,pwd,function(data){
			//TODO 登录后处理
			
			//失败  $("#loginError").text("错误信息");
			
			//成功  location.href = "跳转地址"
		});
		
	});
	
	
	
	//修改密码
	$("#changePwd").on("click",function(){
		var mobile = $("#mobileInput").val();
		var oldPwd = $("#oldPwd").val();
		var newPwd = $("#newPwd").val();


		if(mobile == "") {
			$("#mobileInput").parent().next().text("必须填写");
			return false;
		} else if(!commFuncs.checkMobile(mobile)) {
			$("#mobileInput").parent().next().text("手机号码格式有误");
			return false;
		} else {
			$("#mobileInput").parent().next().text("");
		}
		
		if(oldPwd == "") {
			$("#oldPwd").parent().next().text("必须填写");
			return false;
		} else {
			$("#oldPwd").parent().next().text("");
		}
		
		if(newPwd == "") {
			$("#newPwd").parent().next().text("必须填写");
			return false;
		} else {
			$("#newPwd").parent().next().text("");
		}
		
		//TODO ajax提交修改密码
		
		
	});
	
	

});

(function() {
	
	//ajax登录
	function ajaxLogin(mobile,pwd,cb){
		$.ajax({
			url: "登录url",
			dataType: "json",
			type: "post",
			data:{
				mobile:mobile,
				password:pwd
			},
			success: function(data) {
				cb && cb(data);
			},
			error: function() {
				$("#loginError").text("登录异常");
			}
		})
	}
	


	window.userFuncs = {
		ajaxLogin:ajaxLogin
	}
})();