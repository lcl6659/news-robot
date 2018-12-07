var getCodeWaitState = 0; //是否正在获取验证码 0没有，1有
var uploader;
$(function() {

	//点击获取验证码
	$("#getCode").on("click", function() {
		if(getCodeWaitState == 0) {
			commFuncs.ajaxGetCode();
		}
	});

	//参加比赛提交
	$("#signUp01").on("click", function() {
		var userName = $("#userNameInput").val();
		var mobile = $("#mobileInput").val();
		var code = $("#codeInput").val();

		if(userName == "") {
			$("#userNameInput").parent().next().text("必须填写");
			return false;
		} else {
			$("#userNameInput").parent().next().text("");
		}

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

		/*$("#form01").submit();*/
		location.href = "signUpSuccess.html"

	});

	//媒体报名提交
	$("#signUp02").on("click", function() {
		var pressName = $("#pressNameInput").val();
		var userName = $("#userNameInput").val();
		var mobile = $("#mobileInput").val();
		var code = $("#codeInput").val();

		if(pressName == "") {
			$("#pressNameInput").parent().next().text("必须填写");
			return false;
		} else {
			$("#pressNameInput").parent().next().text("");
		}

		if(userName == "") {
			$("#userNameInput").parent().next().text("必须填写");
			return false;
		} else {
			$("#userNameInput").parent().next().text("");
		}

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

		if($("uploadImgBox").find(".one-upload").length == 0) {
			$("#uploadImgBox").parent().next().text("至少上传一张图片");
			return false;
		} else {
			$("#uploadImgBox").parent().next().text("");
		}

		/*$("#form02").submit();*/
		location.href = "signUpSuccess.html"
	});
	
	
	//删除上传的图片
	$("#uploadImgBox").on("click",".remove-img",function(){
		var fileid = $(this).parent().attr("file-id");
		uploader.removeFile(fileid,true);
		$(this).parent().remove();
	});

});

(function() {

	//初始化图片上传预览
	function initWebUploader() {
		uploader = WebUploader.create({

			// 选完文件后，是否自动上传。
			auto: false,

			// swf文件路径
			//注意;这里要使用全路径
			swf: '../../js/webupload/Uploader.swf',

			// 文件接收服务端。
			server: '',

			// 选择文件的按钮。可选。
			// 内部根据当前运行是创建，可能是input元素，也可能是flash.
			pick: '#filePicker',
			
			fileNumLimit:3,//验证文件总数量, 超出则不允许加入队列。
			
			fileSingleSizeLimit:51200000,//验证单个文件大小是否超出限制

			// 只允许选择图片文件。
			accept: {
				title: 'Images',
				extensions: 'jpg,jpeg,bmp,png',
				mimeTypes: 'image/jpg,image/jpeg,image/bmp,image/png'
			}
		});
		
		uploader.option( 'thumb', {
		    type: "jpg"
		})

		// 当有文件添加进来的时候
		uploader.on('fileQueued', function(file) {
			// 创建缩略图
			var fileId = file.id;//上传列队标识，可用来删除它，防止不能继续上传了
			console.log( uploader.getFiles()); 
			if(file.size>5120000){
				setTimeout(function(){
					uploader.removeFile(file,true);
				},1000);
				commFuncs.alert("上传图片超过5M");
			}else{
				uploader.makeThumb(file, function(error, src) {
					var $oneupload = $('<div class="one-upload" style="">'+
								'<span class="remove-img"></span>'+
								'<input type="hidden" name="uploadImg" value="'+src+'" />'+
							'</div>');
					$oneupload.css("background-image","url("+src+")");
					$oneupload.attr("file-id",fileId);
					$("#uploadImgBox").append($oneupload);
				},1,1);
			}
			
		});

	}

	window.signFuncs = {
		initWebUploader: initWebUploader
	}
})();