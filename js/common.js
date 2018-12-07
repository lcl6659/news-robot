
$(function(){
	
	//初始化公共组件
	commFuncs.initPublicModel();
	
	//点击搜索类型,出现下拉选择面板
	$("#selectSearchType").on("click",function(){
		if($("#typeBoxPanel").attr("show-state")==1){
			$("#typeBoxPanel").slideUp();
			$("#typeBoxPanel").attr("show-state",0)
		}else{
			$("#typeBoxPanel").slideDown();
			$("#typeBoxPanel").attr("show-state",1)
		}
	});
	
	//点击其他地方，搜索类型下拉框收起
	$(document).on("click",function(e){
		if(e.target.className!="select-type"){
			$("#typeBoxPanel").slideUp(100);
			$("#typeBoxPanel").attr("show-state",0)
		}
	});
	
	//选择搜索类型
	$("#typeBoxPanel").on("click",".select-type",function(){
		$("#selectSearchType").text($(this).text());
		$("#searchType").val($(this).attr("search-type"));
		$("#typeBoxPanel").slideUp(100);
		$("#typeBoxPanel").attr("show-state",0)
	});
	
	
	//鼠标移到导航上，出现下拉面板
	$("#mainNav li").hover(
		function(){
			if($(this).find(".nav-down-box").length>0){
				$(this).find(".nav-down-box").stop().slideDown();
			}
		},
		function(){
			if($(this).find(".nav-down-box").length>0){
				$(this).find(".nav-down-box").stop().slideUp();
			}
		}
	);
	
	//历史记录回到上一个页面
	$(".back-prev-page").on("click",function(){
		history.back();
	});
	
	
	//右侧推荐栏 大家都在看tab切换
	$(document).on("click",'[look-index]',function(){
		var lookIndex = $(this).attr("look-index");
		if(lookIndex!=""){
			$(this).addClass("active").siblings(".one-tab").removeClass("active");
			$(this).parent().parent()
				.find(".look-list[look-box-index='"+parseInt(lookIndex)+"']")
				.addClass("active")
				.siblings(".look-list").removeClass("active");
		}
	})
	
	//禁止弹窗出现后底部滑动
	$("#commonPopup").on("mousewheel",function(){
		return false;
	});
	//窗口大小调整，弹窗大小适配
	$(document).resize(function(){
		if($("#commonPopup").length>0){
			commFuncs.initPopup();
		}
	});
	
	
	//选择区域，地区鼠标滑上去，出现下级地区
	$("#areaBox").on("mouseover","[down-index]",function(){
		var downIndex = $(this).attr("down-index");
		if(downIndex!=""){
			$(this).addClass("active").siblings(".a-select-02").removeClass("active");
			
			$("#areaBox").find(".one-type-select-02[down-box='"+parseInt(downIndex)+"']")
				.addClass("active").siblings(".one-type-select-02").removeClass("active");
		}
	});
	
	//返回顶部
	$("#backToTop").on("click",function(){
		commFuncs.windowScrollTo(0,200,true);
	});
	
	
});

/*
 * 通用方法
 */
