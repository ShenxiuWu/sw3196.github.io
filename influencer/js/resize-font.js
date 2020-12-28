//
//(function (doc, win) {
//  var docEl = doc.documentElement,
//      resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
//      recalc = function () {
//          var clientWidth = docEl.clientWidth;
//          if (!clientWidth) return;
//          docEl.style.fontSize = 100 * (clientWidth / 640) + 'px';
//      };
//  // Abort if browser does not support addEventListener
//  if (!doc.addEventListener) return;
//  win.addEventListener(resizeEvt, recalc, false);
//  doc.addEventListener('DOMContentLoaded', recalc, false);
//	})(document, window);







//new function (){
// var _self = this;
// _self.width = 640;//设置默认最大宽度
// _self.fontSize = 100;//默认字体大小
// _self.widthProportion = function(){var p = (document.body&&document.body.clientWidthdocument.getElementsByTagName("html")[0].offsetWidth)/_self.width;return p>1?1:p<0.5?0.5:p;};
// _self.changePage = function(){
//     document.getElementsByTagName("html")[0].setAttribute("style","font-size:"+_self.widthProportion()*_self.fontSize+"px !important");
// }
// _self.changePage();
// window.addEventListener("resize",function(){_self.changePage();},false);
//};
//	





   (function(){
		function setHtmlFont(){
		  var deviceWidth = document.documentElement.clientWidth;
	       	  var dpr = window.devicePixelRatio;
		  if(deviceWidth > 640) {
			deviceWidth = 640;	
		  }
		  document.documentElement.style.fontSize = deviceWidth / 6.4 + 'px';
		  document.documentElement.setAttribute("data-dpr",dpr);
		}
		window.onresize=function(){  
		   setHtmlFont();
		}
		setHtmlFont(); 
   })(window);