var mainBannerSwiper;
var listSwiper01;
var hotSwiper;
$(function() {
	indexFuncs.initPage();
});

(function() {

	/*
	 * 初始化页面
	 */
	function initPage() {
		initMainBanners();
		initListSwiper01();
		initHotSwiper();
	}

	/**
	 * 初始化banner
	 */
	function initMainBanners() {
		if($("#bannerSwipe").find(".swiper-slide").length>1){
			mainBannerSwiper = new Swiper('#bannerSwipe', {
				pagination: '.pagination',
				autoplay: 5000, //可选选项，自动滑动
				speed: 300,
				paginationClickable: true,
				loop: true, //可选选项，开启循环
				autoplayDisableOnInteraction: false //用户操作swiper之后，是否禁止autoplay
			});
		}else{
			mainBannerSwiper = new Swiper('#bannerSwipe', {
				pagination: '.pagination',
			});
		}
	}

	/*
	 * 初始化底部的轮播
	 */
	function initListSwiper01() {
		var listSwiper01 = new Swiper('#listSwiper01', {
			autoplay: 5000, //可选选项，自动滑动
			slidesPerView: 4,
			autoplayDisableOnInteraction: false //用户操作swiper之后，是否禁止autoplay
		});
		
		//左箭头点击
		$('.box-07 .arrow-left').on('click', function(e) {
			e.preventDefault()
			listSwiper01.swipePrev();
		});
		
		//右箭头点击
		$('.box-07 .arrow-right').on('click', function(e) {
			e.preventDefault()
			listSwiper01.swipeNext();
		});
	}
	
	
	/*
	 * 热点轮播初始化
	 */
	function initHotSwiper(){
		hotSwiper = new Swiper('#hotSwiper', {
			pagination: '.pagination02',
			autoplay: 5000, //可选选项，自动滑动
			speed: 300,
			paginationClickable: true,
			loop: true, //可选选项，开启循环
			autoplayDisableOnInteraction: false //用户操作swiper之后，是否禁止autoplay
		});
	}

	/*tab切换*/
	$(document).on("click", "[tab-index]", function() {
		var tabIndex = $(this).attr("tab-index");
		if(tabIndex != "") {
			$(this).addClass("active").siblings().removeClass("active");

			$(this).parent().parent()
				.find(".tab-content-box[tab-box-index='" + parseInt(tabIndex) + "']").addClass("active")
				.siblings(".tab-content-box").removeClass("active");
		}
	});

	window.indexFuncs = {
		initPage: initPage
	}
})();