(function(){
	
	//初始化公共组件
	function initPublicModel(){
		initBaiduShare();//初始化页面的分享插件
	}
	
	//初始化弹窗样式
	function initPopup(){
		var windowHeight = $(window).height();
		//删除原有的弹窗
		if($("#commonPopup").length>0){
			$("#commonPopup").remove();
		}
		var $_popHtml = $('<div class="common-popup-000" id="commonPopup">'+
							'<div class="bottom-modal"></div>'+
							'<div class="popup-body">'+
								'<span class="close-popup"></span>'+
								'<div class="popup-content"></div>'+
								'<div class="alert-btn">确定</div>'+
								'<div class="confirm-btn-box">'+
									'<div class="confirm-btn">确定</div>'+
									'<div class="cancle-btn">取消</div>'+
								'</div>'+
							'</div>'+
						'</div>');
		$("body").append($_popHtml);
		//添加叉叉的监听事件
		$("#commonPopup .close-popup").off("click").on("click",function(){
			$("#commonPopup").remove();
		});
		$("#commonPopup").height(windowHeight);
	}
	
	
	//alert弹窗
	function alert(msg,cb){
		initPopup();
		
		$("#commonPopup").find(".popup-content").html(msg);
		$("#commonPopup").find(".alert-btn").show();
		
		//监听确定事件
		$("#commonPopup .alert-btn").off("click").on("click",function(){
			if(cb){
				cb && cb();
			}else{
				$("#commonPopup").remove();
			}
		})
	}
	
	//confirm弹窗
	function confirm(msg,okFunction,cancleFunction){
		initPopup();
		
		$("#commonPopup").find(".popup-content").html(msg);
		$("#commonPopup").find(".confirm-btn-box").show();
		
		//监听确定事件
		$("#commonPopup .confirm-btn").off("click").on("click",function(){
			if(okFunction){
				okFunction && okFunction();
			}else{
				$("#commonPopup").remove();
			}
		});
		
		//监听取消事件
		$("#commonPopup .cancle-btn").off("click").on("click",function(){
			if(cancleFunction){
				cancleFunction && cancleFunction();
			}else{
				$("#commonPopup").remove();
			}
		});
		
	}
	
	
	//删除弹窗
	function removePopup(){
		$("#commonPopup").remove();
	}
	
	
	//初始化分享
	function initBaiduShare(){
		if($(".share-page-box-HHH").length>0){
			
			var $_shareHtml = $('<div class="bdsharebuttonbox" data-tag="share_1"><span class="share-text">分享到：</span><a class="bds_qzone" data-cmd="qzone" href="#"></a><a class="bds_tsina" data-cmd="tsina"></a><a class="bds_more" data-cmd="more"></a></div>');
			$(".share-page-box-HHH").append($_shareHtml);
			
			window._bd_share_config = {
				share:[{
						"tag" : "share_1",
						"bdSize" : 16
				}]
			}
			//以下为js加载部分
			with(document)0[(getElementsByTagName('head')[0]||body).appendChild(createElement('script')).src='http://bdimg.share.baidu.com/static/api/js/share.js?cdnversion='+~(-new Date()/36e5)];
		}
	}
	
	
	//ajax获取验证码
	function ajaxGetCode() {
		$.ajax({
			url: "获取验证码url",
			dataType: "json",
			type: "post",
			success: function(data) {
				setCodeCountDown();
			},
			error: function() {

			}
		});
	}

	//获取验证码倒计时
	function setCodeCountDown() {
		getCodeWaitState = 1;
		var n = 60;
		$("#getCode").text(n + "s");
		var interval = setInterval(function() {
			n = n - 1;
			$("#getCode").text(n + "s");
			if(n == 0) {
				clearInterval(interval);
				$("#getCode").text("获取验证码");
				getCodeWaitState = 0;
			}
		}, 1000);
	}

	//检查手机号码格式
	function checkMobile(mobileNumber) {
		var mobileReg = /^1[0-9]{10}$/;
		if(mobileReg.test(parseInt(mobileNumber))) {
			return true;
		} else {
			return false;
		}
	}
	
	
	/*
	 * 滚动条滚动到制定位置
	 * topNumber:垂直滚动条的要滚动到的制定位置
	 * speed:耗时，即速度
	 * animate:是否开启动画
	 */
	function windowScrollTo(topNumber,speed,animate) {
		if(animate){
			$('html,body').stop().animate({
				scrollTop: topNumber
			}, speed);
		}else{
			$(window).scrollTop(topNumber);
		}
		
	}
	
	window.commFuncs = {
		initPublicModel:initPublicModel,
		initPopup:initPopup,
		initBaiduShare:initBaiduShare,
		ajaxGetCode: ajaxGetCode,
		setCodeCountDown: setCodeCountDown,
		checkMobile: checkMobile,
		alert:alert,
		confirm:confirm,
		removePopup:removePopup,
		windowScrollTo:windowScrollTo
	}
})();
