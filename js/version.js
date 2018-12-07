//判断当前浏览类型 
function BrowserType() {
	var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串 
	var isOpera = userAgent.indexOf("Opera") > -1; //判断是否Opera浏览器 
	var isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1 && !isOpera; //判断是否IE浏览器 
	var isEdge = userAgent.indexOf("Windows NT") > -1 && userAgent.indexOf("Trident") && !isIE; //判断是否IE的Edge浏览器 
	var isFF = userAgent.indexOf("Firefox") > -1; //判断是否Firefox浏览器 
	var isSafari = userAgent.indexOf("Safari") > -1 && userAgent.indexOf("Chrome") == -1; //判断是否Safari浏览器 
	var isChrome = userAgent.indexOf("Chrome") > -1 && userAgent.indexOf("Safari") > -1; //判断Chrome浏览器 

	if(isIE) {
		var reIE = new RegExp("MSIE (\\d+\\.\\d+);");
		reIE.test(userAgent);
		var fIEVersion = parseFloat(RegExp["$1"]);
		if(fIEVersion == 7) {
			var v = {
				type: "IE",
				version: 7
			}
			return v;
		} else if(fIEVersion == 8) {
			var v = {
				type: "IE",
				version: 8
			}
			return v;
		} else if(fIEVersion == 9) {
			var v = {
				type: "IE",
				version: 9
			}
			return v;
		} else if(fIEVersion == 10) {
			var v = {
				type: "IE",
				version: 10
			}
			return v;
		} else if(fIEVersion == 11) {
			var v = {
				type: "IE",
				version: 11
			}
			return v;
		} else {
			var v = {
				type: "IE",
				version: "版本太低"
			}
			return v;
		}
	}

	if(isFF) {
		var v = {
			type: "Firefox"
		}
		return v;
	}
	if(isOpera) {
		var v = {
			type: "Opera"
		}
		return v;
	}
	if(isSafari) {
		var v = {
			type: "Safari"
		}
		return v;
	}
	if(isChrome) {
		var v = {
			type: "Chrome"
		}
		return v;
	}
	if(isEdge) {
		var v = {
			type: "Edge"
		}
		return v;
	}
}

var browserVersion = BrowserType();
if(browserVersion.type == "IE" && browserVersion.version < 9) {
	window.location.href = 'versionUpgrade.html';
}